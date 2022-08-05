# Badge 徽标 

## 介绍
在右上角展示数字、文字、小红点。

## 使用
```tsx
import React from "react";
import { Badge } from "aunt";

export default () => <Badge content='Aunt'/>;
```

### 基本用法
```tsx
<Badge content={52} >
    <div className="demo-badge-card"></div>
</Badge>
<Badge content="Aunt" >
    <div className="demo-badge-card"></div>
</Badge>
<Badge content={<AuntIconBox size={14}/>} >
    <div className="demo-badge-card"></div>
</Badge>
```

### 最大值
设置 `maxCount` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{maxCount}+`，默认最大为99，只有 `content` 为数字的时候生效。
```tsx
<Badge content={99} >
    <div className="demo-badge-card"></div>
</Badge>
<Badge content={100} >
    <div className="demo-badge-card"></div>
</Badge>
<Badge content={60} maxCount={50} >
    <div className="demo-badge-card"></div>
</Badge>
```

### 圆点样式
通过使用 `dot` 属性设置为圆点样式
```tsx
<Badge dot>
    <div className="demo-badge-card"></div>
</Badge>
```


### 自定义颜色和偏移量
通过 color 属性来设置徽标的颜色

通过 offset 属性来调整徽标的偏移量
```tsx
<Badge color="#27C346" dot offset={[0,0]}>
    <div className="demo-badge-card"></div>
</Badge>
<Badge color="#FF7D00" dot offset={[0,'100%']}>
    <div className="demo-badge-card"></div>
</Badge>
<Badge color="#3491FA" dot offset={['100%',0]}>
    <div className="demo-badge-card"></div>
</Badge>
<Badge color="#722ED1" dot offset={['100%','100%']}>
    <div className="demo-badge-card"></div>
</Badge>
```

### 动画
通过`visible`属性控制显示或者隐藏，还可以使用`type`属性进行自定义动画。
```tsx
const [visible,setVisible] = useState(true);

<Space gap={30}>
    <Badge content={52} visible={visible}>
        <div className="demo-badge-card"></div>
    </Badge>
    <Badge content="Aunt" visible={visible}>
        <div className="demo-badge-card"></div>
    </Badge>
    <Badge content={<AuntIconBox size={14}/>} visible={visible}>
        <div className="demo-badge-card"></div>
    </Badge>
    <Badge dot visible={visible}>
        <div className="demo-badge-card"></div>
    </Badge>
</Space>

<Button block onClick={()=>{setVisible(!visible);}}>显示或隐藏</Button>
```

### 单独使用
当 Badge 没有子元素时，会作为一个独立的元素进行展示。
```tsx
<Badge content={52}></Badge>
<Badge content="Aunt" ></Badge>
<Badge content={<AuntIconBox size={14}/>} ></Badge>
<Badge dot ></Badge>
```

## 参数

| 参数 | 说明 | 默认值 | 类型 |
| ---- | ---- | ---- | ------ |
| content |   徽标内容   |   `-`   |    `string \| number \| React.ReactNode`    |
| visible | 显示或隐藏状态 | `true` |  `boolean`  |
| timeout | 动画时间（毫秒） | `300`  | `number \| { appear?: number; enter?: number; exit?: number; }lean` |  
| dot | 显示为一个小红点 |  `false`  | `boolean` |
| maxCount | 最大完整展示数字，超出后将展示 + | `99` | `number` |
| bordered | 是否有白色边框 |  `false`  | `boolean` |
| color | 徽标背景颜色	 |  `-`  | `string` |
| offset | 徽标位置偏移量	 |  `-`  | `[number \| string, number \| string]` |

## 样式变量
| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-badge-border-radius|圆角大小| `var(--aunt-color-white);` |
|--aunt-badge-font-size|内容文字大小| `var(--aunt-font-size-sm);` |
|--aunt-badge-font-weight|内容字重| `var(--aunt-font-weight-bold);` |
|--aunt-badge-padding|徽标内边距| `0 var(--aunt-padding-base);` |
|--aunt-badge-border-width|边框大小| `var(--aunt-border-width-base);` |
|--aunt-badge-border-style|边框样式| `solid;` |
|--aunt-badge-border-color|边框颜色| `var(--aunt-color-white);` |
|--aunt-badge-color|徽标颜色| `var(--aunt-red);` |
|--aunt-badge-dot-size|圆点大小| `calc(6 * var(--aunt-hd));` |
|--aunt-badge-dot-color|圆点背景颜色| `var(--aunt-red);` |


<code hidden="hidden" src="./demos/demo.tsx"></code>