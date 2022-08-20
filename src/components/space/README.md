# Space 间距
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
元素排列中保持相同的宽度，适用于多个元素按照水平或垂直方向保持相同的间距。

## 使用
```tsx
import { Space } from "aunt";
```

### 基础用法
相邻组件水平间距。
<code src="./demos/demo-base.tsx"></code>

### 垂直间距
相邻组件垂直间距，可以设置 width: 100% 独占一行。
<code src="./demos/demo-direction.tsx"></code>

### 间距大小
通过 gap 属性可以调整间距大小。

gap 设置为数组时可以同时调整垂直方向和水平方向的间距大小
<code src="./demos/demo-gap.tsx"></code>

### 自动换行
超出宽度后会自动移到下一行。
<code src="./demos/demo-wrap.tsx"></code>

## 参数

| 参数 | 说明 |  类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| gap |   间距大小   |      `string\|number\|[string, string]`    |`8`   | 
| justify | 主轴对齐方式 |   `'start'\| 'end'\| 'center'\| 'between'\| 'around'\| 'evenly'\| 'stretch' `  |`-` |
| align | 交叉轴对齐方式 |  `'start'\| 'end'\| 'center'\| 'baseline'` |  `-`  |
| direction | 间距方向 |     `'vertical' \| 'horizontal'`  |`horizontal`|
| wrap | 是否自动换行，仅在 horizontal 时有效   | `boolean` |`false` |
| block | 是否渲染为块级元素 |   `boolean` | `false`|