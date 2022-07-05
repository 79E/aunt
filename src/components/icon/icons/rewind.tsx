
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
  className="aunt-icon aunt-icon-rewind"
  {...props}
>
  <polygon points="11 19 2 12 11 5 11 19" />
  <polygon points="22 19 13 12 22 5 22 19" />
</svg>

  );
  
  const Rewind = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Rewind" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Rewind.displayName = 'Rewind';
  
  export default Rewind;
  