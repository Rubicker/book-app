## Book-App

### 坑

- 用 `creat-react-app` 创建 workspace 内部项目时，需要将最外层 `package.json` 改名，否则会报错（之后恢复，并删除内部项目的 `node-modules`，在最外层进行 `yarn install`，实现对全局 `node-modules` 的管理）
