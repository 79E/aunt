
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
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
  className="aunt-icon aunt-icon-shopping-cart"
  {...props}
>
  <circle cx="9" cy="21" r="1" />
  <circle cx="20" cy="21" r="1" />
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
</svg>

  );
  
  const ShoppingCart = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="ShoppingCart" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  ShoppingCart.displayName = 'ShoppingCart';
  
  export default ShoppingCart;
  