# FMOD 提交变更记录（从 `b777ae0` 开始）

本文档记录从 `b777ae0094d1b1dca1100818bb3062fb2e81bd70` 到当前 `HEAD` 的每一次提交，以及对应修改的详细信息，便于后续追溯和复查。

记录规则：
- 最新提交在最上面。
- 每个 commit 使用一个一级标题。
- 除了提交本身的修改外，也补充当时在对话与运行时探测中确认的重要结论。

相关参考文档：
- `document/md_from_codex/fmod_codex_stage_summary_2026-03-09.md`
- `document/md_from_codex/fmod_dts_backlog_2026-03-09.md`
- `document/md_from_codex/fmod_getfile_probe_notes_2026-03-11.md`

# 49300b1 Add probe scripts for Studio UI dialog behavior

- 日期：2026-03-16
- 涉及文件：
  - `scripts/probe-showmodaldialog-return.js`
  - `scripts/probe-showmodelessdialog-return.js`
  - `scripts/probe-ui-widget-fields.js`

详细修改：
- 新增 `showModalDialog(...)` 返回值探测脚本，用于确认 FMOD 2.02.15 运行时中的真实返回类型。
- 新增 `showModelessDialog(...)` 返回值探测脚本，用于确认无模式对话框接口的真实返回类型。
- 新增 UI 控件字段探测脚本，构造最小化控件描述对象，并在控件构造完成后检查运行时句柄上可见的方法、getter 和字段行为。
- 探测脚本统一记录：
  - 描述对象字段是否被接受
  - 运行时是否存在对应 getter / 方法
  - getter 调用后的返回摘要
  - 未支持字段是否被静默忽略
  - 对话框接口最终返回值摘要

通过这些脚本确认的运行时结论：
- `studio.ui.showModalDialog(...)` 返回 `boolean`。
- `studio.ui.showModelessDialog(...)` 也返回 `boolean`。
- `Label.wordWrap` 在目标运行时中可用。
- `LineEdit` 支持 `text`、`isReadOnly`、`echoMode`、`onTextEdited`、`onEditingFinished`。
- `LineEdit.placeholderText` 在目标运行时中未发现支持。
- `ComboBox.items` 可以作为构造输入，`itemsSource` 不被支持。
- `Slider` 与 `SpinBox` 使用 `range: { minimum, maximum }`，没有发现可直接使用的独立 `minimum` / `maximum` / `singleStep` 描述字段。
- `PathLineEdit.text` 可用，`label` / `caption` / `pathType` 更像构造时消费的字段，而不是可读运行时属性。

为什么需要这次提交：
- 本地文档快照来自 2.02.33，而项目目标运行时是 2.02.15，两者不能直接等同。
- 在收紧 `.d.ts` 前，需要先用运行时探测建立一份可信的证据来源。

# 2c2ac26 Add typed Studio UI dialog overrides from runtime probes

- 日期：2026-03-16
- 涉及文件：
  - `src/manual-overrides.d.ts`

详细修改：
- 在手写覆盖层中加入了 Studio UI 对话框相关类型，替换 `showModalDialog(...)` / `showModelessDialog(...)` 过去偏宽的 `any` 输入。
- 新增对话框描述类型体系：
  - `StudioDialogBaseDescription`
  - `StudioLayoutDescription`
  - `StudioLabelDescription`
  - `StudioPushButtonDescription`
  - `StudioLineEditDescription`
  - `StudioTextEditDescription`
  - `StudioComboBoxDescription`
  - `StudioCheckBoxDescription`
  - `StudioSliderDescription`
  - `StudioSpinBoxDescription`
  - `StudioPathLineEditDescription`
  - `StudioSpacerDescription`
  - `StudioDialogDescription`
- 新增辅助类型：
  - `StudioDialogMargins`
  - `StudioDialogSizePolicyDescription`
  - `StudioDialogWidgetHandle`
  - `StudioComboBoxItem`
  - `StudioIntegerRangeDescription`
