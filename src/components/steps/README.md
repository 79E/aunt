# Steps 步骤条
<code hidden="hidden" src="./demos/demo.tsx"></code>


## 介绍
用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

## 使用
```tsx
import { Steps } from 'aunt';
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 展示标题
可以通过设置 `title` 属性来改变步骤条标题内容。
<code src="./demos/demo-title.tsx"></code>

### 展示描述
可以通过设置 `description` 属性来改变步骤条的描述信息。
<code src="./demos/demo-description.tsx"></code>

### 自定义颜色
可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。
<code src="./demos/demo-color.tsx"></code>

### 自定义图标
可以通过 `finishIcon`,`activeIcon`,`inactiveIcon`属性设置三个状态下的图标内容。
<code src="./demos/demo-icon.tsx"></code>

### 竖向步骤条
可以通过设置 `direction` 属性来改变步骤条的显示方向。
<code src="./demos/demo-direction.tsx"></code>

### 自定义内容
通过传入`renderContent`可自定义内容显示。
<code src="./demos/demo-content.tsx"></code>

## 参数

### Steps Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| finishIcon |  已完成步骤对应的图标  | `React.ReactNode`    |`-`   |
| activeColor | 当前步骤和已完成步骤的颜色	  |  `string`  |`#165DFF` |
| activeIcon | 当前步骤对应的图标 |  `React.ReactNode`  |`-` |
| inactiveIcon | 非当前步骤对应的图标 |  `React.ReactNode`  |`-` |
| inactiveColor | 未激活步骤的颜色	  |  `string`  |`#c9cdd4` |
| active | 当前步骤对应的索引值	  |  `number`  |`0` |
| direction | 步骤条方向，可选 vertical  |  `string`  |`horizontal` |

### StepsItem Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| title | 步骤标题	  |  `string`  |`-` |
| description | 步骤描述内容	  |  `string`  |`-` |
| renderContent |  自定义步骤内容  | `React.ReactNode`    |`-`   |
| finishIcon |  已完成步骤对应的图标  | `React.ReactNode`    |`-`   |
| activeColor | 当前步骤和已完成步骤的颜色	  |  `string`  |`-` |
| activeIcon | 当前步骤对应的图标 |  `React.ReactNode`  |`-` |
| inactiveIcon | 非当前步骤对应的图标 |  `React.ReactNode`  |`-` |
| inactiveColor | 未激活步骤的颜色	  |  `string`  |`-` |

## 事件

### StepsProps

| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClickStep| 点击步骤 |  `(index: number) => void;` | `-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-steps-vertical-top | 竖向图标高度 | `calc(var(--aunt-font-size-md) * 1.5 / 2);` |
| --aunt-steps-vertical-content-padding-bottom | 内容下边距 | `var(--aunt-padding-lg);` |
| --aunt-steps-dot-size | 默认点图标大小 | `var(--aunt-padding-xs);` |
| --aunt-steps-dot-border-radius | 点图标圆角 | `var(--aunt-border-radius-max);` |
| --aunt-steps-content-title-font-size | 内容标题文字大小 | `var(--aunt-font-size-md);` |
| --aunt-steps-content-description-font-size | 内容描述文字大小 | `var(--aunt-font-size-sm);` |
| --aunt-steps-content-description-color | 内容描述文字颜色 | `var(--aunt-gray-5);` |
