# Rate 评分
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用图形表示评分等级程度，适用于展示事物评级以及快速打分。


## 使用
```tsx
import { Rate } from 'aunt';
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 自定义图标
使用`icon`属性自定义选中的图标，`voidIcon`属性定义为选中的图标。
<code src="./demos/demo-icon.tsx"></code>

### 自定义颜色
使用`color`属性自定义选中的颜色，`voidColor`属性定义为选中的颜色。
<code src="./demos/demo-color.tsx"></code>

### 禁用状态
使用`disabled`属性决定是否为禁用状态。
<code src="./demos/demo-disabled.tsx"></code>

### 展示状态
使用`readonly`属性决定是否为禁用状态。
<code src="./demos/demo-readonly.tsx"></code>

### 半星展示
使用`allowHalf`属性决定是否可以进行半星的选择。
<code src="./demos/demo-half.tsx"></code>

### 自定义数量
使用`count`属性自定义图标的数量。
<code src="./demos/demo-count.tsx"></code>


## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| color |段落占位图行数|    `string`|`-`|
| gutter | 图标间距，默认单位为px |   `number \| string ` | `4` |
| readonly |是否为只读状态，只读状态下无法修改评分|    `boolean` | `false` |
| disabled |是否禁用评分	 |    `boolean` | `false` |
| allowClear |	是否可以清除所选择分数  |    `boolean` |`true`|
| allowHalf |是否允许半选|    `boolean`|`false`|
| voidColor |未选中时的颜色	|    `string`|`-`|
| value |当前分值  |    `number`|`-`|
| defaultValue |默认分值 |    `number`|`-`|
| icon |选中时的图标或图片|    `React.ReactNode`|`<AuntIconStar fill='currentColor' />`|
| voidIcon |未选中时的图标或图片| `React.ReactNode`| `-` |
| count |图标总数| `number \| string` |`5`|

## 事件
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| onChange |当前分值变化时触发的事件|  `(value: number) => void;`|`-`|

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-rate-color | 颜色 | `var(--aunt-gray-3);` |
| --aunt-rate-color-active | 选中颜色 | `var(--aunt-red);` |
| --aunt-rate-padding | 间距 | `var(--aunt-padding-base);` |



