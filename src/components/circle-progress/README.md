# CircleProgress 环形进度条
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
环形进度条组件，以圆环形式表示百分比进度

## 使用
```ts
import { CircleProgress } from 'aunt';
```

### 基础用法
使用 percentage 属性表示进度条的进度
<code src="./demos/demo-base.tsx"></code>


### 自定义颜色
使用 fill、trackColor、progressColor 属性分别来设置，进度条背景填充颜色、轨道颜色、进度环颜色。
<code src="./demos/demo-color.tsx"></code>


### 自定大小
使用 strokeWidth、diameter 属性分别来设置进度环宽度、圆环直径。
<code src="./demos/demo-size.tsx"></code>


### 自定义内容
使用 children 来自定义内容
<code src="./demos/demo-children.tsx"></code>


## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| showPercent |   是否显示圆环内部文字   |  `boolean`    | `true`   |
| percentage | 进度环百分比 |   `number`  | `必填` |
| fill | 进度条背景填充颜色 |  `string` |  `-`  |
| trackColor | 轨道颜色 |    `string`  |`-`  |
| progressColor | 进度环颜色 |  `string \| Record<string, string>` | `-`  |
| strokeWidth | 进度环宽度 |  `number` |`40` |
| duration | 每增加所需的毫秒数 |   `number` |`300`  |
| clockwise | 是否逆时针增加	 |   `boolean` |`false`  |
| diameter | 圆环直径	 |   `number` |`80`  |
| strokeLinecap | 进度条两端是否圆角样式	 |   `'round'\|'square'` |`round`  |

## 样式变量

| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-circle-progress-size|圆环画布大小| `calc(80 * var(--aunt-hd));` |
|--aunt-circle-progress-color|进度条颜色 | `var(--aunt-brand-color);` |
|--aunt-circle-progress-track-color|轨道颜色| ` var(--aunt-gray-2);` |
|--aunt-circle-progress-text-font-weight|内部文字加粗| `var(--aunt-font-weight-bold);` |
|--aunt-circle-progress-text-font-size|内部文字大小| `var(--aunt-font-size-md);` |
