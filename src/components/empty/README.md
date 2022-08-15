# Empty 空状态
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
用于于信息为空时的占位提示。

## 使用
```tsx
import React from "react";
import { Empty } from "aunt";

export default () => <Empty />;
```

### 图片类型
可通过设置image属性来设置，可传入error network search
```tsx
<Empty image="error" description="error类型" />
<Empty image="network" description="network类型" />
<Empty image="search" description="search类型" />
```


### 自定义图片
可通过设置image属性来设置，可传入图片链接或者组件
```tsx
<Empty
    image="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/fcfa6d32-e40b-480e-92a9-e2d2b4c34b15.png" 
    description="自定义图片"
/>
<Empty 
    image={
        <img src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-ad8d1200-2a6b-490b-8915-4f015cc6cc87/61075960-54e6-4e36-bf37-54087449d748.png" />
    } 
    description="自定组件图" 
/>
```

### 底部内容
通过 children 可以在 Empty 组件的下方插入内容。
```tsx
<Empty description="描述文字">
    <Button shape="round" type="primary">
        按钮
    </Button>
</Empty>
```


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