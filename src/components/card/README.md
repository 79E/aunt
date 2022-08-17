# Card 卡片 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
最基础的卡片容器，可承载文字、列表、图片、段落等，便于用户浏览内容。

## 使用
```tsx
import { Card } from 'aunt';
```

### 基础使用
<code src="./demos/demo-base.tsx"></code>

### 圆角卡片
`round` 属性开启圆角样式
<code src="./demos/demo-round.tsx"></code>

### 底部内容
通过 `Card.Footer` 设置底部内容。
<code src="./demos/demo-footer.tsx"></code>


### 封面展示
使用 `Card.Cover` 可以方便的展示封面，随意调整位置
<code src="./demos/demo-cover.tsx"></code>

### 展示边框
`Card.Header` 和 `Card.Footer` 的 `border` 属性可以展示对应边框
<code src="./demos/demo-border.tsx"></code>

### 自定义卡片样式
`Card.Header` 和 `Card.Footer` 的 `border` 属性可以展示对应边框
<code src="./demos/demo-custom.tsx"></code>

## 参数

### Card Props

| 参数      | 说明         | 类型                      | 默认值  |
| -------- | ----------- | ------------------------ | ------ |
| round     | 开启圆角     | `boolean`                 | `false` |
| border    | 显示边框     | `boolean`                 | `false` |
| className | css 类名     | `string`                  | `-`       |
| style     | css 样式     | `CSSProperties`           | `-`       |
| onClick   | 卡片点击事件 | `(e: MouseEvent) => void` | `-`       |

### Card.Header Props

| 参数      | 说明           | 类型                      | 默认值 |
| -------- | ------------- | ------------------------ | ----- |
| extra     | 右侧内容       | `ReactNode`               | `-`      |
| border    | 是否显示下边框 | `boolean`                 | `-`      |
| className | css 类名       | `string`                  | `-`      |
| style     | css 样式       | `CSSProperties`           | `-`      |
| onClick   | 点击事件       | `(e: MouseEvent) => void` | `-`      |

### Card.Body Props

| 参数      | 说明     | 类型                      | 默认值 |
| -------- | ------- | ------------------------ | ----- |
| className | css 类名 | `string`                  | `-`      |
| style     | css 样式 | `CSSProperties`           | `-`      |
| onClick   | 点击事件 | `(e: MouseEvent) => void` | `-`      |

### Card.Footer Props

| 参数      | 说明           | 类型                      | 默认值 |
| -------- | ------------- | ------------------------ | ----- |
| border    | 是否显示下边框 | `boolean`                 | `-`      |
| compact   | 不需要内边距   | `boolean`                 | `-`      |
| className | css 类名       | `string`                  | `-`      |
| style     | css 样式       | `CSSProperties`           | `-`      |
| onClick   | 点击事件       | `(e: MouseEvent) => void` | `-`      |

### Card.Cover Props

| 参数      | 说明     | 类型                      | 默认值 |
| -------- | ------- | ------------------------ | ----- |
| className | css 类名 | `string`                  | `-`      |
| style     | css 样式 | `CSSProperties`           | `-`      |
| onClick   | 点击事件 | `(e: MouseEvent) => void` | `-`      |

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 属性名 | 说明 | 默认值 |
| ------------------------- | ------------------------------------------ | --- |
| --rv-card-size             | -    | `var(--aunt-font-size-md)`  | 
| --rv-card-color            |  -    |`var(--aunt-text-color)`                      |
| --rv-card-background-color | -    |`var(--aunt-color-white)`           | 
| --rv-card-radius           | -    |`var(--aunt-border-radius-lg)`                | 
| --rv-card-body-padding     | -    |`0 var(--aunt-padding-md)`                    | 
| --rv-card-header-padding   | -    |`var(--aunt-padding-sm) var(--aunt-padding-md)` | 
| --rv-card-header-size      | -    |`var(--aunt-font-size-lg)`                    | 
| --rv-card-header-color     | -    |`var(--aunt-black)`                           | 
| --rv-card-footer-padding   | -    |`var(--aunt-padding-sm) var(--aunt-padding-md)` | 


