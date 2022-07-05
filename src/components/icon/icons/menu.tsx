
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
  className="aunt-icon aunt-icon-menu"
  {...props}
>
  <line x1="3" y1="12" x2="21" y2="12" />
  <line x1="3" y1="6" x2="21" y2="6" />
  <line x1="3" y1="18" x2="21" y2="18" />
</svg>

  );
  
  const Menu = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Menu" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Menu.displayName = 'Menu';
  
  export default Menu;
  