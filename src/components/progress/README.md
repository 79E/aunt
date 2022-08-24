# Progress 进度条
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用条状图形表示百分比进度，适用于展示任务当前进度。

## 使用
```tsx
import { Progress } from "aunt";
```

### 基础用法
进度条默认为蓝色，使用 percentage 属性来设置当前进度。
<code src="./demos/demo-base.tsx"></code>

### 不显示百分比文字
进度条百分比文字默认在右边，使用 showPercent 属性来设置百分比文字是否显示。
<code src="./demos/demo-showPercent.tsx"></code>

### 文字显示位置
文字默认为 `right`，使用 percentPosition 属性来设置文字所在位置。

**当值为`innerLeft`时如未设置高度则会为`18px`**
<code src="./demos/demo-percentPosition.tsx"></code>

### 自定义圆角
进度条默认为圆形，使用 filleted 属性来设置进度条圆角的大小。
<code src="./demos/demo-filleted.tsx"></code>

### 自定义大小
进度条默认大小为`4px`，使用 stroke 属性来设置进度条大小。
<code src="./demos/demo-stroke.tsx"></code>

### 自定义颜色
使用 trackColor 设置轨道颜色。

使用 progressColor 设置进度条颜色。
<code src="./demos/demo-color.tsx"></code>

### 自定义文字样式
使用 renderPercent 函数返回 ReactNode 类型，回调参数为当前进度百分比。
<code src="./demos/demo-renderPercent.tsx"></code>



## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| percentPosition |   文字显示位置   |  `"left" \| "innerLeft" \| "right" \| "follow"`    |`right`   |
| showPercent | 是否显示百分比文字 |   `boolean`  |`true` |
| percentage | 进度环百分比 |  `number` |  `必填`  |
| renderPercent | 进度条内部文字显示 |    `(percentage: number) => ReactNode`  |`-`  |
| trackColor | 轨道颜色 |  `string` | `-`  |
| progressColor | 进度条颜色 |  `string` |`-` |
| stroke | 进度条粗细 |   `number \| string` | `-`  |
| duration | 每增加所需的毫秒数	 |   `number` |`300`  |
| filleted | 进度条两端圆角	 |   `number \| string` | `-` |

## 样式变量

| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-progress-text-color|文字颜色| `var(--aunt-brand-color);` |
|--aunt-progress-text-size|文字大小| `var(--aunt-font-size-md);` |
|--aunt-progress-background-color|轨道背景颜色| `var(--aunt-gray-2);` |
|--aunt-progress-bar-color|进度条背景颜色| `var(--aunt-brand-color);` |
|--aunt-progress-text-gutter|文字外边距| ` var(--aunt-padding-s);` |
|--aunt-progress-border-radius|圆角大小| `var(--aunt-border-radius-max);` |
|--aunt-progress-height|进度条大小| `calc(4 * var(--aunt-hd));` |





