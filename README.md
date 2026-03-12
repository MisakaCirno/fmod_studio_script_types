# fmod-generate-type

为 **FMOD Studio Scripting API** 生成可用的 TypeScript `.d.ts` 类型定义。  
当前主目标版本：**FMOD Studio 2.02.15**。

## 1. 项目目标

本项目使用多源信息合并来生成类型：

1. FMOD 运行时反射探测（`data/runtime.jsonl`）
2. `studio.project.model` schema 探测（`data/model.jsonl`）
3. 内置脚本静态分析（`api.js` / `managed_objects.js`）
4. 官方文档人工校准
5. 手写覆盖层（`src/manual-overrides.d.ts`）

## 2. 仓库结构

```txt
scripts/      FMOD 内执行的探测脚本
tools/        Node 侧解析与 d.ts 生成器
src/          类型入口与手写覆盖层
generated/    自动生成的 d.ts
data/         探测输出（本地产物）
overrides/    本地 JSON 覆盖（增量修补）
document/     项目文档、handoff、阶段总结
```

## 3. 环境要求

1. Node.js 18+（建议）
2. FMOD Studio 2.02.15
3. 在 FMOD Console 可执行 `studio.system.require(...)`

## 4. 快速开始

### 4.1 安装依赖

```bash
npm install
```

### 4.2 在 FMOD 中执行探测

在 FMOD Console 执行（路径按你的本地仓库调整）：

```js
studio.system.require("D:/FMOD/Scripts/fmod_generate_type/scripts/probe-config.js");
ProbeConfig.outputDir = "D:/FMOD/Scripts/fmod_generate_type/data";
studio.system.require("D:/FMOD/Scripts/fmod_generate_type/scripts/probe.js");
```

产出：

- `data/runtime.jsonl`
- `data/model.jsonl`
- `data/builtin/api.js`
- `data/builtin/managed_objects.js`
- `data/builtin/qwebchannel.js`

### 4.3 生成并校验 d.ts

```bash
npm run check:types
```

### 4.4 打包供其他项目引用

```bash
npm run pack:types
```

会生成类似 `fmod-generate-type-0.1.0.tgz` 的包文件，可在其他项目中安装。

## 5. 在其他项目中使用

推荐安装 `.tgz` 包，不要直接复制整个仓库。

```bash
npm i /path/to/fmod-generate-type-0.1.0.tgz
```

类型入口为：

- `src/index.d.ts`

该入口已引用：

- `generated/fmod.host.generated.d.ts`
- `generated/fmod.project-model.generated.d.ts`
- `generated/fmod.project-extensions.generated.d.ts`
- `src/manual-overrides.d.ts`

## 6. 常用命令

```bash
npm run build:tools   # 仅构建 tools 到 dist
npm run build:dts     # 构建并生成 d.ts
npm run check:types   # 生成 + 类型校验
npm run pack:types    # 生成 + 打包 tgz
```

## 7. 覆盖与修补机制

1. 手写覆盖层：`src/manual-overrides.d.ts`
2. 本地 JSON 覆盖：`overrides/local-overrides.json`

建议：

1. 不要直接修改 `generated/*.d.ts`
2. 通过 `tools/*`、`src/manual-overrides.d.ts` 或 `overrides/local-overrides.json` 修补

## 8. 额外专项探测

`getFile()` 返回对象专项探测脚本：

- `scripts/probe-getfile.js`

可输出：

- `data/getfile-probe.json`

用于细化 `StudioScriptFile` 相关类型。

## 9. 已知边界

1. FMOD 脚本运行时是非完整 ES5，存在宿主对象行为差异
2. `QtFunction` 参数个数不可依赖 `length`
3. 部分返回对象（如 `QByteArray`）仍需更多实测来继续收紧类型
4. 当前默认不做 `ManagedObject` 实例层深探测（稳定性优先）

## 10. License

See [LICENSE](./LICENSE).
