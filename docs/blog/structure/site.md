# 组件库搭建
这篇文章是从零开始搭建一个自己的组件库

因为使用的是[React](https://zh-hans.reactjs.org/)所以这里选择的是[dumi](https://d.umijs.org/zh-CN)作为文档和组件的编写

那么我们先了解 `dumi`是什么和怎么使用。

## dumi
[dumi](https://d.umijs.org/zh-CN)是一款为组件开发场景而生的文档工具，[dumi](https://d.umijs.org/zh-CN) 负责组件开发及组件文档生成。

**注意：这里组件的打包是需要另外进行编写,dumi不负责组件打包。**

### 组件开发脚手架
我们创建一个目录进入到目录里面然后我们执行 dumi 的脚手架初始化一个项目
```bash
$ npx @umijs/create-dumi-lib        # 初始化一个文档模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib

$ npx @umijs/create-dumi-lib --site # 初始化一个站点模式的组件库开发脚手架
# or
$ yarn create @umijs/dumi-lib --site
```

初始化完成dumi项目后，我们先分析一下目录结构。

我们主要看到两个目录 `docs`和`src` 
```
docs #组件库文档目录
src  #组件库源码目录
```

### 构建及部署（文档）
我们先了解两个命令即可。
```
$ npm run start       #本地运行
$ npm run docs:build  #组件开发脚手架打包
```
执行 `npm run docs:build` 即可对我们的文档站点做构建，构建产物默认会输出到 dist 目录下，我们可以将 dist 目录部署在 now.sh、GitHub Pages 等静态站点托管平台或者某台服务器上。


## 编写文档
文档可以分为 站点文档和组件文档 

站点文档我们可以在 `docs` 目录下分好类目然后在 `.umirc.ts`文件中进行[配置](https://d.umijs.org/zh-CN/config)
```tsx
mode: 'site', # 设置为站点模式 默认为文档模式
```
#### 示例
创建一个快速开始的文档，在`docs`目录中创建`guide`指南目录下的`quick-start.md`文件，保存我们就可以看到所编写的文档了。

## 编写组间
我们可以在 `src`目录下创建我们的组件

我们可以为了以后可以在这个`src`文件中存放一些如工具函数和css样式等文件我们可以单独为组件创建一个目录`components`

然后我们在这 `components` 目录中进行创建组件和编写。

### 第一个组件 Button
我们创建一个按钮组件 在`components`中创建`button`目录

我们想一下一个组件所需要的东西
```
demos        # 演示文件目录
styles       # 组件样式
tests        # 组件测试文件
button.tsx   # 组件
README.md    # 组件文档
index.ts     # 组件入口
```
为了简单一些 我们目前可以只有 组件必要的一些东西
```
button.tsx   # 组件
README.md    # 组件文档
index.ts     # 组件入口
```
`button.tsx`
```tsx
import React from 'react';

export const Button = ({ title }: { title: string })=>{
    return <button>
        {title}
    </button>
}
```

`index.tsx`
```tsx
import { Button } from './button'

export default Button
```

然后在文档中进行编写就可以了 
```tsx
# Button
Demo:

import React from 'react';
import { Button } from 'tset';

export default () => <Button title="Button Demo" />;

```

这里可能没有引入成功我们需要在外层的`index.tsx`中把`button`引入导出
```tsx
export { default as Button } from './components/button';
```

这个时候我们的一个基础的组件库就已经搭建完成了

dmui 有很多的[配置项](https://d.umijs.org/zh-CN/config)我们可以根据这个配置项进行配置我们的文档网站

我们如果编写的是移动端组件库 dumi还给提供了[移动端](https://d.umijs.org/zh-CN/theme#dumi-theme-mobile)的文档主题，看个人的需求还进行选择。





