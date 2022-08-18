# Grid 栅格 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于业务中多个子功能的导航，在具有推荐性质较强的页面中作为功能入口使用。

## 使用
```tsx
import { Grid } from "aunt";
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>


### 间隔用法
使用 Grid 的 gap 参数来规定间距也可用[]来规定行和列的间隔。
<code src="./demos/demo-gap.tsx"></code>

### 列数用法
使用 Grid 的 column 参数来规定列数。
<code src="./demos/demo-column.tsx"></code>


### 行数用法*
使用 Grid 的 row 参数来规定列数, 这里如果不和 GridItem 组件中的行跨度 row 参数组合使用可能看不出效果。
<code src="./demos/demo-row.tsx"></code>

### 列跨度
使用 GridItem 的 column 参数规定列跨度数。
<code src="./demos/demo-item-column.tsx"></code>


## 参数
### Grid
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| gap | 格子之间的间隔  |      `number \| string \| [number \| string, number \| string]`    |`0`   | 
| column | 列数 |   `number`  |`4` |
| row | 行数 |`number` |   `-`  | 

### Grid.item
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| column |   横向跨度  |       `number`    |`-`   |
| row | 竖向跨度 |   `number`  |`-`   |

