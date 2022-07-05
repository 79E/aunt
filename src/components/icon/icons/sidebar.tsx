
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
  className="aunt-icon aunt-icon-sidebar"
  {...props}
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <line x1="9" y1="3" x2="9" y2="21" />
</svg>

  );
  
  const Sidebar = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Sidebar" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Sidebar.displayName = 'Sidebar';
  
  export default Sidebar;
  