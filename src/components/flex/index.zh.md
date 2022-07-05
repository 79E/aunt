# Flex 布局

## 介绍
Flex 组件是 CSS flex 布局的一个封装。

## 使用

```tsx
import React from "react";
import { Flex } from "aunt";

export default () =>(
    <Flex justify="center" align="center">
        <Flex.Item span={12}>span: 12</Flex.Item>
        <Flex.Item span={12}>span: 12</Flex.Item>
    </Flex>
);
```

### 基础用法
Flex 组件提供了24列栅格。使用单一的一组 Flex 和 Flex.Item 栅格组件，就可以创建一个基本的栅格系统，所有列（Flex.Item）必须放在 Flex 内。
```tsx

<Flex justify="center" align="center">
    <Flex.Item span={12}>span: 12</Flex.Item>
    <Flex.Item span={12}>span: 12</Flex.Item>
</Flex>

<Flex>
    <Flex.Item span={8}>span: 8</Flex.Item>
    <Flex.Item span={8}>span: 8</Flex.Item>
    <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>

```

### 区域间隔
通过gutter属性可以设置列元素之间的间距，默认间距为 0; 如果需要垂直间距，可以写成数组形式 [水平间距, 垂直间距]

```tsx

<Flex gutter={16}>
    <Flex.Item span={8}>span: 8</Flex.Item>
    <Flex.Item span={8}>span: 8</Flex.Item>
    <Flex.Item span={8}>span: 8</Flex.Item>
</Flex>

```

### 方向
通过direction属性设置弹性布局方向。默认是 row

```tsx
<Flex direction="row">
    <Flex.Item span={8}>span: 8-1</Flex.Item>
    <Flex.Item span={8}>span: 8-2</Flex.Item>
    <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
<Flex direction="row-reverse">
    <Flex.Item span={8}>span: 8-1</Flex.Item>
    <Flex.Item span={8}>span: 8-2</Flex.Item>
    <Flex.Item span={8}>span: 8-3</Flex.Item>
</Flex>
```

## 参数
### Flex
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| direction |   项目定位方向，可选值为 row row-reverse column column-reverse   |   `row`   |    `string`    |
| wrap | 子元素的换行方式，可选值为 nowrap wrap wrap-reverse | `nowrap` |  `string`  |
| gutter | 列元素之间的间距。可以使用数组形式同时设置 [水平间距, 垂直间距] | `0`  | `number ｜ array` |  
| align | 垂直对齐方式，可选值为 start center end baseline stretch |  `start`   | `string`  |
| justify | 水平排列方式，可选值为 start end center around between |  `start`  | `string` |

### Flex.item
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| flex |   flex 布局属性   |   `-`   |    `string ｜ number`    |
| span | 栅格占位格数，为 0 时相当于 display: none | `-` |  `number`  |



<code hidden="hidden" src="./demos/demo.tsx"></code>