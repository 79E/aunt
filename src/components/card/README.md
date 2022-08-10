# Card 卡片 

## 介绍
最基础的卡片容器，可承载文字、列表、图片、段落等，便于用户浏览内容。

## 使用
```tsx
import React from 'react';
import { Card } from 'aunt';
export default () => {
  return (
    <Card>
      <Card.Header>卡片标题</Card.Header>
      <Card.Body>卡片内容区域</Card.Body>
    </Card>
  );
};
```

### 圆角卡片
`round` 属性开启圆角样式
```tsx
<Card round>
    <Card.Header>圆角卡片</Card.Header>
    <Card.Body>卡片内容区域</Card.Body>
</Card>
```

### 底部内容
通过 `Card.Footer` 设置底部内容。
```tsx
<Card round>
    <Card.Header>卡片标题</Card.Header>
    <Card.Body>
        React Aunt 是一套轻量、可靠的移动端 React 组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
    </Card.Body>
    <Card.Footer>
        <Button type="primary" shape="round" block >
            查看更多
        </Button>
    </Card.Footer>
</Card>
```

### 封面展示
使用 `Card.Cover` 可以方便的展示封面，随意调整位置
```tsx
<Card round style={{ marginBottom: 20 }}>
    <Card.Cover onClick={() => {}}>
        <Image src='https://img.iwave.net.cn/qm/71c2d8132ee95200c2af8ec71b28b590.png' />
    </Card.Cover>
    <Card.Header
        extra={<AuntIconChevronRight />}
        onClick={() => {}}
    >
        封面展示
    </Card.Header>
    <Card.Body onClick={() => {}}>
        卡片内容区域
    </Card.Body>
    <Card.Footer>
        <Space>
            <Button shape='round' size='small'>
                更多
            </Button>
            <Button
                shape='round'
                icon={<AuntIconHeart size={16} />}
                color='linear-gradient(to right, #ff6034, #ee0a24)'
                size='small'
            >
                Like
            </Button>
        </Space>
    </Card.Footer>
</Card>

<Card round>
    <Card.Header
        extra={<AuntIconChevronRight />}
        onClick={() => {}}
    >
        封面展示
    </Card.Header>
    <Card.Body onClick={() => {}}>
        卡片内容区域
    </Card.Body>
    <Card.Cover onClick={() => {}}>
        <Image src='https://img.iwave.net.cn/qm/7c2256378ec48019883b229d742124d2.png' />
    </Card.Cover>
</Card>
```

### 展示边框
`Card.Header` 和 `Card.Footer` 的 `border` 属性可以展示对应边框
```tsx
<Card round>
    <Card.Header border>卡片标题</Card.Header>
    <Card.Body
        style={{
        height: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}
    >
        卡片内容区域
    </Card.Body>
    <Card.Footer border>
        <Button type="primary" shape='round' block >
            查看更多
        </Button>
    </Card.Footer>
</Card>
```

### 自定义卡片样式
`Card.Header` 和 `Card.Footer` 的 `border` 属性可以展示对应边框
```tsx
<Card round style={{ 
    backgroundImage: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)', 
    color: 'white' 
}}>
    <Card.Header>卡片标题</Card.Header>
    <Card.Body
        style={{
            height: '20vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        卡片内容区域
    </Card.Body>
    <Card.Footer>
        <div style={{ textAlign: 'center' }}>我是自定义的底部</div>
    </Card.Footer>
</Card>
```
## 参数

### Card Props

| 参数      | 说明         | 类型                      | 默认值  |
| :-------- | :----------- | :------------------------ | :------ |
| round     | 开启圆角     | `boolean`                 | `false` |
| border    | 显示边框     | `boolean`                 | `false` |
| className | css 类名     | `string`                  | -       |
| style     | css 样式     | `CSSProperties`           | -       |
| onClick   | 卡片点击事件 | `(e: MouseEvent) => void` | -       |

### Card.Header Props

| 参数      | 说明           | 类型                      | 默认值 |
| :-------- | :------------- | :------------------------ | :----- |
| extra     | 右侧内容       | `ReactNode`               | -      |
| border    | 是否显示下边框 | `boolean`                 | -      |
| className | css 类名       | `string`                  | -      |
| style     | css 样式       | `CSSProperties`           | -      |
| onClick   | 点击事件       | `(e: MouseEvent) => void` | -      |

### Card.Body Props

| 参数      | 说明     | 类型                      | 默认值 |
| :-------- | :------- | :------------------------ | :----- |
| className | css 类名 | `string`                  | -      |
| style     | css 样式 | `CSSProperties`           | -      |
| onClick   | 点击事件 | `(e: MouseEvent) => void` | -      |

### Card.Footer Props

| 参数      | 说明           | 类型                      | 默认值 |
| :-------- | :------------- | :------------------------ | :----- |
| border    | 是否显示下边框 | `boolean`                 | -      |
| compact   | 不需要内边距   | `boolean`                 | -      |
| className | css 类名       | `string`                  | -      |
| style     | css 样式       | `CSSProperties`           | -      |
| onClick   | 点击事件       | `(e: MouseEvent) => void` | -      |

### Card.Cover Props

| 参数      | 说明     | 类型                      | 默认值 |
| -------- | ------- | ------------------------ | ----- |
| className | css 类名 | `string`                  | -      |
| style     | css 样式 | `CSSProperties`           | -      |
| onClick   | 点击事件 | `(e: MouseEvent) => void` | -      |

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


<code hidden="hidden" src="./demos/demo.tsx"></code>