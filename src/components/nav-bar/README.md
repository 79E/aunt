# NavBar 导航栏
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
为页面提供导航功能，常用于页面顶部。

## 使用
```tsx
import { NavBar } from 'aunt';
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 自定义样式
可以通过传入`style`来定义样式，如背景颜色，文字颜色等。

通过设置`bottomLine`为`false`来取消底部边框。
<code src="./demos/demo-style.tsx"></code>

### 自定义内容
可以设置`leftContent`为`null`来取消左侧按钮。

通过`leftContent`设置右侧展示内容。
<code src="./demos/demo-content.tsx"></code>

### 沉浸式导航
通过设置`fixed`来进行固定到顶部，这时候则不会占位。

可以通过`statusBarHeight`来适配状态栏高度。

案例中设置`absolute`仅供参考。
<code src="./demos/demo-status.tsx"></code>


## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| title| 标题 | `ReactNode`    |`-`   |
| fixed | 是否固定在顶部	  |  `boolean` |`false` |
| leftContent | 自定义左侧按钮 |  `ReactNode` |`<AuntIconChevronLeft />` |
| rightContent | 自定义由侧按钮 | `ReactNode` |`-` | 
| safeAreaInsetTop | 是否开启顶部安全区适配(iOS) |  `boolean` |`false` |
| statusBarHeight | 设置沉浸式状态栏高度（安卓都懂的） |  `number \| string` |`-` |
| bottomLine | 是否显示下边框	  |  `boolean` |`true` |
| placeholder | 固定在顶部时，是否在标签位置生成一个等高的占位元素  |  `boolean` |`false` |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClickLeft|点击左侧按钮|  `(e: React.MouseEvent) => void;` |`-` |
|onClickRight|点击右侧按钮|  `(e: React.MouseEvent) => void;` |`-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-nav-bar-height | 高度 | `calc(44 * var(--aunt-hd));` |
| --aunt-nav-bar-background | 北京颜色 | `var(--aunt-color-white);` |
| --aunt-nav-bar-z-index | 层级 | `1000` |
| --aunt-nav-bar-color | 文字颜色 | `var(--aunt-text-color);` |
| --aunt-nav-bar-border-color | 底部边框颜色 | `var(--aunt-gray-1);` |
| --aunt-nav-bar-title-font-size | 标题字号 | `var(--aunt-font-size-lg);` |
| --aunt-nav-bar-title-font-weight | 标题字重 | `var(--aunt-font-weight-bold);` |
| --aunt-nav-bar-padding | 左右内容边距 | `0 var(--aunt-padding-sm);` |
