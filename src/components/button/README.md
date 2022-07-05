# Button 按钮

## 介绍
按钮用于触发一个操作，如提交表单。
## 使用

```tsx
import React from "react";
import { Button } from "aunt";

export default () => <Button>默认按钮</Button>;
```

### 按钮类型
按钮支持 default、primary、success、warning、danger 五种类型，默认为 default。
```jsx

<Button type="default">默认按钮</Button>
<Button type="primary">主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="danger">危险按钮</Button>

```

### 朴素按钮
通过 plain 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```tsx
<Button plain type="primary">朴素按钮</Button>
<Button plain type="success">朴素按钮</Button>
```

### 细边按钮
设置 hairline 属性可以展示 0.5px 的细边框。

```tsx
<Button plain hairline type="primary">细边按钮</Button>
<Button plain hairline type="success">细边按钮</Button>
```

### 图标按钮
通过 icon 属性设置按钮图标，支持 Icon 组件里的所有图标。

```tsx
<Button type="primary" icon={<AuntIconAlertCircle size={18} />}>图标按钮</Button>
<Button type="success" icon={<AuntIconAlertCircle size={18} />} iconPosition="right">图标按钮</Button>
```

### 禁用状态
通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx
<Button disabled type="primary">禁用按钮</Button>
<Button plain disabled type="success">禁用按钮</Button>
```


### 加载状态
通过 disabled 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx
<Button type="primary" loading>加载状态</Button>
<Button loading type="success" loadingText="加载中..." >加载状态</Button>
```

### 按钮形状
通过 shape 设置按钮的形状 default 默认按钮带圆角 square 方形按钮 round 圆形按钮

```tsx
<Button shape="default" type="primary">圆角按钮</Button>
<Button shape="square" type="success">方形按钮</Button>
<Button shape="round" type="success">圆形按钮</Button>
```

### 按钮尺寸
支持 large、normal、small、mini 四种尺寸，默认为 normal。

```tsx
<Button shape="large" type="primary">大号按钮</Button>
<Button shape="normal" type="success">默认按钮</Button>
<Button shape="small" type="success">小号按钮</Button>
<Button shape="mini" type="success">迷你按钮</Button>
```
### 块级按钮
按钮在默认情况下为行内块级元素，通过 block 属性可以将按钮的元素类型设置为块级元素。

```tsx
<Button block type="primary">块级按钮</Button>
```
### 自定义颜色
通过 color 属性可以自定义按钮的颜色。
```tsx
<Button color="#7232dd">单色按钮</Button>
<Button color="#7232dd" plain>单色按钮</Button>
<Button color="linear-gradient(to right, #ff6034, #ee0a24)">渐变色按钮</Button>
```

## 参数

| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| type |   统一设置按钮类型   |   `default`   |    `'default'｜'primary'｜'success'｜'warning'｜'danger'`    |
| size | 统一设置按钮尺寸 | `normal` |  ` 'large'｜'normal'｜'small'｜'mini' `  |
| block | 是否是块级元素 | `false`  | `boolean` |  
| color | 按钮颜色，支持传入 linear-gradient 渐变色 |  `-`   | `string`  |
| disabled | 是否禁用 |  `false`  | `boolean` |
| shape | 按钮的形状 | `default` | `'default' ｜ 'square' ｜ 'round'` |
| plain | 是否为朴素按钮 |  `false`  | `boolean` |
| hairline | 是否使用 0.5px 边框	 |  `false`  | `boolean` |

## 事件
| 事件名 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
|onClick|点击图标时触发| `-` | `(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void ｜ Promise<void> ` |

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


<code hidden="hidden" src="./demos/demo.tsx"></code>