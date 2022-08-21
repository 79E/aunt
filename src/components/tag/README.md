# Tag 标签 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
进行标记和分类的小标签。

## 使用
```tsx
import { Tag } from "aunt";
```
### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 标签类型
使用 `type` 来规定标签的类型。
<code src="./demos/demo-type.tsx"></code>

### 标签形状
使用 `plain` 来规定是否为空心。

使用 `shape` 来规定是否为圆角或者为标记可。
<code src="./demos/demo-shape.tsx"></code>


### 标签样式
使用 `color` 规定标签的颜色。

使用 `textColor` 规定标签文字或内容的颜色。
<code src="./demos/demo-color.tsx"></code>


### 标签尺寸
使用 `size` 规定标签的尺寸。
<code src="./demos/demo-size.tsx"></code>


### 标签图标
使用 `icon` 传入图标组件。
<code src="./demos/demo-icon.tsx"></code>


### 关闭按钮
使用 `closeable` 来规定是否展示关闭按钮，`onClose` 作为关闭按钮回调。
<code src="./demos/demo-close.tsx"></code>


## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| type |   标签类型   |    `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`  |`default`   |   
| size | 标签尺寸 |   `'medium' \| 'large' \| 'small'`  |`small` |
| plain | 是否为空心 |  `boolean` |`false` |
| shape | 标签形状 |   `'round' \| 'mark-left' \| 'mark-right'`  |`-`   |
| color | 背景色和边框色 |  `string` |`-`  | 
| textColor | 文字内容颜色 | `string` |`-` | 
| icon | 标签图标 | `React.ReactElement` |`-` | 
| closeable | 展示关闭按钮 |  `boolean` |`false` |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClose|点击关闭按钮回调|  `(e: React.MouseEvent<Element, MouseEvent>) => void` |`-` |
|onClick|点击图标时触发|  `(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` |`-` |

## 样式变量

| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-tag-padding|标签默认内边距| `0 var(--aunt-padding-base)` |
|--aunt-tag-border-color|标签默认边框颜色| `#E9E9E9` |
|--aunt-tag-background-color|标签默认背景色| `#E9E9E9` |
|--aunt-tag-text-color|标签默认文字内容颜色| `#E9E9E9` |
|--aunt-tag-text-size|默认mini文字大小| `var(--aunt-font-size-sm)` |
|--aunt-tag-text-size-medium|文字大小| `var(--aunt-font-size-md)` |
|--aunt-tag-text-size-large|文字大小| `var(--aunt-font-size-lg)` |
|--aunt-tag-icon-margin|图标外边距| `calc(2 * var(--aunt-hd))` |