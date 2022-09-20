# Radio 单选框 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
在一组可选项中进行单选。

## 使用
```tsx
import { Radio } from 'aunt';
```


### 基础用法
通过 `defaultChecked` 值默认复选框的勾选状态。
<code src="./demos/demo-base.tsx"></code>

### 禁用状态
通过设置 `disabled` 属性可以禁用复选框。
<code src="./demos/demo-disabled.tsx"></code>

### 自定义
将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

通过 `checkedColor` 属性设置选中状态的图标颜色。

通过 `iconSize` 属性可以自定义图标的大小。
<code src="./demos/demo-disabled.tsx"></code>

### 复选框组
复选框可以与复选框组一起使用，复选框组通过 `defaultChecked` 数组默认复选框的勾选状态。
<code src="./demos/demo-group.tsx"></code>

### 水平排列
将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。
<code src="./demos/demo-horizontal.tsx"></code>


## 参数

### Radio Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| checked |   是否为选中状态   |  `boolean`    | `false`   |
| defaultChecked | 默认选中项的标识符	 |   `boolean`    | `false`   |
| name | 标识符 |   `number \| string`  | `-` |
| disabled | 是否禁用复选框 |  `boolean` |  `false`  |
| iconSize | 图标大小，默认单位为 px |    `number \| string`  |`20px`  |
| iconRender | 自定义图标 |  `({ checked, disabled }) => ReactNode` | `-`  |
| checkedColor | 选中状态颜色 |  `string` |`#165DFF` |
| shape | 形状，可选值为 square |   `string` | `round` |
| bindGroup | 是否与单选框组绑定	 |   `boolean` |`true`  |


### RadioGroup Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| value |   是否显示圆环内部文字   | `any`  | `-`   |
| defaultValue | 进度环百分比 |  `any`  | `-` |
| disabled | 是否禁用复选框 |  `boolean` |  `false`  |
| direction | 排列方向，可选值为 horizontal |  `string` | `vertical`  |
| iconSize | 图标大小，默认单位为 px |    `number \| string`  |`20px`  |
| checkedColor | 选中状态颜色 |  `string` |`#165DFF` |
| iconRender | 自定义图标 |  `({ checked, disabled }) => ReactNode` | `-`  |
| shape | 形状，可选值为 square |   `string` | `round` |

## 事件

### Radio Events

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| onChange | 当绑定值变化时触发的事件   |  `(checked: boolean) => void;`    | `-`   |

### RadioGroup Events

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| onChange | 当绑定值变化时触发的事件   |  `(name: any) => void;`    | `-`   |

## 样式变量

| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-checker-margin|外边距| `0 0 var(--aunt-padding-xs) 0;` |
|--aunt-checker-size|大小 | `var(--aunt-font-size-xxl);` |
|--aunt-checker-border-width|边框大小| `var(--aunt-border-width-base);` |
|--aunt-checker-border-style|边框类型| `solid;` |
|--aunt-checker-border-color|边框颜色| `var(--aunt-gray-5);` |
|--aunt-checker-square-radius|方形圆角| `var(--aunt-border-radius-md);` |
|--aunt-checker-active-color|活跃颜色| `var(--aunt-brand-color);` |
|--aunt-checker-label-color|内容文字颜色| `var(--aunt-text-color);` |
|--aunt-checker-label-font-size|内容文字大小| `var(--aunt-font-size-lg);` |
|--aunt-checker-label-margin|内容外边距| `0 var(--aunt-padding-xs);` |
|--aunt-checker-disabled-color|禁用状态文字边框等颜色| `var(--aunt-gray-4);` |
|--aunt-checker-disabled-background-color|禁用状态背景颜色| `var(--aunt-gray-3);` |

