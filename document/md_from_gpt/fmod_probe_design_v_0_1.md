# FMOD `probe.js` 设计说明 v0.1

## 目标
在 FMOD 内部一次运行中完成三件事：

1. 扫描宿主 API 层，输出 `runtime.jsonl`
2. 全量扫描 `studio.project.model`，输出 `model.jsonl`
3. 导出内置脚本到 `data/builtin/*.js`

## 非目标
- 不做 `ManagedObject` 实例层深探测
- 不调用业务函数
- 不在 FMOD 内部生成 `.d.ts`

## 配置建议

```js
var ProbeConfig = {
    outputDir: "...",
    roots: [
        { name: "studio", value: studio },
        { name: "console", value: console },
        { name: "global", value: global }
    ],
    includeExtraGlobals: [
        "print",
        "gc",
        "version",
        "__filename",
        "__dirname",
        "alert",
        "confirm",
        "prompt"
    ],
    maxDepth: 6,
    maxPropertiesPerObject: 500,
    scanProjectModel: true,
    exportBuiltins: true,
    builtinPaths: [
        ":/Scripts/api.js",
        ":/Scripts/managed_objects.js",
        ":/qtwebchannel/qwebchannel.js"
    ]
};
```

## 输出文件

```text
/data
  runtime.jsonl
  model.jsonl
  builtin/
    api.js
    managed_objects.js
    qwebchannel.js
```

## 运行时扫描流程

### 1. 初始化
- 创建对象 ID 分配器
- 创建 `seenObjects`
- 打开 `runtime.jsonl`
- 写入 `session`

### 2. 根入口扫描
对每个 root：
- 分配/获取 `objectId`
- 写 `root`
- 进入 `scanValue(rootName, value, depth=0)`

### 3. `scanValue(path, value, depth)`
规则：
- primitive / null 直接记录，不递归
- object / function：
  - 获取或分配 `objectId`
  - 若已扫描过，停止递归
  - 写 `entity`
  - 扫描普通成员
  - 扫描签名成员
  - 从签名成员派生逻辑名并补扫
  - 若是函数，写 `callable`
  - 再决定是否递归值成员

### 4. 普通成员扫描
来源：
- `Object.getOwnPropertyNames(obj)`

对每个 `rawName`：
- 取 descriptor
- 判断 `nameKind`
- 写 `property`
- 若是签名成员，再写 `signatureMember`
- 安全读取值
- 若值是 object/function，递归

### 5. 逻辑名补扫
对所有签名成员派生出的 `logicalName`：
- 若未在 own names 中出现
- 则执行：
  - `key in obj`
  - `hasOwnProperty`
  - `getOwnPropertyDescriptor`
  - 安全读值
- 写 `property`
- `discoveredBy = ["derivedLogicalName"]`

### 6. 函数扫描
对 function 值：
- `typeof`
- `Object.prototype.toString.call(fn)`
- `Function.prototype.toString.call(fn)`
- `fn.length`
- 分类：
  - `native`
  - `js`
  - `js-wrapper`
  - `unknown`
- 额外标记：
  - `hostFunctionTag`
  - `wrapperKind`

## `project.model` 扫描流程
输出到 `model.jsonl`。

### 1. 枚举实体名
- `Object.getOwnPropertyNames(studio.project.model)`

### 2. 识别实体
条件：
- `entity && entity.__proto__ === studio.project.Entity`

### 3. 写 `modelEntity`
字段：
- `name`
- `superEntitiesRaw`
- `superEntities`
- `isAbstract`
- `isGlobal`
- `isSingleton`

### 4. 写 `modelProperty`
遍历 `entity.properties`：
- `name`
- `dataTypeRaw`
- `dataTypeNormalized`
- `defaultValueRaw`
- `defaultValueNormalized`

### 5. 写 `modelRelationship`
遍历 `entity.relationships`：
- `name`
- `cardinalityRaw`
- `cardinalityNormalized`
- `destinationTypeRaw`
- `destinationTypeNormalized`
- `isRequiredRaw`
- `isRequiredNormalized`

## 内置脚本导出流程
对每个 `builtinPath`：
- `getFile(path)`
- `open(ReadOnly)`
- `readText(maxSize)`，循环直到 EOF 或文件长度耗尽
- 写到 `data/builtin/<basename>.js`

第一版也可以简单做一次大块读取。

## 安全策略

### 必须统一封装
所有这些操作都要 `try/catch`：
- `Object.getOwnPropertyNames`
- `Object.getOwnPropertyDescriptor`
- `Object.getPrototypeOf`
- 读取属性值
- `Function.prototype.toString.call`
- `Object.prototype.toString.call`

### 默认禁用
- 实例层深探测
- 对未知对象的 `properties/relationships` 深读
- 调用任何业务函数

### 深度限制
- `maxDepth`
- `maxPropertiesPerObject`

### 去重
- 以对象身份为主
- 路径仅作引用信息
- 同一对象可被多个路径引用

## 第一版归一化函数

### `normalizeHostArgType(raw)`
- `QString` → `string`
- `double` → `number`
- `int` → `number`
- `bool` → `boolean`
- `QScriptValue` → `any`
- 其他 → `any`

### `normalizeModelDataType(raw)`
- `String` → `string`
- `Bool` → `boolean`
- `Int` → `number`
- `Float` → `number`
- `Enum` → `number`
- 其他 → `any`

### `normalizeBooleanLike(raw)`
- `"true"` → `true`
- `"false"` → `false`
- `true/false` 保持
- 其他原样

### `normalizeDefaultValue(raw)`
- 空串保持
- 布尔字符串转 boolean
- 数字字符串转 number
- 否则保持原始字符串

## 当前实现边界
- 先完成 JSONL 与内置脚本导出
- Node 侧再负责 IR 合并与 `.d.ts` 生成
- `ManagedObject` 实例层留待后续独立实验，不进入第一版主流程

