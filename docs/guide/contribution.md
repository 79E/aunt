# 贡献指南

## 介绍
以下是关于提交反馈或代码的指南。在提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## 本地开发
```bash
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
如果你是第一次在 GitHub 上提 Pull Request ，可以阅读下面这两篇文章来学习：

[如何优雅地在 GitHub 上贡献代码](https://segmentfault.com/a/1190000000736629)

[第一次参与开源](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md)

#### 规范
- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue。

#### Pull Request 流程
- 请将本项目 fork 至个人空间，clone 至本地后，通过 git remote add upstream 指令添加上游库地址，参考 [Configuring a remote for a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork)
- 确保 Node 版本在 12.0.0 及以上，建议升级到 16.0.0 及以上
- 创建 feature/fix 分支，开发过程中可以使用 git fetch upstream 和 git rebase upstream/feature 来同步上游分支代码
- 提交代码到 forked 仓库，commit message 撰写请参照 [Angular Commits](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits) 规范
- 本地执行 npm run lint 及 npm run test 并保证结果通过，当修改了样式导致 snapshot 不一致的情况，可以通过 npm run test:update 指令来更新 snapshot 并提交上来
- 在上游仓库中发起 PR，如有相关的 issue，请进行 [关联](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)
- 提交 PR 会触发自动化 CI 环节，如果 CI 未通过请重新在本地执行第 4 步中的测试流程
- 我们会 CR 本次提交的代码，请及时关注 CR 评论通知信息

#### 同步最新代码
提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：
```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/79E/aunt.git

# 拉取主仓库最新代码
git fetch upstream

# 合并主仓库代码
git merge upstream/master
```

> 使用过程中发现任何问题都可以提 Issue 给我们

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





