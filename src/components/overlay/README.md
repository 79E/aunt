# Overlay 遮罩层 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
常用于模态窗口的背景层，使视觉焦点突出在模态窗口本身。

## 使用
```tsx
import { Overlay } from 'aunt';
```

### 基础用法
<code src="./demos/demo-base.tsx"></code>

### 自定义内容
通过 `children` 可以在遮罩层上自定义任何内容。
<code src="./demos/demo-children.tsx"></code>

## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| visible| 是否展示遮罩层 |       `string`    |`inherit`   |
| zIndex | z-index 层级 |  `number \| string` |`1` |
| duration | 动画时长，单位毫秒 |  `number \| string` |`500` |
| customStyle | 自定义样式 | `object` |`-` | 
| lockScroll | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 |  `boolean` |`true` |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClick|点击遮罩层时触发|  `(event: Event) => void` |`-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-overlay-z-index | 层级 | `1000` |
| --aunt-overlay-background-color | 背景颜色 | `rgba(0, 0, 0, .7)` |
