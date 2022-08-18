# Empty 空状态
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于于信息为空时的占位提示。

## 使用
```tsx
import { Empty } from "aunt";
```

### 基础使用
可通过设置image属性来设置，可传入error network search。
<code src="./demos/demo-base.tsx"></code>

### 图片类型
可通过设置image属性来设置，可传入error network search。
<code src="./demos/demo-type.tsx"></code>

### 自定义图片
可通过设置image属性来设置，可传入图片链接或者组件。
<code src="./demos/demo-image.tsx"></code>


### 底部内容
通过 children 可以在 Empty 组件的下方插入内容。
<code src="./demos/demo-children.tsx"></code>



## 参数
| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| image |图片类型，可选值为 error network search，支持传入图片 URL|    `'string'\|'ReactNode'`|`default`|
| description | 图片下方的描述文字 |   `'string'\|'ReactNode'` |`-` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
| --aunt-empty-padding | 内边距 | `var(--aunt-padding-lg) 0` |
| --aunt-empty-image-size | 图片大小 | `160px` |
| --aunt-empty-description-color | 描述文字颜色 | `var(--aunt-gray-6)` |
| --aunt-empty-description-font-size | 描述文字大小 | `var(--aunt-font-size-md)` |
| --aunt-empty-description-line-height | 描述文字行高 | `var(--aunt-line-height-md)` |
| --aunt-empty-description-padding | 描述文字内边距 | `0 60px` |
| --aunt-empty-description-margin-top | 描述文字距上外边距 | `var(--aunt-padding-md)` |
| --aunt-empty-bottom-margin-top | 底部内容距上外边距 | `var(--aunt-padding-md)` |