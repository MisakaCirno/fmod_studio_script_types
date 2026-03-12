# FMOD Studio 插件自动生成 `.d.ts` 计划书

## 背景

- 目标环境：FMOD Studio 2.02.15 插件脚本
- 脚本运行时：功能不完整的 ES5 JavaScript
- 问题：直接写复杂 JS 插件时，错误隐蔽、可维护性差
- 目标：以 TypeScript 编写插件，通过自动探测 FMOD 提供的运行时对象，生成可维护的 `.d.ts`

## 目标分层

### 第一阶段目标

- 生成高覆盖、可用的 `.d.ts`
- 成员名尽量完整
- 函数参数个数尽量正确
- 常见参数类型可映射为基础 TypeScript 类型
- 少量核心对象生成具名接口
- 未知位置允许回退为 `any` 或 `unknown`

### 第二阶段目标

- 逐步补充更高质量语义信息
- 支持重载
- 增补字面量联合、枚举、文档注释
- 提升对象关系与返回值准确度

## 已确认环境信息

### 全局入口对象

通过 `Object.getOwnPropertyNames(this)` 可见：

- `studio`
- `global`
- `console`
- `alert`
- `confirm`
- `prompt`
- `print`
- `gc`
- `version`
- `__filename`
- `__dirname`
- 以及标准 JS 内建对象

### 可用反射与运行时能力

以下能力已确认可用：

- `Object.keys`
- `Object.getOwnPropertyNames`
- `Object.getPrototypeOf`
- `Object.getOwnPropertyDescriptor`
- `Function.prototype.toString`
- `Object.prototype.toString`
- `Array.isArray`

这意味着探测器可以基于 ES5 反射与描述符机制完成结构探测。

### 文件输出能力

FMOD Studio 提供 `studio.system.getFile()` 及 `studio.system.File` 相关 API，可直接写出文本文件。

结论：

- 标准输出介质应为 JSONL 文件
- 不依赖控制台复制转存
- 不依赖外部进程中转

### 内置脚本可直接读取

已确认以下内置脚本可通过 `studio.system.getFile()` + `readText()` 直接读取：

- `:/Scripts/api.js`
- `:/Scripts/managed_objects.js`
- `:/qtwebchannel/qwebchannel.js`

结论：

- 探测器除运行时反射外，还可同时导出内置脚本文本
- `api.js` 与 `managed_objects.js` 应作为正式静态分析输入源
- `qwebchannel.js` 暂作为环境背景参考，不纳入第一版主生成流程

## 核心约束

- 不调用业务函数进行探测
- 无需支持多版本 FMOD
- 允许后续对局部对象进行手工补充分析
- 官方文档不作为统一自动抓取输入源
- 人工维护方式采用手写 `.d.ts` 覆盖层
- 项目目标为开源到 GitHub，需便于长期维护与协作
- 生成目标优先追求 API 可见性与覆盖率

## 总体技术路线

1. 在 FMOD 插件脚本中执行探测逻辑
2. 直接写出 JSONL 原始事实数据
3. 同步导出内置脚本文本快照
4. 在外部使用 Node.js 解析 JSONL 与内置脚本
5. 构建中间表示（IR）
6. 生成自动声明文件 `.d.ts`
7. 结合官方文档与手写覆盖层补充高语义信息

## 五源合并方案

第一版工具链应同时使用以下五类来源：

1. 运行时反射探测
2. `project.model` schema 探测
3. 内置脚本静态分析（`api.js`、`managed_objects.js`）
4. 官方文档校准
5. 手写 `.d.ts` 覆盖层

## 架构分层

### A. FMOD 内部探测器

职责：

- 从根入口出发遍历对象图
- 安全读取属性与描述符
- 记录对象身份与属性关系
- 分类函数
- 对 `studio.project.model` 走专用探测通道
- 导出内置脚本文本快照
- 输出 JSONL

### B. 外部归一化处理器

职责：

- 读取 JSONL
- 读取内置脚本文本
- 合并实体、属性、异常信息
- 去重并建立对象图
- 合并 `project.model` 元信息
- 构建中间表示 IR

### C. `.d.ts` 生成器

