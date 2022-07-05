
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
  className="aunt-icon aunt-icon-minus"
  {...props}
>
  <line x1="5" y1="12" x2="19" y2="12" />
</svg>

  );
  
  const Minus = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Minus" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Minus.displayName = 'Minus';
  
  export default Minus;
  