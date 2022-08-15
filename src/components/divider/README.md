# Divider 分割线 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
区隔内容的分割线。
## 使用
```tsx
import React from "react";
import { Divider } from "aunt";

export default () => <Divider />;
```

### 展示文本
可传入自组件进行展示内容
```tsx
<Divider>文本内容</Divider>
```
### 内容位置
通过 contentPosition 属性来设置内容的所在位置
```tsx
<Divider contentPosition="left">左边内容</Divider>
<Divider contentPosition="right">右边内容</Divider>
```
### 虚线
通过 dashed 属性来设置虚线模式
```tsx
<Divider dashed={true}>文本内容</Divider>
```
### 自定义样式
传入Css样式进行自定义样式
```tsx
<Divider style={{
    color: '#F53F3F',
    borderColor: '#FF7D00',
}}>文本内容</Divider>
```

### 垂直分割线
通过 direction 属性来设置虚线方向 默认 horizontal 可设置为 vertical
```tsx
<Divider direction="vertical" />
```

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


