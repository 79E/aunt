# Divider 分割线 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
区隔内容的分割线。
## 使用
```tsx
import { Divider } from "aunt";
```

### 展示文本
可传入自组件进行展示内容
<code src="./demos/demo-base.tsx"></code>

### 内容位置
通过 contentPosition 属性来设置内容的所在位置
<code src="./demos/demo-contentPosition.tsx"></code>

### 虚线
通过 dashed 属性来设置虚线模式
<code src="./demos/demo-dashed.tsx"></code>

### 自定义样式
传入Css样式进行自定义样式
<code src="./demos/demo-style.tsx"></code>


### 垂直分割线
通过 direction 属性来设置虚线方向 默认 horizontal 可设置为 vertical
<code src="./demos/demo-direction.tsx"></code>


## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| direction |   设置分割线方向   | ` 'horizontal' \| 'vertical' `    |`horizontal`   |
| contentPosition | 设置内容位置 |   ` 'left'\|'right'\|'center' ` |`center` |
| dashed | 设置分割线为虚线 |  | `boolean` |  `false` 
| hairline | 设置分割线为0.5px |  | `boolean` |  `false` 

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-divider-text-color | 文本内容颜色 | `var(--aunt-gray-6)` |
| --aunt-divider-border-color | 分割线颜色 | `var(--aunt-gray-3)` |
| --aunt-divider-margin | 上下间距 | `var(--aunt-padding-md)` |
| --aunt-divider-padding | 内容左右间距 | `var(--aunt-padding-md)` |
| --aunt-divider-font-size | 文本文字大小 | `var(--aunt-font-size-md)` |
| --aunt-divider-content-left-width | 内容位置边距 | `10%` |
| --aunt-divider-content-right-width | 内容位置边距 | `10%` |


