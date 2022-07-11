# Image 图片

## 介绍
增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 使用
```tsx
import React from "react";
import { Image } from "aunt";

export default () => <Image width="100" height="100" src={src} />;
```
### 基础用法
基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。

```tsx
<Image width={100} height={100} src="https://fakeimg.pl/300/" />
```

### 填充模式
通过 fit 属性可以设置图片填充模式，可以设置 contain、cover、fill、none、scale-down 属性。
```tsx
<Image fit="contain" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image fit="cover" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image fit="fill" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image fit="none" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image fit="scale-down" width={100} height={100} src="https://fakeimg.pl/400x200/" />
```

### 圆形图片
通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。
```tsx
<Image round fit="contain" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image round fit="cover" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image round fit="fill" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image round fit="none" width={100} height={100} src="https://fakeimg.pl/400x200/" />
<Image round fit="scale-down" width={100} height={100} src="https://fakeimg.pl/400x200/" />
```

### 加载中提示
Image 组件提供了默认的加载中提示，支持通过 loadingIcon 自定义内容。
```tsx
// 默认提示
<Image width="100px" height="100px" />
// 自定义提示
<Image loadingIcon={<Loading type="ball" />}  width="100px"  height="100px" />
```


### 加载失败提示
Image 组件提供了默认的加载失败提示，支持通过 errorIcon 自定义内容。
```tsx
// 默认提示
<Image width="100px" height="100px" src="aunt.png" />
// 自定义提示
<Image
    width="100px" 
    height="100px"
    src="aunt.png"
    errorIcon={<AuntIconWifiOff />}
/>
```


## 参数

| 参数        | 说明                      | 类型                      | 默认值 |
| ----------- | ------------------------- | ------------------------- | -------- |
| src         | 图片链接                  | `string`                  |- |
| fit         | 图片填充模式              | `string`                  |-|
| alt         | 替代文本                  | `string`                  |- |
| width       | 宽度，默认单位为 `px`     | `number｜string`          |- |
| height      | 高度，默认单位为 `px`     | `number｜string`          |- |
| radius      | 圆角大小，默认单位为 `px` | `number｜string`          |-|
| round       | 是否显示为圆形            | `boolean`                 |`false` |
| lazyload    | 是否开启懒加载            | `boolean｜Lazyload Props` |`false` |
| showError   | 是否展示图片加载失败提示  | `boolean`                 |- |
| showLoading | 是否展示图片加载中提示    | `boolean`                 |- |
| errorIcon   | 失败时提示的图标          | `ReactNode`               |- |
| loadingIcon | 加载时提示的图标          | `ReactNode`               |- |
| iconSize    | 加载图标和失败图标的大小  | `number｜string`          |- |

## 图片填充模式

| 名称       | 含义                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |


## 事件

| 事件名  | 说明               | 回调参数            |
| ------- | ------------------ | ------------------- |
| onClick | 点击图片时触发     | `event: MouseEvent` |
| onLoad  | 图片加载完毕时触发 | -                   |
| onError | 图片加载失败时触发 | -                   |


## 常见问题
### 如何引用本地图片？
在 .tsx, jsx 文件中通过相对路径引用本地图片时，需要在图片的链接外包上一层 `require()`，将图片 URL 转换为 webpack 模块请求，并结合 `file-loader` 或者 `url-loader` 进行处理。
```tsx
// 错误写法
<image src="./image.png" />

// 正确写法
<image src="require('./image.png')" />
```




<code hidden="hidden" src="./demos/demo.tsx"></code>