职责：

- 从 IR 生成声明文件
- 归并函数签名
- 合并 schema 与静态扩展信息
- 输出稳定顺序，便于 diff
- 附加路径、arity、runtime-kind 等注释
- 预留别名与文档增强注释位
- 默认完整输出所有可探测成员

### D. 手写覆盖层

职责：

- 修正参数名
- 修正返回值
- 增补重载、枚举、联合字面量
- 添加人工文档注释
- 吸收官方文档与内置脚本中的高置信度语义信息

## 根入口策略

### 主入口

- `studio`

### 次入口

- `console`
- `global`
- `print`
- `gc`
- `version`
- `__filename`
- `__dirname`
- `alert`
- `confirm`
- `prompt`

### 不作为生成重点

- JS 标准内建对象，如 `Object`、`Array`、`Math` 等

结论：

- 生成目标聚焦 FMOD 宿主 API 与其暴露的扩展全局
- 不尝试重建整个 ES5 标准库声明

## 覆盖率原则

### 完整性优先于美观性

只要成员可被探测到，就应尽量进入 `.d.ts`。

### `_` 前缀成员处理策略

- `_` 前缀成员必须被记录
- `_` 前缀成员必须被生成到 `.d.ts`
- `_` 前缀只作为“可能偏内部”的提示信息，不作为过滤条件

### `for..in` 与可见性信息

`for..in` 可见性、是否非枚举、是否 `_` 前缀，都可以作为辅助元信息记录，但不作为默认过滤条件。

## 重要发现：宿主签名式属性名

### 典型样本

`Object.getOwnPropertyNames(studio.system)` 的结果包含：

- `require(QString)`
- `backtrace()`
- `verbose(QString)`
- `print(QString)`
- `warn(QString)`
- `error(QString)`
- `message(QString)`
- `question(QString)`
- `getText(QString,QString)`
- `getText(QString)`
- `getNumber(QString,double)`
- `getNumber(QString)`
- `start(QString,QScriptValue)`
- `startAsync(QString,QScriptValue)`
- `getFile(QString)`
- `openMode`
- `permission`
- `processError`
- `Error`

### 结论

这些字符串不能只当作普通属性名处理，应视为宿主元数据通道。它们可直接提供：

- 方法名
- 参数个数
- 参数类型提示
- 重载信息

因此，生成器应解析这类名字，并归并为 TypeScript overload。

## 宿主异常反射行为

已确认在 `studio.system` 上存在一类宿主特殊属性：

- `getText`
- `getNumber`
- `print`
- `backtrace`

其特征为：

- `key in obj === true`
- `Object.prototype.hasOwnProperty.call(obj, key) === true`
- `Object.getOwnPropertyDescriptor(obj, key)` 可返回 descriptor
- 但 `Object.getOwnPropertyNames(obj)` 不包含该逻辑名

结论：

- 成员发现不能只依赖 `Object.getOwnPropertyNames()`
- 对签名成员派生出的逻辑名，必须做额外补扫
- 这类逻辑名入口与签名入口并非同一个函数对象

## 签名解析与归并策略

对于类似 `getText(QString,QString)` 的名称：

- `rawName = "getText(QString,QString)"`
- `logicalName = "getText"`
- `signatureArgs = ["QString", "QString"]`

对普通属性：

- `rawName === logicalName`
- `signatureArgs = null`

### 第一版签名匹配规则

正则思路：

- `^([A-Za-z_$][A-Za-z0-9_$]*)\((.*)\)$`

解析规则：

- 前半段是逻辑方法名
- 后半段按逗号切分参数类型
- 空串表示零参数

### overload 归并规则

若同一对象上存在：

- `foo(T1,...)`
- `foo(T2,...)`
- 且逻辑名 `foo` 可访问

则最终 TypeScript 生成：

- 用 `foo` 作为方法名
- 把所有 `foo(...)` 签名归并为 `foo` 的 overload
- `foo` 本身不单独生成无参重载，除非有独立签名来源

### 参数信息优先级

对于宿主函数，参数信息来源优先级为：

