
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
  className="aunt-icon aunt-icon-divide"
  {...props}
>
  <circle cx="12" cy="6" r="2" />
  <line x1="5" y1="12" x2="19" y2="12" />
  <circle cx="12" cy="18" r="2" />
</svg>

  );
  
  const Divide = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Divide" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Divide.displayName = 'Divide';
  
  export default Divide;
  