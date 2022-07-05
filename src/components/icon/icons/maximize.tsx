
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
  className="aunt-icon aunt-icon-maximize"
  {...props}
>
  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
</svg>

  );
  
  const Maximize = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Maximize" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Maximize.displayName = 'Maximize';
  
  export default Maximize;
  