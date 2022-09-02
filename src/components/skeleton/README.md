# Skeleton 骨架屏
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
在需要等待加载内容的位置提供一个占位图形组合。

## 使用
```tsx
import { Skeleton } from 'aunt';
```

### 基础用法
可以通过 row 属性配置占位段落行数，默认为3行。
<code  src="./demos/demo-base.tsx"></code>

### 显示标题
通过 title 属性显示标题占位图。
<code src="./demos/demo-title.tsx"></code>

### 显示头像
通过 avatar 属性显示头像占位图。
<code src="./demos/demo-avatar.tsx"></code>

### 自定义高度
通过 rowHeight 属性显示头像占位图。
<code src="./demos/demo-row-height.tsx"></code>

### 展示子组件
将 loading 属性设置成 false 表示内容加载完成，此时会隐藏占位图，并显示 Skeleton 的子组件。
<code src="./demos/demo-children.tsx"></code>



## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| row |段落占位图行数|    `number`|`3`|
| rowWidth | 段落占位图宽度，可传数组来设置每一行的宽度 |   `number \| string \| (number \| string)[]` | `100%` |
| rowHeight |段落占位图高度，可传数组来设置每一行的高度|    `number \| string \| (number \| string)[]` | `-` |
| title |是否显示标题占位图|    `boolean` | `false` |
| titleWidth |	标题占位图宽度 |    `string \| number` |`40%`|
| round |是否将标题和段落显示为圆角风格|    `boolean`|`true`|
| loading |是否显示骨架屏，传 false 时会展示子组件内容|    `boolean`|`true`|
| animate |是否开启动画 |    `boolean`|`true`|
| avatar |是否显示头像占位图|    `boolean`|`false`|
| avatarSize |头像占位图大小|    `string \| number`|`32px`|
| avatarShape |头像占位图形状，可选值为 square|    `string`|`round`|

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-skeleton-avatar-size | 占位头像大小 | `calc(32 * var(--aunt-hd));` |
| --aunt-skeleton-avatar-background-color | 占位头像背景颜色 | `var(--aunt-active-color);` |
| --aunt-skeleton-border-radius | square时的圆角大小 | `var(--aunt-border-radius-m);` |
| --aunt-skeleton-title-width | 标题长度 | `40%` |
| --aunt-skeleton-row-height | 行高 | `calc(16 * var(--aunt-hd));` |
| --aunt-skeleton-row-background-color | 行背景颜色 | `var(--aunt-active-color);` |
| --aunt-skeleton-row-margin-top | 行外间距 | `var(--aunt-padding-sm);` |
| --aunt-skeleton-animation-duration | 动画时间 | `1.2s` |