- 新增 Studio UI 辅助枚举，提升编写描述对象时的可读性与补全体验：
  - `FmodStudioUiWidgetType`
  - `FmodStudioUiLayoutType`
  - `FmodStudioUiAlignment`
  - `FmodStudioUiSizePolicy`
  - `FmodStudioUiOrientation`
  - `FmodStudioUiEchoMode`
  - `FmodStudioUiPathType`
- 为 `StudioUi.showModalDialog(...)` 与 `StudioUi.showModelessDialog(...)` 覆盖签名：
  - 输入参数改为 `StudioDialogDescription`
  - 返回值改为 `boolean`

根据运行时结果做出的收紧与修正：
- `Label` 增加 `wordWrap`。
- `LineEdit` 保留 `isReadOnly` 和 `echoMode`，移除运行时未证实的 `placeholderText`。
- `ComboBox` 使用 `items`，不再使用 `itemsSource`。
- `Slider` / `SpinBox` 使用 `range`，不再暴露独立的 `minimum` / `maximum` / `singleStep` 描述字段。
- `PathLineEdit` 收敛到更符合目标运行时与文档交集的字段集合。

重要设计选择：
- 这次没有直接替换生成器产出的 `studio.ui.*` 宿主声明，也没有强行把宿主常量改成字面量类型。
- 采用的是“生成类型保持兼容 + 手写辅助枚举提升可用性”的方案，避免影响现有宿主常量写法。

为什么需要这次提交：
- 让 `studio.ui.showModalDialog(...)` / `showModelessDialog(...)` 在 TypeScript 中可直接获得结构化提示，而不是继续依赖 `any`。
- 让 UI 类型更贴近 FMOD Studio 2.02.15 的真实运行时行为，而不是完全照搬 2.02.33 文档快照。

# 829e729 Refine workspace/platform override types in manual overrides

- 日期：2026-03-16
- 涉及文件：
  - `src/manual-overrides.d.ts`

详细修改：
- 将平台相关覆盖类型从基于 `FmodEntityObject<...>` 的泛型别名，改为基于生成出的宿主接口类型。
- `FmodPlatformObject` 改为基于 `StudioProjectWorkspacePlatforms0`。
- 新增 `FmodWorkspaceObject`，并将 `platforms` 明确为 `FmodPlatformObject[]`。
- `FmodEncodingSettingObject` 改为基于 `StudioProjectWorkspacePlatforms0EncodingSettings`。
- 修正 `FmodSpeakerFormat.Surround71` 的映射值，由 `7` 更正为 `6`。

为什么需要这次提交：
- 原来的别名形式在某些引用链中可能塌成 `never`，或在下游项目里难以直接断言使用。
- 实际运行时中，`studio.project.workspace.platforms[i]` 的行为就是平台实例数组，这次修改让覆盖层与实际使用方式一致。
- `speakerFormat` 的修正来自后续运行时验证，而不是初始推断。

这次修改后的推荐用法：
- `studio.project.workspace as unknown as FmodWorkspaceObject`
- `workspace.platforms[i]` 缩窄为 `FmodPlatformObject`
- `encodingSettings` 可进一步断言为 `FmodEncodingSettingObject`

# ec1cdac Fix manual override formatting

- 日期：2026-03-13
- 涉及文件：
  - `src/manual-overrides.d.ts`

详细修改：
- 修复了 `src/manual-overrides.d.ts` 在连续编辑过程中产生的格式问题。
- 整理了注释、空白和声明排版，让覆盖层更便于继续维护。
- 这次提交没有引入新的运行时结论，也没有扩展新的类型能力。

为什么需要这次提交：
- 手写覆盖层会长期增长，如果格式混乱，后续定位问题和继续增量修补都会变得更困难。
- 将纯格式整理单独分离，也能避免和语义修改混在一起，方便以后追溯。

# 115b051 Add encoding setting enum overrides

- 日期：2026-03-13
- 涉及文件：
  - `src/manual-overrides.d.ts`

