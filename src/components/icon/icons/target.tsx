
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
  className="aunt-icon aunt-icon-target"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
</svg>

  );
  
  const Target = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Target" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Target.displayName = 'Target';
  
  export default Target;
  