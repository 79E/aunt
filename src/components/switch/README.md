# Switch 开关
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于在打开和关闭状态之间进行切换。

## 使用
```tsx
import { Switch } from "aunt";
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 禁用状态
通过 disabled 属性来禁用开关，禁用状态下开关不可点击。
<code src="./demos/demo-disabled.tsx"></code>

### 加载状态
通过 loading 属性设置开关为加载状态，加载状态下开关不可点击。
<code src="./demos/demo-loading.tsx"></code>


### 开关形状
通过 shape 属性设置开关形状。
<code src="./demos/demo-shape.tsx"></code>

### 自定义大小
通过 size 属性自定义开关的大小。
<code src="./demos/demo-size.tsx"></code>


### 自定义颜色
activeColor 属性表示打开时的背景色，inactiveColor 表示关闭时的背景色。
<code src="./demos/demo-color.tsx"></code>

### 异步控制
需要异步控制开关时，可以使用 checked 属性和 onClick 事件，使用 onClick 来控制 checked 属性开或者关。
<code src="./demos/demo-async.tsx"></code>


## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| checked |   开关状态   | `boolean`    |`-`   |
| defaultChecked | 默认开关状态 |  `boolean`  |`-`   |
| size |   设置开关尺寸   | `number \| string`    |`-`   |
| loading | 加载状态 |   `boolean`  |`false` |
| disabled | 禁用状态 |  `boolean` |  `false` |
| shape | 设置开关形状 |   ` 'square' \| 'round' `  |`round` |
| activeColor | 打开时的背景色 |  `string` |`-` |
| inactiveColor | 关闭时的背景色 | `string` |`-` |
| activeValue | 打开时对应的值 | `any` |`-` |
| inactiveValue | 关闭时对应的值 | `any` |`-` |

## 事件
设置 `onClick` 后 `onChange` 将失效。
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClick|点击开关时候触发|  `(e: React.MouseEvent) => void` |`-` |
|onChange|开关状态切换时触发|  `(val: any) => void` |`-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-switch-width | 开关宽度 | `2em` |
| --aunt-switch-height | 开关高度 | `1em` |
| --aunt-switch-size | 开关大小 | `calc(30 * var(--aunt-hd))` |
| --aunt-switch-padding | 开关内边距 | `calc(var(--aunt-padding-base) / 2)` |
| --aunt-switch-disabled-opacity | 开关禁用透明度 | `var(--aunt-disabled-opacity)` |
| --aunt-switch-background-color | 开关背景色 | `rgba(120, 120, 128, .16)` |
| --aunt-switch-checked-background-color | 开关选中状态背景色 | `var(--aunt-brand-color)` |
| --aunt-switch-border-radius-round | 开关圆角圆形 | `var(--aunt-border-radius-max)` |
| --aunt-switch-border-radius-square | 开关圆角方形 | `var(--aunt-border-radius-md)` |
| --aunt-switch-transition-duration | 开关动画时间 | `var(--aunt-animation-duration-base)` |
| --aunt-switch-node-background-color | 开关内容颜色 | `var(--aunt-color-white)` |
| --aunt-switch-node-size | 开关内容大小 | `1em` |
| --aunt-switch-node-box-shadow | 开关内容阴影 | `-` |

```less
--aunt-switch-node-box-shadow: 
    0 calc(3 * var(--aunt-hd)) calc(1 * var(--aunt-hd)) 0 rgba(0, 0, 0, 0.05),
    0 calc(2 * var(--aunt-hd)) calc(2 * var(--aunt-hd)) 0 rgba(0, 0, 0, 0.1), 
    0 calc(3 * var(--aunt-hd)) calc(3 * var(--aunt-hd)) 0 rgba(0, 0, 0, 0.05);
```