1. 签名式属性名
2. 手写覆盖层 / 官方文档
3. 静态源码中的参数名与参数检查
4. `Function.length`

结论：

- 对 `QtFunction`，`length` 不可靠，不应作为主参数来源

## JSONL 数据模型

建议使用事件流模型，每行一条 JSON 记录。

### `session`

记录：

- 采集时间
- FMOD 版本
- 探测器版本
- 根入口列表
- 运行选项

### `root`

记录根入口绑定：

- `name`
- `objectId`

### `entity`

记录实体：

- `id`
- `kind`: `object | function | primitive | null | unknown`
- `typeof`
- `tag`
- `ctorName`
- `isArray`
- `prototypeId`

### `property`

记录属性关系：

- `ownerId`
- `rawName`
- `logicalName`
- `nameKind`: `plain | signature`
- `signatureArgs`
- `own`
- `enumerable`
- `configurable`
- `writable`
- `descriptorKind`: `data | accessor | unknown`
- `valueKind`
- `valueRef`
- `primitiveValue`
- `readError`
- `visibleInForIn`
- `startsWithUnderscore`
- `discoveredBy`

### `callable`

记录函数附加信息：

- `objectId`
- `name`
- `length`
- `sourceKind`: `native | js | js-wrapper | unknown`
- `sourceSnippet`
- `hostFunctionTag`
- `wrapperKind`

### `signatureMember`

记录宿主签名成员：

- `ownerId`
- `rawName`
- `logicalName`
- `argTypeNames`
- `valueRef`
- `hostFunctionTag`
- `hasLogicalAlias`
- `logicalAliasName`

### `modelEntity`

记录 `project.model` 实体元信息：

- `name`
- `superEntitiesRaw`
- `superEntities`
- `isAbstract`
- `isGlobal`
- `isSingleton`

### `modelProperty`

记录 `project.model` 属性元信息：

- `entityName`
- `name`
- `dataTypeRaw`
- `dataTypeNormalized`
- `defaultValueRaw`
- `defaultValueNormalized`

### `modelRelationship`

记录 `project.model` 关系元信息：

- `entityName`
- `name`
- `cardinalityRaw`
- `cardinalityNormalized`
- `destinationTypeRaw`
- `destinationTypeNormalized`
- `isRequiredRaw`
- `isRequiredNormalized`

### `error`

记录异常：

- `stage`
- `ownerId`
- `propName`
- `message`

## 函数分类策略

### `native`

- `Function.prototype.toString.call(fn)` 包含 `[native code]`

### `js`

- `toString` 成功，且可见普通函数源码

### `js-wrapper`

- `toString` 成功
- 不是 `[native code]`
- 但源码中出现明显转发模式，例如：
  - `.apply(`
  - `.call(`
  - 明显调用 `studio.*`
  - 调用 `this._native.*`
  - 调用 `studio._internal.*`
  - 调用 `studio.runExtension(...)`
  - 调用 `studio.runRootExtension(...)`

### `unknown`

- `toString` 失败或结果不可判定

### 已知样本

- `Function.prototype.toString.call(console.log)`
  - `function () { studio.system.print.apply(this, arguments); }`
- `Function.prototype.toString.call(studio.system.print)`
  - `function print() { [native code] }`
- `studio.project.model.document` 与 `studio.project.model.Event.document` 为可见源码的 JS 包装函数

结论：

- 运行时中同时存在 native、JS wrapper、宿主 `QtFunction`
- `valueTag === "[object QtFunction]"` 时应单独标记为宿主函数
- 该分类信息应写入 `.d.ts` 注释中

## `project.model` 专用探测通道

### 结构结论

已确认：

- `studio.project.model` 的 own names 数量为 205
- 其中实体定义数量同样为 205
- `studio.project.model` 可视为纯实体注册表

### 已知高价值字段

每个实体至少提供：

- `superEntities`
- `isAbstract`
- `isGlobal`
- `isSingleton`
- `properties`
- `relationships`

每个 property 描述对象至少提供：

- `dataType`
- `defaultValue`

每个 relationship 描述对象至少提供：

- `cardinality`
- `destinationType`
- `isRequired`

### 运行时表现

