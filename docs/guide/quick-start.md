# 快速开始

## 安装
```bash
# 通过 npm 安装
$ npm install --save aunt

# 通过 yarn 安装
$ yarn add aunt
````

## 引入

直接引入组件即可，aunt 会自动为你加载 css 样式文件：

```tsx
import { Button } from 'aunt'

function Demo (){
  return <div>
    <Button>
      <p>Hello Aunt + React!</p>
      <Button type='primary'>主要按钮</Button>
    </Button>
  </div>
}
export default Demo;
```


## 按需加载
主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。
> 可以初始化一个新项目只引入一个Button组件后运行 `npm run build` 可以看到打包后的css中只有Button相关的css样式其他未使用的组件是不会打包进来的。

## 兼容性

我们建议在项目中增加下面的 babel 配置，这样可以达到最大兼容性，为 iOS Safari `>= 10` 和 Chrome `>= 49`：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "10"
        }
      }
    ]
  ]
}
```

> 不要把 node_modules 排除在 babel 编译之外，不然上面的配置不会有效果

对于 TypeScript，我们兼容的版本是 `>= 4.0`。

对于 React，我们兼容的版本是 `^16.8.0` `^17.0.0` `^18.0.0`。

**注意： iOS 9 并不支持 CSS 变量。**

