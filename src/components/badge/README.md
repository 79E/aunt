# Badge 徽标 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
在右上角展示数字、文字、小红点。

## 使用
```tsx
import { Badge } from "aunt";
```

### 基本用法
<code src="./demos/demo-base.tsx"></code>

### 最大值
设置 `maxCount` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{maxCount}+`，默认最大为99，只有 `content` 为数字的时候生效。
<code src="./demos/demo-maxcount.tsx"></code>

### 圆点样式
通过使用 `dot` 属性设置为圆点样式
<code src="./demos/demo-dot.tsx"></code>

### 自定义颜色和偏移量
通过 color 属性来设置徽标的颜色

通过 offset 属性来调整徽标的偏移量
<code src="./demos/demo-offset-color.tsx"></code>

### 单独使用
当 Badge 没有子元素时，会作为一个独立的元素进行展示。
<code src="./demos/demo-badge.tsx"></code>

### 动画
通过`visible`属性控制显示或者隐藏，还可以使用`type`属性进行自定义动画。
<code src="./demos/demo-visible.tsx"></code>

## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| content |   徽标内容   |       `string \| number \| React.ReactNode`    |`-`   |
| visible | 显示或隐藏状态 |   `boolean`  |`true` |
| timeout | 动画时间（毫秒） |  `number \| { appear?: number; enter?: number; exit?: number; }lean` |  `300`  |
| dot | 显示为一个小红点 |   `boolean` |`false`  |
| maxCount | 最大完整展示数字，超出后将展示 + | `number` |`99` | 
| bordered | 是否有白色边框 |  `boolean` | `false`  |
| color | 徽标背景颜色	 |   `string` |`-`  |
| offset | 徽标位置偏移量	 |  `[number \| string, number \| string]` |`-`  | 

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-badge-border-radius|圆角大小| `var(--aunt-color-white);` |
|--aunt-badge-font-size|内容文字大小| `var(--aunt-font-size-sm);` |
|--aunt-badge-font-weight|内容字重| `var(--aunt-font-weight-bold);` |
|--aunt-badge-padding|徽标内边距| `0 var(--aunt-padding-base);` |
|--aunt-badge-border-width|边框大小| `var(--aunt-border-width-base);` |
|--aunt-badge-border-style|边框样式| `solid;` |
|--aunt-badge-border-color|边框颜色| `var(--aunt-color-white);` |
|--aunt-badge-color|徽标颜色| `var(--aunt-red);` |
|--aunt-badge-dot-size|圆点大小| `calc(6 * var(--aunt-hd));` |
|--aunt-badge-dot-color|圆点背景颜色| `var(--aunt-red);` |


