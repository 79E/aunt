# 项目实战
授人以鱼不如授人以渔
## 介绍
全流程配置 `React` 移动端项目，包括对`css`变量的转换和屏幕的适配。

## Vite
[官方文档-中文](https://cn.vitejs.dev/)

### 开始
```bash
$ yarn create vite my-react-app --template react
$ cd my-react-app
$ yarn run dev
```
### less 

这里采用 `less` 作为处理器
```bash
$ yarn add less
```

然后在`vite.config.js`文件中进行配置即可

这里还有很多配置项可以移步到官方文档进行查看和配置 [less-中文](https://less.bootcss.com/)

```tsx
export default defineConfig({
  plugins: [react()],
  css:{
    preprocessorOptions:{
      less:{
        modifyVars:{},
        javascriptEnabled: true,
      }
    },
  }
})
```

### postcss-px-to-viewport
[官方文档和参数说明-中文](https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md)

将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.
```
$ yarn add postcss-px-to-viewport -D
```
安装好后我们就可以在 `vite.config.js` 文件进行配置了

可以直接拿一下的配置进行使用

```tsx
import postcssPxToViewport from "postcss-px-to-viewport";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    postcss: {
      plugins: [
        postcssPxToViewport({
          viewportWidth: 375,
          viewportHeight: 667,
          unitPrecision: 3,
          viewportUnit: "vw",
          selectorBlackList: [".ignore", ".hairlines"],
          minPixelValue: 1,
          mediaQuery: false,
        }),
      ],
    },
  }
})
```

## create-react-app
### 开始
```bash
$ npx create-react-app my-app
$ cd my-app
$ yarn start
```
创建好项目后我们需要配置 `postcss-px-to-viewport` 

这样我们就需要修改 `react` 的 `webpack`的配置 通常可能会选择 npm run eject 弹出配置后魔改。

但是，eject 是不可逆操作，弹出配置后，你将无法跟随官方的脚步去升级项目的react-script 版本。

我们可以采用 [craco](https://github.com/dilanx/craco) 覆盖配置

### craco
[官方文档](https://github.com/dilanx/craco)

```bash
$ yarn add @craco/craco -D
```

修改 package.json 中的 script 标签
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
},
```
```json
"scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
},
```

我们在项目根目录创建 `craco.config.js` 文件

将下面基本的结构直接复制进入到`craco.config.js`文件然后 运行 `yarn run start` 即可
```json
module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {},
    eslint: {},
    babel: {
        presets: [],
        plugins: [],
    },
    typescript: {},
    webpack: {
        alias: {},
        plugins: {
        },
        configure: { },
    },
    jest: {},
    devServer: {},
    plugins: []
};
```
### less 

这里采用 `less` 作为处理器
```tsx
$ yarn add craco-less -D
```
安装完成后我们在 `craco.config.js`文件中进行配置
```tsx
const CracoLessPlugin = require("craco-less");
module.exports = {
    plugins: [
        { 
            plugin: CracoLessPlugin,
            options:{
                lessLoaderOptions:{
                    lessOptions:{
                        modifyVars:{},
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
};
```
配置完成后就可以将 `src` 问下的 `css` 文件修改为 `less` 文件了(注意引入文件的修改)

### postcss-px-to-viewport
[官方文档和参数说明-中文](https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md)

将px单位转换为视口单位的 (vw, vh, vmin, vmax) 的 PostCSS 插件.
```
$ yarn add postcss-px-to-viewport -D
```
安装好后我们就可以在 `craco.config.js` 文件进行配置了

可以直接拿一下的配置进行使用
```tsx
const postcssPxToViewport = require("postcss-px-to-viewport");

module.exports = {
    style: {
        postcss: {
            loaderOptions: {
                postcssOptions: {
                    ident: 'postcss',
                    plugins: [
                        postcssPxToViewport({
                            viewportWidth: 375,
                            viewportHeight: 667,
                            unitPrecision: 3,
                            viewportUnit: "vw",
                            selectorBlackList: [".ignore", ".hairlines"],
                            minPixelValue: 1,
                            mediaQuery: false,
                        }),
                    ],
                },
            },
        },
    },
};
```


## 安装Aunt组件库

```bash
$ yarn add aunt
```

安装好后就可以在页面当中使用了可以审查元素查看变量是否已经进行转换了 如果已经转化了就算成功了。

![aunt-css](https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/image-20220707113828630.png)



## px 转 rem
可能你需要的是将px 转为 rem 单位那么你就需要这个插件`postcss-pxtorem`

```bash
$ yarn add postcss-pxtorem
```
配置方法和上面的大同小异