# Icon 图标

### 概括
标准的SVG图标可定制大小颜色。

### 开发思路
- 统一所有ICON的入口
- 了解SVG基本属性

```tsx
const Svg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="aunt-icon aunt-icon-activity"
    {...props}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);
```

这是一个svg 我们可看到 大致需要设置的几个属性`宽：width` `高：height` `统称颜色:stroke`

我们只要统一入口，在入口进行处理这些长宽颜色等属性就可以完成ICON图标

代码参考： [src/components/icon/icon.tsx](https://github.com/79E/aunt/blob/master/src/components/icon/icon.tsx)
