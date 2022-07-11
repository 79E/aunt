# Loading 加载

## 介绍
加载图标，用于表示加载中的过渡状态。
## 使用

```tsx
import React from "react";
import { Loading } from "aunt";

export default () => <Loading />;
```

### 加载类型
通过 type 属性可以设置加载图标的类型，默认为 gap，可选值为 oval，rings，ball，bars，circles，puff，spinning，three，gap。

```tsx
<Loading type="rings" />
<Loading type="oval" />
<Loading type="ball" />
```

### 自定义颜色
通过 color 属性设置加载图标的颜色。

```tsx
<Loading color="#3f45ff"  />
<Loading type="ball" color="#3f45ff" />
```

### 自定义大小
通过 size 属性设置加载图标的大小，默认单位为 px。

```tsx
<Loading size="50"  />
<Loading type="ball" size="24px" />
```

### 加载文案
通过 size 属性设置加载图标的大小，默认单位为 px。

```tsx
<Loading>加载中...</Loading>
```

### 垂直排列
通过 size 属性设置加载图标的大小，默认单位为 px。

```tsx
<Loading vertical>加载中...</Loading>
```
### 自定义文本颜色
通过 textColor 属性，可以自定义文本颜色。

```tsx
<Loading vertical textColor="#3f45ff">加载中...</Loading>
```

### 自定义文本大小
通过 textSize 属性，可以自定义文本大小。

```tsx
<Loading vertical textSize='22'>加载中...</Loading>
<Loading vertical textColor="#3f45ff" textSize='10px'>加载中...</Loading>
```

<code src="./demos/demo-all.tsx" inline></code>

## 参数

| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| type |   统一设置按钮类型   |   `gap`   |    `'oval'｜'rings'｜'spinning'｜'three'｜'ball'｜'bars'｜ 'circles'｜'gap'｜'puff'`    |
| size | 加载图标大小，默认单位为px | `30px` |  ` number ｜ string `  |
| color | 颜色 |  `-`   | `string`  |
| textSize | 文字大小，默认单位为px | `14px` | `number ｜ string` |
| textColor | 	文字颜色 |  `#4e5969`  | `string` |
| vertical | 是否垂直排列图标和文字内容	 |  `false`  | `boolean` |

<code src="./demos/demo.tsx" hidden></code>