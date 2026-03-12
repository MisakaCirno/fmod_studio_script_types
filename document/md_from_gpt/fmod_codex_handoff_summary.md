# FMOD `.d.ts` 生成项目交接摘要

## 项目目标
为 FMOD Studio 2.02.15 的插件脚本环境生成可维护的 TypeScript 声明文件（`.d.ts`）。

目标分两层：
- 第一阶段：高覆盖、可用的 `.d.ts`
- 第二阶段：更高语义质量，包括重载、枚举、注释、对象关系和更准确的返回值

## 当前已确认的重要事实

### 运行时能力
FMOD 脚本运行时是功能不完整的 ES5，但以下能力可用：
- `Object.keys`
- `Object.getOwnPropertyNames`
- `Object.getPrototypeOf`
- `Object.getOwnPropertyDescriptor`
- `Function.prototype.toString`
- `Object.prototype.toString`
- `Array.isArray`

### 文件能力
FMOD 提供 `studio.system.getFile()` 和 `studio.system.File`，可直接读写文本文件。

### 可读取的内置脚本
已确认以下内置脚本可直接读取：
- `:/Scripts/api.js`
- `:/Scripts/managed_objects.js`
- `:/qtwebchannel/qwebchannel.js`

其中前两个应作为正式静态分析输入源。

## 已确认的技术路线

### 五源合并方案
1. 运行时反射探测
2. `project.model` schema 探测
3. 内置脚本静态分析（`api.js`、`managed_objects.js`）
4. 官方文档校准
5. 手写 `.d.ts` 覆盖层

### 主要产物建议
- `data/runtime.jsonl`
- `data/model.jsonl`
- `data/builtin/api.js`
- `data/builtin/managed_objects.js`
- `data/builtin/qwebchannel.js`
- `generated/fmod.host.generated.d.ts`
- `generated/fmod.project-model.generated.d.ts`
- `generated/fmod.project-extensions.generated.d.ts`
- `manual/fmod.manual.d.ts`

## 运行时探测的关键结论

### 宿主签名式属性名
`Object.getOwnPropertyNames(studio.system)` 包含如下名字：
- `require(QString)`
- `backtrace()`
- `print(QString)`
- `getText(QString)`
- `getText(QString,QString)`
- `getNumber(QString)`
- `getNumber(QString,double)`
- `start(QString,QScriptValue)`
- `getFile(QString)`
等。

结论：
- 这些是宿主元数据通道
- 可提供方法名、参数个数、参数类型提示、重载信息
- 生成器应把它们归并成 TypeScript overload

### 宿主异常反射行为
在 `studio.system` 上已确认：
- `getText`
- `getNumber`
- `print`
- `backtrace`

满足：
- `key in obj === true`
- `hasOwnProperty === true`
- `getOwnPropertyDescriptor()` 可返回 descriptor
- 但 `Object.getOwnPropertyNames()` 不包含该逻辑名

结论：
- 成员发现不能只依赖 `Object.getOwnPropertyNames()`
- 必须对签名成员派生出的逻辑名进行补扫

### 逻辑名入口与签名入口不是同一个函数对象
例如：
- `studio.system.getText !== studio.system["getText(QString)"]`
- `studio.system.getText !== studio.system["getText(QString,QString)"]`

结论：
- 它们应被视作同一逻辑 API 组的多个宿主入口
- 最终生成时用逻辑名作为 TS 方法名，签名名提供 overload 信息

### `QtFunction`
宿主函数值常表现为：
- `Object.prototype.toString.call(fn) === "[object QtFunction]"`

结论：
- `QtFunction` 应单独标记
- 对它们，`length` 不可靠
- 参数信息优先来自签名式属性名

## `project.model` 的关键结论

### 规模
- `studio.project.model` 的 own names 数量为 205
- 其中实体数量也是 205
- 可视为纯实体注册表

### 每个 entity 可直接读到的元信息
- `superEntities`
- `isAbstract`
- `isGlobal`
- `isSingleton`
- `properties`
- `relationships`

### property 描述对象
own names 只有：
- `dataType`
- `defaultValue`

