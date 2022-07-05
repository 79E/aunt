
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
  className="aunt-icon aunt-icon-pause"
  {...props}
>
  <rect x="6" y="4" width="4" height="16" />
  <rect x="14" y="4" width="4" height="16" />
</svg>

  );
  
  const Pause = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Pause" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Pause.displayName = 'Pause';
  
  export default Pause;
  