# Tabbar 标签栏  
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
底部导航栏，用于在不同页面之间进行切换。

## 使用
```tsx
import { Tabbar } from 'aunt';
```

### 基本用法
点击 `Tabbar.Item` 即可切换选中的标签(非受控状态)。
<code src="./demos/demo-base.tsx"></code>

### 徽标
通过 `badge` 属性，可以设置图标相应的徽标内容。
<code src="./demos/demo-badge.tsx"></code>

### 仅图标
<code src="./demos/demo-icon.tsx"></code>

### 仅标题
<code src="./demos/demo-title.tsx"></code>

### 自定义颜色
通过 `activeColor` 属性设置选中标签的颜色，通过 `inactiveColor` 属性设置未选中标签的颜色。
<code src="./demos/demo-color.tsx"></code>

### 自定义内容
可通过`children` 来自定义`Tabbar.Item`。
<code src="./demos/demo-custom.tsx"></code>

### 底部固定
通过 `fixed` 属性设置固定底部，默认是开启状态。
<code src="./demos/demo-fixed.tsx"></code>


## 参数

### Tabbar Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| value |  当前选中标签的名称或索引值 |`number \| string`    |`-`   |
| defaultValue | 默认选中标签的名称或索引值	  |  `number \| string`  |`0` |
| fixed | 是否固定在底部	 |  `boolean`  |`true` |
| border | 是否显示外边框	  |  `boolean`  |`true` |
| zIndex | 元素 z-index	  |  `number`  |`1000` |
| activeColor | 选中标签的颜色		  |  `string`  |`#165DFF` |
| inactiveColor | 选中标签的颜色	  |  `string`  |`-` |
| placeholder | 固定在底部时，是否在标签位置生成一个等高的占位元素	   |  `boolean`  |`false` |
| safeAreaInsetBottom | 否开启底部安全区适配，设置 fixed 时默认开启	  |  `boolean`  |`false` |

### TabbarItem Props

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| key | 标识	  |  `string`  |`-` |
| title | 标题	  |  `string`  |`-` |
| icon | 图标	  |  `React.ReactNode \| ((active: boolean) => React.ReactNode);`  |`-` |
| <a href='/components/badge' target='_blank'>badge</a> |  可看徽标组件  | `BadgeProps`    |`-`   |
| children |  自定义内容  | `React.ReactNode \| ((active: boolean) => React.ReactNode);`    |`-`   |

## 事件

### Steps Props

| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onChange| 切换标签时触发  |  `(key: T) => void;` | `-` |

```tsx
type T = number | string
```

### StepsItem Props

| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClick| 点击标签时触发  |  `(event: React.MouseEvent) => void;` | `-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-tabbar-z-index | 层级 | `1000` |
| --aunt-tabbar-min-height | 最小高度 | `calc(44 * var(--aunt-hd));` |
| --aunt-tabbar-background-color | 背景颜色 | `var(--aunt-color-white);` |
| --aunt-tabbar-item-padding | 标签内边距 | `var(--aunt-padding-base);` |
| --aunt-tabbar-item-color | 标签颜色 | `var(--aunt-gray-6);` |
| --aunt-tabbar-item-font-size | 标签文字大小 | `var(--aunt-font-size-sm);` |

