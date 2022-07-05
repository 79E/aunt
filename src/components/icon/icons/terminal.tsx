
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
      className="aunt-icon aunt-icon-terminal"
    {...props}
>
  <polyline points="4 17 10 11 4 5" />
  <line x1="12" y1="19" x2="20" y2="19" />
</svg>

  );
  
  const Terminal = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Terminal" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Terminal.displayName = 'Terminal';
  
  export default Terminal;
  