详细修改：
- 为 `EncodingSetting` 上的枚举字段补充了值类型别名和 `const enum`：
  - `FmodEncodingFormatValue`
  - `FmodEncodingFormat`
  - `FmodSampleRateModeValue`
  - `FmodSampleRateMode`
  - `FmodLoadingModeValue`
  - `FmodLoadingMode`
- 新增 `FmodEncodingSettingObject`，作为编码设置实例的窄化覆盖别名。
- 记录并写入了经过运行时确认的枚举映射：
  - `encodingFormat`: `PCM = 0`、`FADPCM = 1`、`Vorbis = 3`
  - `sampleRateMode`: `Custom = 0`、`OptimizedForSize = 1`、`Preserved = 2`
  - `loadingMode`: `Compressed = 0`、`Decompressed = 1`、`Streaming = 2`

运行时依据：
- 这些值来自 `Platform.encodingSettings.document()` 和 `dump()` 的实际输出验证。

为什么需要这次提交：
- 这些字段在生成类型中只是普通数字，既不直观，也容易误用。
- 手写覆盖后，下游代码可以直接用语义化名字比较，而不是到处写裸数字。

# a9f5e67 Add platform enum overrides

- 日期：2026-03-13
- 涉及文件：
  - `src/manual-overrides.d.ts`

详细修改：
- 为 `Platform` 上的枚举字段补充了值类型别名和 `const enum`：
  - `FmodPlatformHardwareTypeValue`
  - `FmodPlatformHardwareType`
  - `FmodSpeakerFormatValue`
  - `FmodSpeakerFormat`
- 新增 `FmodPlatformObject`，作为平台实例的窄化覆盖别名。
- 记录并写入了运行时探索中确认的 `hardwareType` 映射：
  - `Desktop = 0`
  - `Mobile = 1`
  - `Xbox360 = 2`
  - `XboxOne = 3`
  - `PlayStation3 = 4`
  - `PlayStation4 = 5`
  - `PlayStationVita = 6`
  - `WiiU = 7`
  - `Switch = 8`
  - `Custom = 9`
  - `PlayStation5 = 10`
  - `XboxSeriesXS = 11`
- 为 `speakerFormat` 增加了第一版映射。

后续修正说明：
- 这次提交中的 `speakerFormat` 初版映射在后续 `829e729` 中根据新的运行时结果被修正。

为什么需要这次提交：
- `Platform.hardwareType` 和 `Platform.speakerFormat` 在运行时中本质上是数字枚举，仅靠自动生成结果不够好用。
- 这层手写覆盖让脚本代码可以直接比较有意义的枚举名，而不是依赖裸数字。
- 这次建模刻意不依赖 `name` 或 `subDirectory` 去推断枚举含义，而是把映射关系当作独立事实处理。

# b777ae0 Add managed object type guards to overrides

- 日期：2026-03-13
- 涉及文件：
  - `src/manual-overrides.d.ts`

详细修改：
- 为 `FMODProjectExtensions.FmodManagedObjectCore` 增加了类型守卫重载：
  - `isOfType<TActual extends EntityName>(...)`
  - `isOfExactType<TActual extends EntityName>(...)`
- 这些重载让运行时实体检查在 TypeScript 中可以真正触发缩窄，把 `FmodEntityObject<...>` 收紧到更具体的实体类型。

为什么需要这次提交：
- 运行时对象经常以父类实体类型出现，但实际元素可能是子类实体，例如 `event.parameters[i]` 实际可能是 `ActionSheet`。
- 在这次修改前，`isOfType("ActionSheet")` / `isOfExactType("ActionSheet")` 无法帮助 TypeScript 完成类型缩窄。
- 这会迫使使用者大量写 `any` 或手工断言，不利于继续提升 `.d.ts` 的可用性。

这次提交直接改善的场景：
- 将 `Parameter` 缩窄为 `ActionSheet`
- 对 `Module` 体系对象按运行时 `entity` 继续缩窄
- 在 `isOfType(...)` 判断后访问子类型特有成员
