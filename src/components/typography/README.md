# Typography 文本
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
文本的基本格式。

## 使用

```tsx
import { Typography } from "aunt";
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 文本类型
设置 type 属性后，文本会展示不同的 ui 状态。
<code src="./demos/demo-type.tsx"></code>


### 文本省略
设置 ellipsis 属性后，文本超出部分将省略。
<code src="./demos/demo-ellipsis.tsx"></code>


### 标题文本
<code src="./demos/demo-level.tsx"></code>



### 文本链接
<code src="./demos/demo-link.tsx"></code>


## 参数

### Typography.Text AND Typography.Link Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型，可选值`danger` ` secondary` `light` `primary` `success` `warning ` | `string` | `-` |
| size | 文本大小，可选值`xs` `sm` `md` `lg` `xl` `xxl` | `boolean` | `md` |
| disabled | 禁用文本 | `boolean` | `false` |
| ellipsis | 文本省略 | `boolean\| number` | `false` |
| delete | 添加删除线样式 | `boolean` | `false` |
| underline | 添加下划线样式 | `boolean` | `false` |
| center | 文本居中 | `boolean` | `false` |
| strong | 文本加粗 | `boolean` | `false` |
| onClick | 点击事件 | `function` | `-` |

### Typography.Title Props

| 参数  | 说明                                 | 类型     | 默认值 |
| ----- | ------------------------------------ | -------- | ------ |
| level | 重要程度，可选值 `1` `2` `3` `4` `5` | `number` | `4`    |


## 样式变量
组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-typography-color|默认颜色| `var(--aunt-text-color);` |
|--aunt-typography-link-color|链接样式颜色| `var(--aunt-primary-color);` |
|--aunt-typography-font-size|默认字体大小| `var(--aunt-font-size-md);` |
|--aunt-typography-line-height|行高属性| `var(--aunt-line-height-md);` |
|--aunt-typography-primary-color|主题文本颜色| `var(--aunt-primary-color);` |
|--aunt-typography-danger-color|失败文本颜色| `var(--aunt-danger-color);` |
|--aunt-typography-success-color|成功文本颜色| `var(--aunt-success-color);` |
|--aunt-typography-warning-color|警告文本颜色| `var(--aunt-warning-color)` |
|--aunt-typography-secondary-color|次要文本颜色| `var(--aunt-gray-6);` |
|--aunt-typography-disabled-color|禁用文本颜色| `var(--aunt-gray-5);` |
|--aunt-typography-light-color|白色字| `var(--aunt-color-white);` |


