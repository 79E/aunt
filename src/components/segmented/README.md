# Segmented 分段控制器
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于展示多个选项并允许用户选择其中单个选项，当切换选中选项时，关联区域的内容会发生变化。

## 使用
```js
import { Segmented } from 'aunt';
```

### 基础用法
最简单的用法。
<code src="./demos/demo-base.tsx"></code>

### 禁用模式
使用`disabled`属性来控制是否为禁用状态。
<code src="./demos/demo-disabled.tsx"></code>

### 组件尺寸
使用`size`属性决定组件的尺寸大小，可选值有：`large`,`middle`,`small`。
<code src="./demos/demo-size.tsx"></code>

### 自定义颜色
使用`color`属性设置未选中状态的内容颜色。

使用`activeColor`属性设置选中状态的内容颜色。
<code src="./demos/demo-color.tsx"></code>

### 自定义内容
使用 `ReactNode` 自定义渲染每一个 `Segmented Item`。
<code src="./demos/demo-children.tsx"></code>

### 受控模式
可通过修改`value`来控制选择的选项。
<code src="./demos/demo-change.tsx"></code>


## 参数

### Segmented Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| value |  选中值  | `string`    |`-`   |
| disabled | 禁用状态 |  `boolean`  |`false` |

### SegmentedGroup Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| value |   开关状态   | `string`    |`-`   |
| defaultValue | 默认开关状态 |  `string`  |`-`   |
| color |   默认颜色   | `string`    |`-`   |
| activeColor | 选中颜色 |   `string`  |`#1d2129` |
| disabled | 禁用状态 |  `boolean` |  `false` |
| size | 设置尺寸 |   ` 'large' \| 'middle' \| 'small'` | `middle` |

## 事件

### SegmentedGroup Events

| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onChange| 选项变化时的回调函数 |  `(value: string) => void` | `-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-segmented-color | 默认内容颜色 | `var(--aunt-gray-8);` |
| --aunt-segmented-disabled-color | 禁用状态内容颜色 | `var(--aunt-gray-5);` |
| --aunt-segmented-small-line-height | 内容行高 | `var(--aunt-line-height-xxl);` |
| --aunt-segmented-small-font-size | 内容文字大小 | `var(--aunt-font-size-sm);` |
| --aunt-segmented-small-padding | 内容内边距 | `0 var(--aunt-padding-s);` |
| --aunt-segmented-middle-line-height | 内容行高 | `calc(30 * var(--aunt-hd));` |
| --aunt-segmented-middle-font-size | 内容文字大小 | `var(--aunt-font-size-md);` |
| --aunt-segmented-middle-padding | 内容内边距 | `0 var(--aunt-padding-sm);` |
| --aunt-segmented-large-line-height | 内容行高 | `calc(34 * var(--aunt-hd));` |
| --aunt-segmented-large-font-size | 内容文字大小 | `var(--aunt-font-size-lg);` |
| --aunt-segmented-large-padding | 内容内边距 | `0 var(--aunt-padding-m);` |
| --aunt-segmented-selected-background-color | 选择块背景颜色 | `var(--aunt-color-white);` |
| --aunt-segmented-selected-border-radius | 选择块圆角 | `var(--aunt-border-radius-md);` |
| --aunt-segmented-group-padding | 内边距 | `var(--aunt-padding-base);` |
| --aunt-segmented-group-border-radius | 圆角 | `var(--aunt-border-radius-md);` |
| --aunt-segmented-group-background-color | 背景颜色 | ` var(--aunt-gray-2);` |



