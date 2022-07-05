
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
  className="aunt-icon aunt-icon-log-out"
  {...props}
>
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
  <polyline points="16 17 21 12 16 7" />
  <line x1="21" y1="12" x2="9" y2="12" />
</svg>

  );
  
  const LogOut = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="LogOut" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  LogOut.displayName = 'LogOut';
  
  export default LogOut;
  