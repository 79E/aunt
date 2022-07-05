
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
  className="aunt-icon aunt-icon-smartphone"
  {...props}
>
  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
  <line x1="12" y1="18" x2="12.01" y2="18" />
</svg>

  );
  
  const Smartphone = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Smartphone" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Smartphone.displayName = 'Smartphone';
  
  export default Smartphone;
  