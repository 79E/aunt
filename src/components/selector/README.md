# Selector 选择组
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
在一组选项中选择一个或多个。

## 使用
```tsx
import { Selector } from 'aunt';
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 开启多选
使用`multiple`属性开启多选模式。
<code src="./demos/demo-multiple.tsx"></code>

### 设置布局
使用`gap`属性设置元素的间距。

使用`column`属性设置列数。
<code src="./demos/demo-layout.tsx"></code>

### 禁用状态
可给某个元素设置`disabled`表示禁用状态。
<code src="./demos/demo-disabled.tsx"></code>

### 描述信息
设置`description`属性可展示描述信息。
<code src="./demos/demo-desc.tsx"></code>

### 自定义标记
向`checkMark`传递`React.ReactNode`可自定义标记样式。
<code src="./demos/demo-mark.tsx"></code>

## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| value |  选中项  | `Array`    |`-`   |
| defaultValue | 默认选中项 |  `Array`  |`[]` |
| options | 选项 |  `Array`  |`-` |
| fieldNames | 自定义 options 中 label value disabled description 的字段 |  `FieldNames`  |`{description: 'description',label: 'label',value: 'value',disabled: 'disabled'}` |
| disabled | 禁用状态 |  `boolean`  |`false` |
| multiple | 是否开启多选 |  `boolean`  |`false` |
| gap | 间距 |  `Gap`  |`10` |
| column | 列数 |  `number`  |`3` |
| showCheckMark | 是否展示标记 |  `boolean`  |`true` |
| checkMark | 标记 |  `React.ReactNod`  |`<CheckMark />` |

## 事件

| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onChange| 选项变化时的回调函数 |  `(value: value:Array<string \| number>, extend:Array<T>) => void` | `-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-selector-font-size | 默认文字大小 | `var(--aunt-font-size-md);` |
| --aunt-selector-padding | 元素内边距 | `var(--aunt-padding-xs) var(--aunt-padding-md);` |
| --aunt-selector-border-radiu | 元素圆角 | `var(--aunt-border-radius-md);` |
| --aunt-selector-description-font-size | 描述文字大小 | `var(--aunt-font-size-sm);` |
| --aunt-selector-active-background-color | 选中背景颜色 | `var(--aunt-arcoblue-1);` |
| --aunt-selector-active-color | 选择文字颜色 | `var(--aunt-brand-color);` |
| --aunt-selector-background-color | 背景颜色 | `var(--aunt-background-color);` |
| --aunt-selector-color | 文字颜色 | `var(--aunt-text-color);` |
| --aunt-selector-disabled-opacity | 禁用透明度 | `var(--aunt-disabled-opacity);` |
| --aunt-selector-description-color | 描述文字颜色 | `var(--aunt-gray-5);` |
