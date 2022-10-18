module.exports = {
  // 一行代码的最大字符数，默认是80
  printWidth: 100,
  // 每行末尾自动添加分号
  semi: true,
  trailingComma: 'es5',
  // tab缩进大小,默认为2
  tabWidth: 2,
  // 字符串使用单引号
  singleQuote: true,
  jsxBracketSameLine: false,
  // 在jsx文件中的引号需要单独设置
  jsxSingleQuote: true,
  // object对象中key值是否加引号 （quoteProps: "<as-needed|consistent|preserve>"）as-needed只有在需求要的情况下加引号，consistent是有一个需要引号就统一加，preserve是保留用户输入的引号
  quoteProps: 'preserve',
  // 箭头函数单个参数的情况是否省略括号
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  // 对象空格
  bracketSpacing: true,
  overrides: [
    {
      'files': ['*.md'],
      'options': {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
};
