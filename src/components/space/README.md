# Space 间距

## 介绍
元素排列中保持相同的宽度，适用于多个元素按照水平或垂直方向保持相同的间距。

## 使用
```tsx
import React from "react";
import { Space } from "aunt";

export default () =>(
    <Space>
        <span>space:1</span>
        <span>space:2</span>
    </Space>
);
```

### 基础用法
相邻组件水平间距。
```tsx
<Space>
    <Button type="primary" plain>按钮1</Button>
    <Button type="success" plain>按钮2</Button>
</Space>
```

### 垂直间距
相邻组件垂直间距，可以设置 width: 100% 独占一行。
```tsx
<Space direction="vertical">
    <Button type="primary" plain>按钮1</Button>
    <Button type="success" plain>按钮2</Button>
</Space>
```

### 间距大小
通过 gap 属性可以调整间距大小。

gap 设置为数组时可以同时调整垂直方向和水平方向的间距大小
```tsx
<Space gap={30}>
    <Button type="primary" plain>按钮1</Button>
    <Button type="success" plain>按钮2</Button>
</Space>
```

### 自动换行
超出宽度后会自动移到下一行。
```tsx
<Space wrap>
    <Button type="primary" >按钮1</Button>
    <Button type="success" plain>按钮2</Button>
    <Button type="warning" plain>按钮3</Button>
    <Button type="danger" plain>按钮4</Button>
    <Button plain>按钮5</Button>
    <Button type="warning">按钮6</Button>
</Space>
```

## 参数

| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| gap |   间距大小   |   `8`   |    `string｜number｜[string, string]`    |
| justify | 主轴对齐方式 | `-` |  `'start'｜ 'end'｜ 'center'｜ 'between'｜ 'around'｜ 'evenly'｜ 'stretch' `  |
| align | 交叉轴对齐方式 | `-`  | `'start'｜ 'end'｜ 'center'｜ 'baseline'` |  
| direction | 间距方向 |  `horizontal`   | `'vertical' ｜ 'horizontal'`  |
| wrap | 是否自动换行，仅在 horizontal 时有效 |  `false`  | `boolean` |
| block | 是否渲染为块级元素 | `false` | `boolean` |


<code hidden="hidden" src="./demos/demo.tsx"></code>