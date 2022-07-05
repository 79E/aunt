
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
  className="aunt-icon aunt-icon-zap"
  {...props}
>
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
</svg>

  );
  
  const Zap = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Zap" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Zap.displayName = 'Zap';
  
  export default Zap;
  