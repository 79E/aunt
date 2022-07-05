
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
  className="aunt-icon aunt-icon-minus-square"
  {...props}
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <line x1="8" y1="12" x2="16" y2="12" />
</svg>

  );
  
  const MinusSquare = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="MinusSquare" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  MinusSquare.displayName = 'MinusSquare';
  
  export default MinusSquare;
  