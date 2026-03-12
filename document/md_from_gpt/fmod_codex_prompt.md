# 给 VSCode / CODEX 的启动提示词

你正在接手一个 FMOD Studio 2.02.15 插件脚本环境的类型生成项目。

## 项目目标
为 FMOD Studio 2.02.15 的脚本环境生成可维护的 TypeScript `.d.ts` 文件。

当前目标不是一次性做完全部生成器，而是先做出第一版可运行的采集器与后处理骨架。

## 当前明确约束
- 运行时是功能不完整的 ES5
- 不调用业务函数进行探测
- 默认禁用 `ManagedObject` 实例层深探测，因为曾导致 FMOD 编辑器崩溃
- `_` 前缀成员必须保留，不可过滤
- 重点支持 FMOD Studio 2.02.15，暂不考虑多版本兼容
- 需要兼顾后续 GitHub 开源维护

## 当前已确认的技术路线
采用五源合并方案：
1. 运行时反射探测
2. `project.model` schema 探测
3. 内置脚本静态分析（`api.js`、`managed_objects.js`）
4. 官方文档校准
5. 手写 `.d.ts` 覆盖层

## 第一阶段请优先完成的内容

### 1. 实现 FMOD 内部采集器
目标文件：
- `scripts/probe.js`
- `scripts/probe-config.js`

功能要求：
- 扫描宿主 API 层并输出 `data/runtime.jsonl`
- 全量扫描 `studio.project.model` 并输出 `data/model.jsonl`
- 导出内置脚本：
  - `data/builtin/api.js`
  - `data/builtin/managed_objects.js`
  - `data/builtin/qwebchannel.js`
- 统一使用 `try/catch` 包裹所有高风险反射操作
- 默认不做 `ManagedObject` 实例层深探测

### 2. 为后处理预留 Node 侧骨架
目标文件：
- `tools/parse-jsonl.ts`
- `tools/parse-builtins.ts`
- `tools/merge-ir.ts`
- `tools/emit-dts.ts`

先不用把最终 `.d.ts` 全做完，但至少把：
- JSONL 读取
- 基础 IR 结构
- builtin 文本读取
搭起来。

## 运行时扫描必须遵守的规则

### 成员发现
不能只依赖 `Object.getOwnPropertyNames()`。
必须：
1. 先扫 `ownNames`
2. 识别签名式属性名，例如 `getText(QString,QString)`
3. 从签名式属性名派生逻辑名，例如 `getText`
4. 对逻辑名做额外补扫，因为已确认存在：
   - `key in obj === true`
   - `hasOwnProperty === true`
   - `getOwnPropertyDescriptor()` 可返回 descriptor
   - 但 `getOwnPropertyNames()` 不包含该逻辑名

### 宿主函数
已确认存在 `[object QtFunction]`。
对于宿主函数：
- `length` 不可靠
- 参数信息优先使用签名式属性名

### 签名式属性名
例如：
- `getText(QString)`
- `getText(QString,QString)`
- `print(QString)`

必须：
- 解析逻辑名
- 解析参数类型名
- 记录为单独事件
- 后续用来归并 TypeScript overload

### `project.model`
必须全量扫描 205 个 entity。
已确认字段：
- entity: `superEntities`, `isAbstract`, `isGlobal`, `isSingleton`, `properties`, `relationships`
- property descriptor: `dataType`, `defaultValue`
- relationship descriptor: `cardinality`, `destinationType`, `isRequired`

必须对 raw / normalized 双存，尤其是：
- `defaultValue`
- `isRequired`

## 推荐 JSONL 事件类型
实现时至少支持：
- `session`
- `root`
- `entity`
- `property`
- `callable`
- `signatureMember`
- `modelEntity`
- `modelProperty`
- `modelRelationship`
- `error`

## 类型归一化建议

### 宿主签名参数类型
- `QString` → `string`
- `double` → `number`
- `int` → `number`
- `bool` / `boolean` → `boolean`
- `QScriptValue` → `any`
- 其他 → `any`

### `project.model` property dataType
- `String` → `string`
- `Bool` → `boolean`
- `Int` → `number`
- `Float` → `number`
- `Enum` → `number`
- 其他 → `any`

### relationship cardinality
- `ToOne` → `one`
- `ToMany` → `many`

### 字符串值归一化
- `"true"` → `true`
- `"false"` → `false`
- 数字字符串 → `number`
- 其他保持原始字符串

## 内置脚本静态分析的重点

### `api.js`
优先提取：
- `studio` 顶层骨架
- enum-like 对象
- 全局别名
- `studio.project.ManagedObject._extensions`
- wrapper 模式（`_native` / `_internal` / `runExtension` / `runRootExtension`）

### `managed_objects.js`
优先提取：
- `studio._internal.extensions`
- `checkArguments("fn", [...])` 参数签名
- `project.create("Type")` 返回对象线索
- `project.model.X.isObjectOfType(...)` 使用场景

### `qwebchannel.js`
第一版可仅导出，不必深入分析。

## 建议输出目录结构

```text
/scripts
  probe.js
  probe-config.js

/tools
  parse-jsonl.ts
  parse-builtins.ts
  merge-ir.ts
  emit-dts.ts

/data
  runtime.jsonl
  model.jsonl
  builtin/
    api.js
    managed_objects.js
    qwebchannel.js
  ir/
    host.json
    model.json
    extensions.json
    enums.json

/generated
  fmod.host.generated.d.ts
  fmod.project-model.generated.d.ts
  fmod.project-extensions.generated.d.ts

/manual
  fmod.manual.d.ts

/src
  index.d.ts
```

## 首要实现顺序

### Phase 1
先实现 `probe.js` 最小可运行版：
- writer
- `safe*` 工具函数
- object id 分配
- 宿主 API 层扫描
- `runtime.jsonl`

### Phase 2
加入：
- `signatureMember`
- 逻辑名补扫
- `QtFunction` / wrapper 分类

### Phase 3
加入：
- `project.model` 全量扫描
- `model.jsonl`

### Phase 4
加入：
- builtin 脚本导出

### Phase 5
实现 Node 侧：
- JSONL 解析
- builtin 解析
- IR 合并
- 初版 `.d.ts` 发射

## 你在回答时的风格要求
- 优先给出可运行代码
- 不要重复泛泛而谈的设计讨论
- 每一步都尽量可直接落地
- 遇到不确定的点，用保守实现并明确标注 TODO
- 先追求稳定可运行，再追求精细类型

## 当前最优先任务
请从 `scripts/probe.js` 和 `scripts/probe-config.js` 开始，给出第一版最小可运行实现。