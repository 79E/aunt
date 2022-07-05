# Grid 栅格 

## 介绍
用于业务中多个子功能的导航，在具有推荐性质较强的页面中作为功能入口使用。

## 使用
```tsx
import React from "react";
import { Grid } from "aunt";

export default () =>(
    <Grid gap={10} column={3}>
        <Grid.Item>1</Grid.Item>
        <Grid.Item>2</Grid.Item>
        <Grid.Item>3</Grid.Item>
    </Grid>
);
```

### 基础用法

```tsx
<Grid gap={10} column={3}>
    <Grid.Item>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
</Grid>

<Grid gap={10} column={3} row={3}>
    <Grid.Item row={2} column={2}>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
    <Grid.Item>4</Grid.Item>
    <Grid.Item column={2}>5</Grid.Item>
</Grid>
```

### 间隔用法
使用 Grid 的 gap 参数来规定间距也可用[]来规定行和列的间隔。
```tsx
<Grid gap={4}>
    <Grid.Item>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
    <Grid.Item>4</Grid.Item>
</Grid>
```

### 列数用法
使用 Grid 的 column 参数来规定列数。
```tsx
<Grid gap={4} column={2}>
    <Grid.Item>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
    <Grid.Item>4</Grid.Item>
</Grid>
```


### 行数用法*
使用 Grid 的 row 参数来规定列数, 这里如果不和 GridItem 组件中的行跨度 row 参数组合使用可能看不出效果。
```tsx
<Grid gap={4} column={2} row={3}>
    <Grid.Item row={3}>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
    <Grid.Item>4</Grid.Item>
</Grid>
```

### 列跨度
使用 GridItem 的 column 参数规定列跨度数。
```tsx
<Grid gap={4}>
    <Grid.Item column={2}>1</Grid.Item>
    <Grid.Item>2</Grid.Item>
    <Grid.Item>3</Grid.Item>
    <Grid.Item>4</Grid.Item>
    <Grid.Item column={3}>5</Grid.Item>
</Grid>
```

## 参数
### Grid
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| gap | 格子之间的间隔  |   `0`   |    `number ｜ string ｜ [number ｜ string, number ｜ string]`    |
| column | 列数 | `4` |  `number`  |
| row | 行数 | `-`  | `number` |  

### Grid.item
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| column |   横向跨度  |   `-`   |    `number`    |
| row | 竖向跨度 | `-` |  `number`  |

<code hidden="hidden" src="./demos/demo.tsx"></code>