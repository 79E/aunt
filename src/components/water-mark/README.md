# WaterMark 水印 

<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
给页面上添加特定的文字或图案，适用于防止信息盗用。

## 使用
```tsx 
import { WaterMark } from 'aunt';
```

### 综合使用
水印组件默认实现为前置水印，即设想水印会显示在内容的上方，zIndex 默认设置为 2000，如果你不希望水印遮挡上层内容，可以调整该值到小于上层内容的 zIndex。

<code src="./demos/demo-base.tsx"></code>

> 通过 image 指定图片地址。为保证图片高清且不被拉伸，请传入水印图片的宽高 width 和 height, 并上传至少两倍的宽高的 logo 图片地址。

## 参数

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 水印的宽度 | `number` | `100` |
| height | 水印的高度 | `number` | `64` |
| rotate | 水印绘制时，旋转的角度，单位 ° | `number` | `-22` |
| image | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | [ImageProps](#imageprops) | - |
| zIndex | 追加的水印元素的 z-index | `number` | `2000` |
| content | 水印文字内容 | `string` | - |
| font | canvas 文字属性设置 | [FontProps](#imageprops) | - |
| gapX | 水印之间的水平间距 | `number` | `24` |
| gapY | 水印之间的垂直间距 | `number` | `48` |
| fullPage | 是否覆盖整个页面 | `boolean` | `true` |

### ImageProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `[ImageProps](#imageprops)` | - |
| width | 图片宽度 | `number` | - |
| height | 图片高度 | `number` | - |

### FontProps

| 参数   | 说明           | 类型               | 默认值               |
| ------ | -------------- | ------------------ | -------------------- |
| color  | 水印文字颜色   | `string`           | `rgba(0, 0, 0, .15)` |
| size   | 文字大小       | `string \| number` | `16`                 |
| style  | 规定字体样式   | `string \| number` | `normal`             |
| weight | 规定字体的粗细 | `string `          | `normal`             |
| family | 规定字体系列   | `string \| number` | `sans-serif`         |