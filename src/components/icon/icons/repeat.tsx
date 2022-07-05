
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
  className="aunt-icon aunt-icon-repeat"
  {...props}
>
  <polyline points="17 1 21 5 17 9" />
  <path d="M3 11V9a4 4 0 0 1 4-4h14" />
  <polyline points="7 23 3 19 7 15" />
  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
</svg>

  );
  
  const Repeat = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Repeat" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Repeat.displayName = 'Repeat';
  
  export default Repeat;
  