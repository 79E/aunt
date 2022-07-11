# LazyLoad 懒加载

## 介绍
当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
> Lazyload 基于 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)实现，部分浏览器需要[intersection-observer polyfill](https://www.npmjs.com/package/intersection-observer)支持。

## 使用
```tsx
import React from 'react';
import { LazyLoad } from 'aunt';

export default () => {
  return (
    <LazyLoad>
        <span>懒加载</span>
    </LazyLoad>
  );
};

```

### 图片懒加载
将 Image 组件的 lazyload 属性设为 true 即可开启懒加载功能。
```tsx

const imageList = [
  'https://tu.eebk.com/item/62c294295be16ec74a16ee09.jpg',
  'https://tu.eebk.com/item/62c294315be16ec74a16f884.jpg',
  'https://tu.eebk.com/item/62c294355be16ec74a16fedc.jpg',
  'https://tu.eebk.com/item/62c2943a5be16ec74a1706de.jpg',
  'https://tu.eebk.com/item/62c2948f5be16ec74a177628.jpg',
  'https://tu.eebk.com/item/62c294955be16ec74a177d22.jpg',
  'https://tu.eebk.com/item/62c294995be16ec74a178273.jpg',
];

<>
    {
        imageList.map(
            (img) => (
                <Image lazyload src={img} key={img} />
            )   
        )
    }
</>
```

### 组件懒加载
将需要懒加载的组件放在 Lazyload 组件中，即可实现组件懒加载。
```tsx
<LazyLoad>
    <div>
        <Image src="https://tu.eebk.com/item/62c294295be16ec74a16ee09.jpg" />
        <Typography.Text>
            当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
        </Typography.Text>
    </div>
</LazyLoad>
```

## 参数

| 参数        | 说明               | 类型             | 默认值 |
| ----------- | ------------------ | ---------------- | ------ |
| height      | 设置占位容器高度   | `number｜string` | -      |
| placeholder | 自定义占位容器视图 | `ReactNode`      | -      |
| style       | 占位容器样式       | `CSSProperties`  | -      |
| className   | 占位容器类名       | `string`         | -      |








<code hidden="hidden" src="./demos/demo.tsx"></code>