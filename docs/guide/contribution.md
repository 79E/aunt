# 开发指南

## 介绍
以下是关于提交反馈或代码的指南。在提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## 本地开发
```sh
# 克隆仓库
https://github.com/79E/aunt.git

# 安装依赖
cd aunt && npm install

# 进入开发模式，浏览器访问 http://localhost:8000
npm start
```

## 目录结构
主要文件为`src`目录里面有组件和相关样式。
```tsx
aunt
├─ docs                     # 文档博客相关文章
├─ src         
    ├─ assets               # 静态资源
    ├─ components           # 组件
        ├─ button
            ├─ demos        # 演示文件目录
            ├─ styles       # 组件样式
            ├─ tests        # 组件测试文件
            ├─ button.tsx   # 组件
            ├─ types.ts     # 组件类型
            ├─ README.md    # 组件文档
            └─ index.ts     # 组件入口
    ├─ demos                # 演示组件
    ├─ hooks                # 钩子相关函数
    ├─ locales              # 语言
    ├─ styles               # 全局样式
    ├─ typings              # 类型
    ├─ utils                # 工具函数
    └─ index.ts             # 入口
```

## 提交 PR

### Pull Request 规范
如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

[第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 规范
如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
在 PR 中请添加合适的描述，并关联相关的 Issue


### Pull Request 流程
fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
基于 fork 后仓库的 matser 分支新建一个分支，比如 feat-button_color
在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 matser 分支
Pull Request 会在 Review 通过后被合并到主仓库
等待 React Aunt 发布版本

### Git 提交规范
[使用 angular 提交规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

feat 与 fix 提交将被用于生成更新日志(changelog)

feat：新功能

update：更新某功能

fix：修补 bug

docs：文档类变动

style：样式

refactor：重构

test：增加测试

chore：构建过程或辅助工具的变动

perf：提高性能的代码更改



### 同步最新代码
提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：
```sh
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/79E/aunt.git

# 拉取主仓库最新代码
git fetch upstream

# 合并主仓库代码
git merge upstream/master
```

