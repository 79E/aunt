# NoticeBar 通知栏

<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
适用于当前页面内信息的通知，是一种较醒目的页面内通知方式。

## 使用

```tsx
import { NoticeBar } from 'aunt';
```

### 基本用法
默认用法，文字长度超出容器后会自动进行滚动。
<code src="./demos/demo-base.tsx"></code>

### 自定义icon
可以对左侧右侧进行一些自定义的操作。
<code src="./demos/demo-icon.tsx"></code>

### 多行样式
可以通过`wrapable`属性进行多行展示，前提`scrollable`为`false`。
<code src="./demos/demo-wrapable.tsx"></code>

### 滚动播放
文字长度超出后会自动进行滚动，也可将`scrollable`打开后多长都会进行滚动。
<code src="./demos/demo-scrollable.tsx"></code>

### 自定义颜色
可以通过`background` `color`进行一些颜色的自定义。
<code src="./demos/demo-color.tsx"></code>


## 参数

| 参数   | 说明      | 类型   | 默认值    |
| ----------- | --------- | ------- | ----- |
| closeable  | 是否可关闭 | `boolean` | `false` |
| closeIcon  | 自定义关闭图标 | `React.ReactNode` | `<AuntIconX />` |
| content  | 通知文本内容 | `string \| React.ReactNode` | `-` |
| color  | 通知文本颜色 | `string` | `#FF7D00` |
| background  | 通知背景颜色 | `string` | `#FFF7E8` |
| delay  | 动画延迟时间 (ms) | `number` | `0` |
| speed  | 滚动速率 (px/s) | `number` | `1` |
| scrollable  | 是否开启滚动播放，内容长度溢出时默认开启 | `boolean` | `false` |
| wrapable  | 否开启文本换行，只在禁用滚动时生效 | `boolean` | `false` |
| leftIcon  | 自定义左侧图标 | `React.ReactNode` | `-` |
| rightIcon  | 自定义右侧图标 | `React.ReactNode` | `-` |
| onClose  | 闭通知栏时触发 | `(event: React.MouseEvent) => void;` | `-` |
| onClick  | 点击通知栏时触发 | `(event: React.MouseEvent) => void;` | `-` |
| onReplay  | 每当滚动栏重新开始滚动时触发 | `() => void;` | `-` |

## 样式变量

| 属性名     | 说明      | 默认值          |
| --------- | ---------- | ----------------- |
| --aunt-notice-bar-background-color  | 通知背景颜色 | `var(--aunt-orange-1);`   |
| --aunt-notice-bar-color  | 通知内容文字颜色 | `var(--aunt-orange);`   |
| --aunt-notice-bar-font-size  | 通知内容文字大小 | `var(--aunt-font-size-md);`   |
| --aunt-notice-bar-padding  | 通知内边距 | `var(--aunt-padding-xs);`   |
| --aunt-notice-bar-item-margin  | 左右两侧icon外边距 | `var(--aunt-padding-xs);`   |


