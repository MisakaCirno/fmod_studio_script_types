# FMOD DTS 生成项目阶段总结（截至 2026-03-09）

## 1. 项目目标与边界
- 目标：为 FMOD Studio 2.02.15 脚本环境生成可用的 TypeScript `.d.ts`。
- 约束：
  - 运行时为不完整 ES5。
  - 探测阶段不调用业务函数。
  - 默认禁用 `ManagedObject` 实例深探测（稳定性优先，避免崩溃）。
  - `_` 前缀成员必须保留。
  - 当前主目标版本：2.02.15。
- 总体路线：五源合并  
  1) runtime 反射  
  2) `project.model` schema  
  3) 内置脚本静态分析  
  4) 官方文档校准  
  5) 手写覆盖层

---

## 2. 目录与文档整理现状
- 文档已集中到 `document/`：
  - GPT 来源：`document/md_from_gpt/*`
  - 官方文档快照：`document/fmod_documention/snapshot_2.02.33/*`
  - 官方文档索引说明：`document/fmod_documention/fmod_document_api_reference.md`
- 本次新增总结位置：`document/md_from_codex/`

---

## 3. 已完成工作（从起步到当前）

### 3.1 第一阶段采集器（FMOD 内部执行）
- 已实现：
  - `scripts/probe-config.js`
  - `scripts/probe.js`
- 产物：
  - `data/runtime.jsonl`
  - `data/model.jsonl`
  - `data/builtin/api.js`
  - `data/builtin/managed_objects.js`
  - `data/builtin/qwebchannel.js`
- 已处理关键稳定性问题：
  - 输出目录写入失败（路径与目录创建）修复。
  - 统一高风险反射 `try/catch`。
  - 签名式属性名识别（如 `getText(QString,QString)`）及逻辑名补扫。
  - 运行时 `entity` 事件重复/遗漏问题修复。

### 3.2 Node 侧生成流水线
- 已建立 `tools/*.ts` + `dist/tools/*.js` 流水线：
  - `parse-jsonl.ts`、`merge-ir.ts`、`emit-dts.ts`
  - `parse-builtins.ts`、`build-dts.ts`
- 生成产物：
  - `generated/fmod.host.generated.d.ts`
  - `generated/fmod.project-model.generated.d.ts`
  - `generated/fmod.project-extensions.generated.d.ts`
  - `src/index.d.ts`（统一入口）

### 3.3 内置脚本静态分析增强
- 提取了 `ManagedObject._extensions` 与 `studio._internal.extensions`。
- 支持：
  - `checkArguments(...)` 参数名提取
  - `runExtension/runRootExtension` 调用映射
  - 可选参数判定（wrapper 参数与 internal 参数对齐）
  - 返回类型提示推断（`project.create(...)` + helper 链传播）
  - `isOfType("X")` 线索提取
  - 多返回类型联合（`A|B`）发射

### 3.4 扩展类型与实体对象类型模型升级
- `FmodEntityObject<TEntity>` 已统一为核心实体对象别名。
- 现包含：
  - `entity/id/isValid/properties/relationships/document/dump/...` 核心 ManagedObject 能力
  - runtime 侧实例接口信息
  - model schema 字段（property/relationship）
  - extension methods
- 已让 `studio.project.model.<Entity>` 自动继承 `studio.project.Entity`（生成器级，不再手工逐个补）。
- 已为 `studio.project.model.<Entity>` 自动补：
  - `findInstances(): Array<FmodEntityObject<"...">>`
  - `singletonInstance(): FmodEntityObject<"..."> | null`
  - `isObjectOfType(...)` 类型守卫
  - `document(): string`

### 3.5 文档覆盖层（人工主导）
- 已实现人工文档覆盖定义：`tools/manual-doc-overrides.ts`
- 已接入生成合并：
  - 文档覆盖 + 本地覆盖（本地优先）
- 已覆盖一批高价值方法（Event/Workspace/Asset/Bank/Mixer/Parameter/Sound/Track 等）。

### 3.6 本地渐进修补机制
- 新增 JSON 覆盖入口：`overrides/local-overrides.json`
- 新增读取与校验：`tools/local-overrides.ts`
- `build:dts` 日志会输出：
  - 本地覆盖条数
  - 本地覆盖路径
  - 覆盖解析告警

### 3.7 `.d.ts` 手写覆盖入口
- 新增稳定入口：`src/manual-overrides.d.ts`
- `src/index.d.ts` 已自动引用该文件（由生成器 `emitIndexDts()` 保证，避免下次构建被覆盖掉）。
- 已在该文件中补充：
  - `Console` 可变参数签名（`log/error/warn/info/debug/assert`）
  - `String.format(...args): string`

### 3.8 全局冲突与编辑器体验问题修复
- 解决与 `lib.dom` 的全局重名冲突（`alert/confirm/console/print/prompt`）：
  - 冲突根通过 `fmodHostShadowedGlobals` 保留。
  - 同时补了安全全局声明，保证不启用 DOM 时也有提示。

### 3.9 作为类型包对外引用
- `package.json` 已可作为类型包发布：
  - `types: "src/index.d.ts"`
  - `files` 仅包含入口与生成 dts + 手写覆盖层
- 脚本：
  - `build:dts`
  - `check:types`
  - `pack:types`（生成 `.tgz`）
- 结论：跨项目安装建议用 `.tgz`（避免目录安装把整仓库内容带过去）。

---

## 4. 当前命令与状态
- 最新验证命令：`npm run check:types`  
  状态：通过。
- 当前关键统计（最近一次构建日志）：
  - runtime records: 82402
  - model records: 2621
  - host interfaces: 24714
  - model entities: 205
  - extension methods: 68

---

## 5. 后续不可忘清单（重点）

### 5.1 技术债 / TODO（已在日志中）
1. `lookup/find/owner/member-access` 返回链推断仍可继续收敛。  
2. runtime instance augmentation 启发式需用更多真实工程快照验证。  

### 5.2 强烈建议的下一步
1. 产出“仍为 `any` 的方法清单”自动报告（优先级排序：高频 API + 运行时可验证）。  
2. 建立“动态校准采样器（白名单只读）”，把真实返回样本落盘到单独 JSONL，再并入合并。  
3. 给文档覆盖/本地覆盖加版本标记（`minVersion/maxVersion`），管理 2.02.33 vs 2.02.15 差异。  
4. 增加“冲突报告”：当 runtime 与 docs/overrides 不一致时输出警告。  

### 5.3 使用约定（避免回归）
1. 不直接改 `generated/*.d.ts`，统一改生成器或 `src/manual-overrides.d.ts`。  
2. 每次修改生成器后必须跑：`npm run check:types`。  
3. 对外分发优先 `npm run pack:types` 后安装 `.tgz`。  
4. `build:dts` 会重写 `src/index.d.ts`，入口引用请改 `tools/emit-dts.ts` 的 `emitIndexDts()`。  

---

## 6. 常用操作速查
- 重新生成：`npm run build:dts`
- 生成+类型校验：`npm run check:types`
- 打包类型包：`npm run pack:types`
- 本地覆盖入口：
  - JSON 覆盖：`overrides/local-overrides.json`
  - d.ts 覆盖：`src/manual-overrides.d.ts`

---

## 7. 里程碑结论
当前已从“采集能跑”推进到“生成可用 + 可持续修补 + 可对外分发”的阶段。  
后续应把重点从“框架搭建”切到“类型精度提升与冲突治理”。

