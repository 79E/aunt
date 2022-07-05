
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
  className="aunt-icon aunt-icon-slash"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
</svg>

  );
  
  const Slash = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Slash" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Slash.displayName = 'Slash';
  
  export default Slash;
  