

/**
* feat：新功能
* update：更新某功能
* fix：修补某功能的bug
* refactor：重构某个功能
* perf: 优化构建工具或运行时性能
* style：仅样式改动
* docs：仅文档新增/改动
* chore：构建过程或辅助工具的变动
* test：测试
*/

const types = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'perf', 'update'];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 88],
  },
};