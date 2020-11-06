module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: "vue-eslint-parser",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  // extends: 'standard',
  extends: ['eslint:recommended'],
  rules: {
    // 不需要检查大括号之前的空格
    "template-curly-spacing": 0,
    // 不需要检查不需要的 call
    "no-useless-call": 0,
    // 不需要检查 callback 语法
    "no-callback-literal": 0,
    // 不需要分析未定义
    "no-use-before-define": 0,
    // 不需要分析没用的 return
    "no-useless-return": 0,
    // 不需要分析不必要的转义符
    "no-useless-escape": 0,
    // 不要求在方法名和刮号之间需要有一格空格
    "space-before-function-paren": 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
    "no-empty": 2,//块语句中的内容不能为空
    "no-multiple-empty-lines": [1, {"max": 1}],//空行最多不能超过1行
    "no-redeclare": 2,//禁止重复声明变量
    "camelcase": 2,//强制驼峰法命名
    "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
    "semi": 0,//语句号结尾
    "indent": ["error", 2], // 缩进2个空格
    "comma-style": [2, "last"],//逗号风格，换行时在行首还是行尾
    "comma-spacing": [2, { "before": false, "after": true }],// 逗号后面得有空格
    "quotes": [1, "single"],//引号类型 ''
  },
};
