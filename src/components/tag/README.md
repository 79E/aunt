# Tag 标签 
<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
进行标记和分类的小标签。

## 使用
```tsx
import React from "react";
import { Tag } from "aunt";

export default () =>(<Tag>标签</Tag>);
```

### 标签类型
使用 `type` 来规定标签的类型。

```tsx
<Tag>标签1</Tag>
<Tag type='danger'>标签2</Tag>
<Tag type='warning'>标签3</Tag>
<Tag type='primary'>标签4</Tag>
<Tag type='success'>标签5</Tag>
```

### 标签形状
使用 `plain` 来规定是否为空心。

使用 `shape` 来规定是否为圆角或者为标记可。

```tsx
<Tag type='danger' plain>标签1</Tag>
<Tag type='warning' plain shape='round'>标签2</Tag>
<Tag type='warning' shape='round'>标签3</Tag>
<Tag type='primary' shape='mark-left'>标签4</Tag>
<Tag type='success' shape='mark-right'>标签5</Tag>
```

### 标签样式
使用 `color` 规定标签的颜色。

使用 `textColor` 规定标签文字或内容的颜色。

```tsx
<Tag color="blue" textColor="#FFFFFF">标签1</Tag>
<Tag color="blue" textColor="red" plain>标签2</Tag>
<Tag color="blue" textColor="red" plain shape='round'>标签3</Tag>
```

### 标签尺寸
使用 `size` 规定标签的尺寸。
```tsx
<Tag size="small" type='warning'>标签小</Tag>
<Tag size="medium" type='primary'>标签中</Tag>
<Tag size="large" type='success'>标签大</Tag>
```

### 标签图标
使用 `icon` 传入图标组件。
```tsx
<Tag icon={<AuntIconMeh size={12} />} size="small" type='warning'>标签小</Tag>
<Tag icon={<AuntIconMeh size={14} />} size="medium" type='primary'>标签中</Tag>
<Tag icon={<AuntIconMeh size={16} />} size="large" type='success'>标签大</Tag>
```

### 关闭按钮
使用 `closeable` 来规定是否展示关闭按钮，`onClose` 作为关闭按钮回调。

```tsx
const [tags,setTags] = useState([1,2]);
const tagTypes = ['primary' , 'success' , 'warning' , 'danger'];

// 删除Tag
function handleClickClose(index) {
    setTags((t)=>{
        const newList = [...t];
        newList.splice(index, 1);
        return newList;
    });
}

// 渲染Tag
{
    tags.map((tag,index) => <Tag key={index} closeable type={tagTypes[tag - 1]} 
    onClose={()=>handleClickClose(index)}
    >标签</Tag>)
}

// 添加Tag
{
    tags.length < 4 && <Tag icon={<AuntIconPlus size={12} />} 
    onClick={() =>{
        setTags((t)=>{
            t.push(t.length+1);
            return [...t];
        });
    }}
    >添加标签</Tag>
}
```

## 参数

| 参数 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
| type |   标签类型   |    `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`  |`default`   |   
| size | 标签尺寸 |   `'medium' \| 'large' \| 'small'`  |`small` |
| plain | 是否为空心 |  `boolean` |`false` |
| shape | 标签形状 |   `'round' \| 'mark-left' \| 'mark-right'`  |`-`   |
| color | 背景色和边框色 |  `string` |`-`  | 
| textColor | 文字内容颜色 | `string` |`-` | 
| icon | 标签图标 | `React.ReactElement` |`-` | 
| closeable | 展示关闭按钮 |  `boolean` |`false` |

## 事件
| 事件名 | 说明 |  类型 |默认值 |
| ---- | ---- | ---- | ------ |
|onClose|点击关闭按钮回调|  `(e: React.MouseEvent<Element, MouseEvent>) => void` |`-` |
|onClick|点击图标时触发|  `(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` |`-` |

## 样式变量

| 属性名 | 说明 | 默认值 |
| ---- | ---- | ---- |
|--aunt-tag-padding|标签默认内边距| `0 var(--aunt-padding-base)` |
|--aunt-tag-border-color|标签默认边框颜色| `#E9E9E9` |
|--aunt-tag-background-color|标签默认背景色| `#E9E9E9` |
|--aunt-tag-text-color|标签默认文字内容颜色| `#E9E9E9` |
|--aunt-tag-text-size|默认mini文字大小| `var(--aunt-font-size-sm)` |
|--aunt-tag-text-size-medium|文字大小| `var(--aunt-font-size-md)` |
|--aunt-tag-text-size-large|文字大小| `var(--aunt-font-size-lg)` |
|--aunt-tag-icon-margin|图标外边距| `calc(2 * var(--aunt-hd))` |