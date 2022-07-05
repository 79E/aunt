
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
  const Svg = (props: React.SVGProps<SVGSVGElement>) => (

    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="aunt-icon aunt-icon-framer"
  {...props}
>
  <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
</svg>

  );
  
  const Framer = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Framer" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Framer.displayName = 'Framer';
  
  export default Framer;
  