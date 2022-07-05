
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
  className="aunt-icon aunt-icon-grid"
  {...props}
>
  <rect x="3" y="3" width="7" height="7" />
  <rect x="14" y="3" width="7" height="7" />
  <rect x="14" y="14" width="7" height="7" />
  <rect x="3" y="14" width="7" height="7" />
</svg>

  );
  
  const Grid = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Grid" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Grid.displayName = 'Grid';
  
  export default Grid;
  