### relationship 描述对象
own names 只有：
- `cardinality`
- `destinationType`
- `isRequired`

### 已见 `dataType` 取值
- `String`
- `Bool`
- `Int`
- `Float`
- `Enum`

### 已见 `cardinality` 取值
- `ToOne`
- `ToMany`

### 运行时值归一化
- `isRequired` 可能表现为字符串 `"true"` / `"false"`
- `defaultValue` 也常表现为字符串

因此 IR 中应同时保留：
- raw value
- normalized value

## 实例层策略
已验证：
- 对某些真实 `ManagedObject` 实例做深层反射会导致 FMOD 编辑器崩溃

结论：
- 第一版默认禁用 `ManagedObject` 实例层深探测
- 第一版主数据源为：
  - 宿主 API 层
  - `project.model` schema 层
  - 内置脚本静态分析

## 内置脚本的关键价值

### `api.js`
价值：
- `studio` 顶层结构骨架
- 枚举对象
- 全局别名
- wrapper 函数实现
- `ManagedObject._extensions`
- `_internal` / `runExtension` / `runRootExtension` 模式

非常关键的一点：
`studio.project.ManagedObject._extensions` 暴露了很多按实体组织的扩展方法，例如：
- `Event.play()`
- `Event.stopImmediate()`
- `Folder.getItem(path)`
- `Workspace.addEvent(eventName, withSpatializer)`

这些方法不应依赖实例层探测，而应优先从静态源码提取。

### `managed_objects.js`
价值：
- `studio._internal.extensions` 中的大量扩展函数
- `checkArguments("fn", [...])` 暴露参数签名
- `project.create("Type")` 暴露返回对象线索
- `project.model.X.isObjectOfType(...)` 的实际用法

非常关键的一点：
- `Project.Entity` 很可能具备 `isObjectOfType(obj)` 等类型判断能力
- 该文件提供了高质量的参数名和返回对象线索

### `qwebchannel.js`
当前定位：
- 环境背景参考
- 暂不作为第一版主输入源

## 推荐 IR 分层
建议至少拆成：
- host object IR
- model entity IR
- extension method IR
- enum IR
- alias IR

## 推荐 `.d.ts` 输出分层
- `generated/fmod.host.generated.d.ts`
- `generated/fmod.project-model.generated.d.ts`
- `generated/fmod.project-extensions.generated.d.ts`
- `manual/fmod.manual.d.ts`

## 参数与类型映射建议

### 宿主签名参数
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
- `ToOne` → `Destination | null`
- `ToMany` → `Destination[]`

## 当前推荐的实现顺序

### Phase 1
实现 `probe.js` 最小可运行版：
- writer
- `safe*` 工具函数
- `runtime.jsonl`
- 宿主 API 层扫描

### Phase 2
加入：
- `signatureMember`
- 逻辑名补扫
- `QtFunction` / wrapper 分类增强

### Phase 3
加入：
- `project.model` 全量扫描
- `modelEntity / modelProperty / modelRelationship`

### Phase 4
加入：
- 内置脚本导出

### Phase 5
Node 侧实现：
- `parse-jsonl.ts`
- `parse-builtins.ts`
- `merge-ir.ts`
- `emit-dts.ts`

## 当前最重要的规则

1. 不调用业务函数
2. 不做实例层深探测
3. `_` 前缀成员要完整保留
4. 成员发现不能只依赖 `Object.getOwnPropertyNames()`
5. 签名名和逻辑名需要双轨记录
6. `project.model` 是第一版主数据源之一
7. `api.js` 与 `managed_objects.js` 是正式输入源

## 在 CODEX 中的直接起步建议
第一步先让 CODEX 实现：
- `scripts/probe.js`
- `scripts/probe-config.js`

要求：
- 在 FMOD 内部运行
- 输出 `runtime.jsonl`
- 输出 `model.jsonl`
- 导出 `builtin/*.js`
- 默认不碰 `ManagedObject` 实例层

然后再让 CODEX 实现 Node 侧合并与 `.d.ts` 生成。

