# Typography 文本

## 介绍
文本的基本格式。

## 使用

```tsx
import React from "react";
import { Typography } from "aunt";

export default () => <Typography.Text>
    这是一段文本
</Typography.Text>;
```

### 基础用法
```tsx
<Typography.Title>《劝学诗》</Typography.Title>
<Typography.Text>
    富家不用买良田，<Typography.Text type="danger">书中自有千钟粟。</Typography.Text>{' '}
    <Typography.Text delete>安居不用架高堂，</Typography.Text>书中自有黄金屋。
    <Typography.Text type="primary">出门莫恨无人随，</Typography.Text>书中车马多如簇。<Typography.Text underline>娶妻莫恨无良媒，</Typography.Text>
    书中自有颜如玉。<Typography.Text type="warning">男儿若遂平生志，</Typography.Text>
    <Typography.Text>五经勤向窗前读。</Typography.Text>
</Typography.Text>
```
### 文本类型
设置 type 属性后，文本会展示不同的 ui 状态。
```tsx
<Typography.Text type="danger">一生大笑能几回</Typography.Text>
<Typography.Text type="primary">斗酒相逢须醉倒</Typography.Text>
<Typography.Text type="warning">花门楼前见秋草</Typography.Text>
<Typography.Text type="secondary">岂能贫贱相看老</Typography.Text>
```

### 文本省略
设置 ellipsis 属性后，文本超出部分将省略。
```tsx
<Typography.Text ellipsis>
春宵一刻值千金，花有清香月有阴。歌管楼台声细细，秋千院落夜沉沉。
</Typography.Text>
<br />
<Typography.Text ellipsis={2}>
欲送登高千里目，愁云低锁衡阳路。鱼书不至雁无凭，今番欲作悲秋赋。回首西山又日斜，天涯孤客真难度，男儿有泪不轻弹，只因未到伤心处！
</Typography.Text>
```

### 标题文本
```tsx
<Typography.Title level={1}>一级测试标题</Typography.Title>
<Typography.Title level={2}>二级测试标题</Typography.Title>
<Typography.Title level={3}>三级测试标题</Typography.Title>
<Typography.Title level={4}>四级测试标题</Typography.Title>
<Typography.Title level={5}>五级测试标题</Typography.Title>
```

### 文本链接
```tsx
<Typography.Link>文本Link</Typography.Link>
```



## 参数

### Typography.Text AND Typography.Link Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 文本类型，可选值`danger` ` secondary` `light` `primary` `success` `warning ` | `string` | - |
| size | 文本大小，可选值`xs` `sm` `md` `lg` `xl` `xxl` | `boolean` | `md` |
| disabled | 禁用文本 | `boolean` | `false` |
| ellipsis | 文本省略 | `boolean｜ number` | `false` |
| delete | 添加删除线样式 | `boolean` | `false` |
| underline | 添加下划线样式 | `boolean` | `false` |
| center | 文本居中 | `boolean` | `false` |
| strong | 文本加粗 | `boolean` | `false` |
| onClick | 点击事件 | `function` | - |

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


<code hidden="hidden" src="./demos/demo.tsx"></code>