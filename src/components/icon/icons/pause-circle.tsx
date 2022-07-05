
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
  className="aunt-icon aunt-icon-pause-circle"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <line x1="10" y1="15" x2="10" y2="9" />
  <line x1="14" y1="15" x2="14" y2="9" />
</svg>

  );
  
  const PauseCircle = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="PauseCircle" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  PauseCircle.displayName = 'PauseCircle';
  
  export default PauseCircle;
  