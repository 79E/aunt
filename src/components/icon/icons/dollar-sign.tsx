
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
  className="aunt-icon aunt-icon-dollar-sign"
  {...props}
>
  <line x1="12" y1="1" x2="12" y2="23" />
  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
</svg>

  );
  
  const DollarSign = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="DollarSign" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  DollarSign.displayName = 'DollarSign';
  
  export default DollarSign;
  