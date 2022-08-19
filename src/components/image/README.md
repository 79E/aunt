# Image 图片
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 使用
```tsx
import { Image } from "aunt";
```
### 基础用法
基础用法与原生 img 标签一致，可以设置 src、width、height、alt 等原生属性。
<code src="./demos/demo-base.tsx"></code>

### 填充模式
通过 fit 属性可以设置图片填充模式，可以设置 contain、cover、fill、none、scale-down 属性。
<code src="./demos/demo-fit.tsx"></code>

### 圆形图片
通过 round 属性可以设置图片变圆，注意当图片宽高不相等且 fit 为 contain 或 scale-down 时，将无法填充一个完整的圆形。
<code src="./demos/demo-round.tsx"></code>

### 加载中提示
Image 组件提供了默认的加载中提示，支持通过 loadingIcon 自定义内容。
<code src="./demos/demo-loading.tsx"></code>



### 加载失败提示
Image 组件提供了默认的加载失败提示，支持通过 errorIcon 自定义内容。
<code src="./demos/demo-error.tsx"></code>


## 参数

| 参数        | 说明                      | 类型                      | 默认值 |
| ----------- | ------------------------- | ------------------------- | -------- |
| src         | 图片链接                  | `string`                  |`-` |
| fit         | 图片填充模式              | `string`                  |`-`|
| alt         | 替代文本                  | `string`                  |`-` |
| width       | 宽度，默认单位为 `px`     | `number\|string`          |`-` |
| height      | 高度，默认单位为 `px`     | `number\|string`          |`-` |
| radius      | 圆角大小，默认单位为 `px` | `number\|string`          |`-`|
| round       | 是否显示为圆形            | `boolean`                 |`false` |
| lazyload    | 是否开启懒加载            | `boolean\|Lazyload Props` |`false` |
| showError   | 是否展示图片加载失败提示  | `boolean`                 |`-` |
| showLoading | 是否展示图片加载中提示    | `boolean`                 |`-` |
| errorIcon   | 失败时提示的图标          | `ReactNode`               |`-` |
| loadingIcon | 加载时提示的图标          | `ReactNode`               |`-` |
| iconSize    | 加载图标和失败图标的大小  | `number\|string`          |`-` |

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




