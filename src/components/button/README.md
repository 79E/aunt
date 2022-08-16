# Button 按钮
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
按钮用于触发一个操作，如提交表单。
## 使用

```tsx
import { Button } from "aunt";
```

### 按钮类型
按钮支持 default、primary、success、warning、danger 五种类型，默认为 default。
<code src="./demos/demo-type.tsx"></code>

### 朴素按钮
通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
<code src="./demos/demo-plain.tsx"></code>

### 细边按钮
设置 hairline 属性可以展示 0.5px 的细边框。
<code src="./demos/demo-hairline.tsx"></code>

### 图标按钮
通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标。
<code src="./demos/demo-icon.tsx"></code>

### 禁用状态
通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。
<code src="./demos/demo-disabled.tsx"></code>

### 加载状态
通过 loading 属性来显示加载状态，加载状态下按钮不可点击。
<code src="./demos/demo-loading.tsx"></code>

### 按钮形状
通过 shape 设置按钮的形状 default 默认按钮带圆角 square 方形按钮 round 圆形按钮
<code src="./demos/demo-shape.tsx"></code>

### 按钮尺寸
支持 large、normal、small、mini 四种尺寸，默认为 normal。
<code src="./demos/demo-size.tsx"></code>

### 块级按钮
按钮在默认情况下为行内块级元素，通过 block 属性可以将按钮的元素类型设置为块级元素。
<code src="./demos/demo-block.tsx"></code>

### 自定义颜色
通过 color 属性可以自定义按钮的颜色。
<code src="./demos/demo-color.tsx"></code>


## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| type |   统一设置按钮类型   |       `'default'\|'primary'\|'success'\|'warning'\|'danger'`    |`default`   |
| size | 统一设置按钮尺寸 |   ` 'large'\|'normal'\|'small'\|'mini' `  |`normal` |
| block | 是否是块级元素 |  `boolean` |  `false`  |
| color | 按钮颜色，支持传入 linear-gradient 渐变色 |    `string`  |`-`  |
| disabled | 是否禁用 |  `boolean` | `false`  |
| shape | 按钮的形状 |  `'default' \| 'square' \| 'round'` |`default` |
| plain | 是否为朴素按钮 |   `boolean` |`false`  |
| hairline | 是否使用 0.5px 边框	 |   `boolean` |`false`  |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClick|点击图标时触发|  `(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void> ` |`-` |

## 样式变量
F12打开控制台（检查）选择 `Elements` 的样式即可看到 root 全局样式变量 
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-button-background-default-color|背景颜色| `var(--aunt-color-white);` |
|--aunt-button-background-primary-color|背景颜色| `var(--aunt-primary-color);` |
|--aunt-button-background-success-color|背景颜色| `var(--aunt-success-color);` |
|--aunt-button-background-warning-color|背景颜色| `var(--aunt-warning-color);` |
|--aunt-button-background-danger-color|背景颜色| `var(--aunt-danger-color);` |
|--aunt-button-border-radius|圆角大小| `var(--aunt-border-radius-md);` |
|--aunt-button-border-width|边框大小| `var(--aunt-border-width-base);` |
|--aunt-button-border-style|边框样式| `solid` |
|--aunt-button-border-default-color|边框颜色| `var(--aunt-border-color);` |
|--aunt-button-border-primary-color|边框颜色| `var(--aunt-primary-color);` |
|--aunt-button-border-success-color|边框颜色| `var(--aunt-success-color);` |
|--aunt-button-border-warning-color|边框颜色| `var(--aunt-warning-color);` |
|--aunt-button-border-danger-color|边框颜色| `var(--aunt-danger-color);` |
|--aunt-button-text-default-color|文字颜色| `var(--aunt-text-color);` |
|--aunt-button-text-primary-color|文字颜色| `var(--aunt-primary-color);` |
|--aunt-button-text-success-color|文字颜色| `var(--aunt-success-color);` |
|--aunt-button-text-danger-color|文字颜色| `var(--aunt-warning-color);` |
|--aunt-button-text-warning-color|文字颜色| `var(--aunt-danger-color);` |


