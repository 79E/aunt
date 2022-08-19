# LazyLoad 懒加载

<code hidden="hidden" src="./demos/demo.tsx"></code>

## 介绍
当页面需要加载大量内容时，使用懒加载可以实现延迟加载页面可视区域外的内容，从而使页面加载更流畅。
> Lazyload 基于 [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)实现，部分浏览器需要[intersection-observer polyfill](https://www.npmjs.com/package/intersection-observer)支持。

## 使用
```tsx
import { LazyLoad } from 'aunt';
```

### 图片懒加载
将 Image 组件的 lazyload 属性设为 true 即可开启懒加载功能。
<code src="./demos/demo-images.tsx"></code>


### 组件懒加载
将需要懒加载的组件放在 Lazyload 组件中，即可实现组件懒加载。
<code src="./demos/demo-components.tsx"></code>


## 参数

| 参数        | 说明               | 类型             | 默认值 |
| ----------- | ------------------ | ---------------- | ------ |
| height      | 设置占位容器高度   | `number\|string` | `-`      |
| placeholder | 自定义占位容器视图 | `ReactNode`      | `-`      |
| style       | 占位容器样式       | `CSSProperties`  | `-`      |
| className   | 占位容器类名       | `string`         | `-`      |
