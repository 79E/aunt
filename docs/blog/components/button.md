# Button 按钮

### 概括

这是一个可点击有反馈的多主题可定制的按钮。

### 开发思路

- 具有的模式（功能）【 主题色，图标按钮，禁用按钮 】
- 基本按钮的组成【 采用`div`进行样式的编写使用`padding`撑起宽高 】
- 事件的考虑 【 onClick 】

#### 基本按钮

![image-20220706161607829](https://cdn.jsdelivr.net/gh/duogongneng/OneMyBlogImg@master/image-20220706161607829.png)

这是一个基本的按钮我们只实现这个样式 

我们采用div+span 来组成这个按钮的结构

```tsx
<div className='aunt-button'>
	<span>默认按钮</span>
</div>
```

下面就开始编写css就可以了 考虑一下这里采用`padding`来撑起宽高的；

我们可以这样写

```css
.aunt-button{
  	height: auto;
    margin: 0;
    text-align: center;
    padding: 8px 14px;
    font-size: 14px;
    border:1px solid #333;
}
```

这时候完成后还有点生硬，我加上一个点击然后加阴影的效果会更加好的

```css
.aunt-button::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    content: ' ';	
    box-sizing: content-box;
}
.aunt-button:active::before {
    opacity: 0.08;
}
```

```css
.aunt-button{
		position: relative;
		...
}
```

#### 其他样式

四种主题颜色【主要，成功，警告，危险】

思路很简单我们之间定义每个主题颜色的`className`即可如成功主题`.aunt-button--success`

```css
.aunt-button--success{
  	background-color: #00B42A;
    color: #fff;
    border-color: #00B42A;
}
```

以此类推 朴素按钮 细边按钮 禁用状态 按钮尺寸，都是有对应的`className`来设置css变量

#### 加载状态 

这里主要是将加载的`Loading`组件放置了进来 我们编写一个方法来判断是否来展示这个`Loading`并且加上相应的`Loading className`来设置当加载状态下禁止点击

```tsx
const renderLoadingIcon = (position:string) => {
  if (loading) {
  	const { loadingSize = '20px', loadingType } = props;
    return <Loading
        size={loadingSize}
        type={loadingType}
        color={type === 'default' ? undefined : ''}
        className={ `
            ${classPrefix}--icon--${position}
        `}
      />
   }
  return null;
};
```

这里的css采用Less进行处理有些变量和命名结构可以更加方便更加简洁

最后在处理一些细节的东西就可以了～

代码参考： [src/components/button/button.tsx](https://github.com/79E/aunt/blob/master/src/components/button/button.tsx)