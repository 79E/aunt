---
mobile: true
---

# Icon 图标

## 介绍
语义化的矢量图形(SVG)
## 使用
直接引入你所需要的图标即可 无需在安装其他包：
```tsx
import React from "react";
import { AuntIconActivity } from "aunt";

export default () => <AuntIconActivity />;
```
> 主流的构建工具会自动做 Tree-Shaking，所以最终被打包进来的只有你用到的那些图标，不必担心包体积问题。
>



<code src="./demos/demo-all.tsx" inline >

### 图标颜色
Icon 的 color 属性用来设置图标的颜色。
```tsx
<AuntIconActivity color="#f44336" />
<AuntIconAlertOctagon color="#3f45ff" />
```

### 图标旋转
Icon 的 spin 属性用来设置图标旋转，默认单位为 false。
```tsx
<AuntIconLoader spin />
<AuntIconFileMinus spin />
```


### 图标旋转角度
Icon 的 rotate 属性用来设置图标旋转的角度。
```tsx
<AuntIconLoader rotate={20} />
<AuntIconFileMinus rotate={60} />
```

## 参数
| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| color| 修改svg的颜色 |   `inherit`   |    `string`    |
| size | 图标大小，如  20px 2em | `inherit` | `number ｜ string` |
| spin | 是否开启旋转动画 | `false` | `boolean` |
| rotate | 图标旋转角度 | `-` | `number` |

## 事件
| 事件名 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
|onClick|点击图标时触发| `-` | `() => void` |



<code  src="./demos/demo.tsx" hidden >
<!-- <API src="./index.ts"></API> -->