- `dataType` 取值样本：`String`、`Bool`、`Int`、`Float`、`Enum`
- `cardinality` 取值样本：`ToOne`、`ToMany`
- `destinationType` 为实体名字符串
- `defaultValue` 与 `isRequired` 在运行时可能表现为字符串，应做 raw/normalized 双存

### 结论

- `project.model` 不应只按普通对象图处理，应单独全量扫描
- 其输出应作为 schema 主数据源
- 实体继承、属性、关系应在 IR 中单独建模

## 实例层探测策略

### 默认启用

- 宿主 API 层探测
- `project.model` schema 层探测

### 默认禁用

- `ManagedObject` 实例层深探测

### 原因

已验证对真实 `ManagedObject` 实例做某些反射操作可能导致 FMOD 编辑器崩溃。结论：

- 实例层不是第一版主数据源
- 仅允许后续做极小范围、手工、保守的局部验证

## 内置脚本静态分析

## `api.js` 的价值

`api.js` 可作为正式静态信息源，提供：

- `studio` 顶层结构骨架
- enum-like 常量对象
- 全局别名
- wrapper 函数实现
- `ManagedObject._extensions`
- `_internal` / `runExtension` / `runRootExtension` 等包装模式

### 特别结论

`studio.project.ManagedObject._extensions` 暴露了大量按实体类型组织的实例扩展方法，例如：

- `Event.play()`
- `Event.stopImmediate()`
- `Folder.getItem(path)`
- `Workspace.addEvent(eventName, withSpatializer)`

这类方法不应依赖实例层运行时探测，而应优先从静态源码中提取。

## `managed_objects.js` 的价值

`managed_objects.js` 可作为正式静态信息源，提供：

- `ManagedObject` 辅助逻辑
- `studio._internal.extensions` 下的扩展函数
- `checkArguments("fn", [...])` 暴露的参数签名
- `project.create("Type")` 暴露的返回对象线索
- `project.model.X.isObjectOfType(...)` 的运行时类型判断使用场景

### 特别结论

- `Project.Entity` 可能具备 `isObjectOfType(obj)` 等类型判断能力
- `studio._internal.extensions` 中的函数提供了高质量参数名与返回对象线索

## `qwebchannel.js` 的定位

- 作为 Qt 桥接环境背景参考
- 不作为第一版 FMOD `.d.ts` 主输入源

## 类型推断边界

### 可自动推断

- 成员名
- 属性是否存在
- 是否函数
- 宿主函数标签与包装模式
- 基础值类型
- 数组识别
- 宿主签名中的参数个数与部分参数类型提示
- `project.model` 中的实体、属性、关系元信息
- 内置脚本中的 wrapper 方法与参数名线索
- enum-like 常量对象

### 不能可靠自动推断

- 所有返回值语义
- 副作用
- getter 的真实返回语义
- 字面量联合的完整业务含义
- 所有 enum 对应的业务语义名

结论：

- 自动层主要负责结构事实与保守类型
- 高质量返回值、注释、语义重载需依赖手写覆盖层、官方文档与静态源码校准

## 初版参数与 schema 类型映射建议

### 宿主签名参数类型

- `QString` → `string`
- `double` → `number`
- `int` → `number`
- `bool` / `boolean` → `boolean`
- `QScriptValue` → `any`
- 未知宿主类型 → `any`

### `project.model` property dataType

- `String` → `string`
- `Bool` → `boolean`
- `Int` → `number`
- `Float` → `number`
- `Enum` → `number`
- 未知类型 → `any`

### `project.model` relationship cardinality

- `ToOne` → `Destination | null`（若 `isRequired=true` 可后续收紧）
- `ToMany` → `Destination[]`

### 归一化规则

- `"true"` → `true`
- `"false"` → `false`
- 数字字符串 → `number`
- 其他保持原始字符串

## 官方文档的可利用范围

### 总体结论

官方文档不适合作为统一自动抓取输入源，但适合作为高置信度人工增强与规则校准依据。

优先用途：

- 补充返回值类型
- 补充别名关系
- 提炼公共基类与统一接口
- 提炼枚举和值对象结构
- 提供 UI 相关结构化字段信息
- 校准 `Project.Entity` 与 `ManagedObject` 语义

