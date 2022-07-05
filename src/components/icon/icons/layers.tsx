
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
  className="aunt-icon aunt-icon-layers"
  {...props}
>
  <polygon points="12 2 2 7 12 12 22 7 12 2" />
  <polyline points="2 17 12 22 22 17" />
  <polyline points="2 12 12 17 22 12" />
</svg>

  );
  
  const Layers = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Layers" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Layers.displayName = 'Layers';
  
  export default Layers;
  