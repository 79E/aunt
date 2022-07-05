
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
  className="aunt-icon aunt-icon-log-in"
  {...props}
>
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
  <polyline points="10 17 15 12 10 7" />
  <line x1="15" y1="12" x2="3" y2="12" />
</svg>

  );
  
  const LogIn = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="LogIn" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  LogIn.displayName = 'LogIn';
  
  export default LogIn;
  