## 首批优先参考模块

- Globals
- System
- Project.Entity
- Project.ManagedObject
- Window
- UI

## `.d.ts` 生成策略

### 顶层声明风格

优先生成真实全局对象风格：

- `declare const studio: Studio;`
- `declare const console: Console;`
- 其他宿主扩展全局按真实对象声明

不优先使用纯 `namespace studio` 风格。

### 分文件输出策略

建议至少拆分为：

- `generated/fmod.host.generated.d.ts`
- `generated/fmod.project-model.generated.d.ts`
- `generated/fmod.project-extensions.generated.d.ts`
- `manual/fmod.manual.d.ts`

### 核心对象命名接口

优先具名接口化：

- `Studio`
- `StudioSystem`
- `StudioProject`
- `ManagedObject`
- `ProjectEntitySchema`
- 其他高频子对象

### 命名优先级

1. 已知根路径语义名
2. 路径派生命名
3. `constructor.name` 作为辅助线索
4. 匿名回退名

### 注释策略

自动生成的声明可附加：

- `@fmod-path`
- `@fmod-runtime`
- `@fmod-arity`
- `@fmod-alias`
- `@fmod-internal-like`
- `@fmod-wrapper-kind`

其中 `@fmod-internal-like` 只作为提示信息，不影响成员是否生成。

## 人工维护策略

采用手写 `.d.ts` 覆盖层，而不是自定义 patch DSL。

建议结构：

- `generated/*.generated.d.ts`：自动生成，可覆盖
- `manual/fmod.manual.d.ts`：人工维护，不覆盖
- `src/index.d.ts`：对外聚合入口

这种结构更适合 GitHub 开源协作与 PR 维护。

## 工程目录建议

```text
/scripts
  probe.js
  probe-config.js

/tools
  parse-jsonl.ts
  parse-builtins.ts
  merge-ir.ts
  emit-dts.ts

/generated
  fmod.host.generated.d.ts
  fmod.project-model.generated.d.ts
  fmod.project-extensions.generated.d.ts

/manual
  fmod.manual.d.ts

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

/src
  index.d.ts

README.md
package.json
tsconfig.json
```

## 风险与限制

- 无法靠纯探测自动得到所有高质量返回值
- getter 访问可能抛错，必须通过 descriptor 与 `try/catch` 保守处理
- 同一对象可能有多个访问路径，必须以 `objectId` 为主键去重
- `js-wrapper` 判定是启发式，不保证绝对准确
- 宿主存在“可描述但不可列名”的非标准反射行为
- `ManagedObject` 实例层深探测存在崩溃风险，默认禁用
- 不考虑多版本兼容，计划书与实现均以 FMOD Studio 2.02.15 为目标
- 官方文档更多用于校准与覆盖，不作为统一机器输入格式

## 当前阶段结论

已确认的正式路线为：

**运行时反射 + ****project.model**** schema + 内置脚本静态分析 + 官方文档校准 + 手写覆盖层**

并在自动层中额外利用：

- 宿主签名式属性名
- 宿主逻辑名补扫
- `QtFunction` 与 wrapper 模式识别
- `project.model` 中可直接读取的实体元信息
- `api.js` 与 `managed_objects.js` 中的静态包装与扩展信息

来提升 overload、返回值、结构化类型与项目对象建模质量。

## 下一步待定事项

- `probe.js` 的遍历算法与安全策略定稿
- 对象去重与 `objectId` 分配策略
- 宿主逻辑名补扫的具体实现
- `project.model` 元信息如何映射到具名接口与关系类型
- `api.js` 与 `managed_objects.js` 的第一版静态解析范围
- 首批手写覆盖层从哪些模块开始落地

## 当前结论

- 计划书已从概念方案收敛为可实施方案
- 官方文档已被纳入“高置信度人工增强依据”
- `_` 前缀成员应完整保留在输出中
- `document()` 的实现可作为专用探测建模参考
- 内置脚本静态分析已从可选增强升级为正式输入源
- 下一阶段应进入 `probe.js` 的实现设计

