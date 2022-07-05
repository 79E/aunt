
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
  className="aunt-icon aunt-icon-unlock"
  {...props}
>
  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 9.9-1" />
</svg>

  );
  
  const Unlock = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Unlock" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Unlock.displayName = 'Unlock';
  
  export default Unlock;
  