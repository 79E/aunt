
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
  className="aunt-icon aunt-icon-power"
  {...props}
>
  <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
  <line x1="12" y1="2" x2="12" y2="12" />
</svg>

  );
  
  const Power = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Power" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Power.displayName = 'Power';
  
  export default Power;
  