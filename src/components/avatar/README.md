# Avatar 头像
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用来代表用户或事物，支持图片、图标或字符展示。

## 使用
```tsx
import { Avatar } from "aunt";
```
### 头像尺寸
通过设置 size 属性来控制头像的尺寸，有三个尺寸可以选择 small、normal、large
<code src="./demos/demo-size.tsx"></code>

### 头像形状
通过设置 shape 属性来设置形状 square、round
<code src="./demos/demo-shape.tsx"></code>

### 头像类型
支持三种类型：图片、Icon 以及字符

优先级：图片 => 文本 => Icon(默认`<AuntIconUser />`)

**字符类型会默认截取第一位**
<code src="./demos/demo-type.tsx"></code>

### 图片填充模式
通过设置 fit 属性来设置图片的填充模式
<code src="./demos/demo-fit.tsx"></code>

### 颜色相关
可设置 background 和 color 控制头像的背景颜色和文本图标颜色
<code src="./demos/demo-color.tsx"></code>

## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| size |   设置头像尺寸   |       `'small' \| 'normal' \| 'large'`    |`normal`   |
| shape | 设置头像形状 |  ` 'square'\|'round' `  |`square` | 
| url | 头像图片链接 | `string` |  `-`  | 
| color | 文本或图标颜色 |   `string`  |`#666666`   |
| background | 头像背景颜色 |   `string` |`#dddddd`  |
| fit | 图片填充模式 | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` |`cover` | 

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClick|点击头像时触发|  `() => void` |`-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-avatar-size-large | large尺寸 | `60px` |
| --aunt-avatar-size-normal | normal尺寸 | `40px` |
| --aunt-avatar-size-small | small尺寸 | `32px` |
| --aunt-avatar-shape-square | square形状的radius大小 | `var(--aunt-border-radius-md)` |


