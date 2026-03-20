<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 项目约定

### 包管理：pnpm

- 安装依赖、添加/移除包时**一律使用 pnpm**，不要使用 `npm` 或 `yarn` 作为本仓库的默认方式。
- 常用命令：`pnpm install`、`pnpm add <pkg>`、`pnpm add -D <pkg>`、`pnpm remove <pkg>`、`pnpm exec <cmd>`。
- `package.json` 中的 `packageManager` 字段已与当前 pnpm 版本对齐；若升级 pnpm，请同步更新该字段（可与 `pnpm -v` 一致）。

### UI：HeroUI（Hero UI）

- 界面组件**优先使用 [HeroUI](https://www.heroui.com/)**（npm 作用域 `@heroui/*`），避免在同一功能上混用多套无必要的组件库。
- 与本项目栈（Next.js、React 19、Tailwind CSS v4）相关的安装与配置，以官方文档为准，例如 [Quick Start](https://v3.heroui.com/docs/quick-start)。
- 添加依赖时使用 pnpm，例如：`pnpm add @heroui/react@rc @heroui/styles@rc`（具体包名与版本以官方文档当前说明为准）。
