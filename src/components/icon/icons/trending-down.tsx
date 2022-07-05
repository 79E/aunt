
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
  className="aunt-icon aunt-icon-trending-down"
  {...props}
>
  <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
  <polyline points="17 18 23 18 23 12" />
</svg>

  );
  
  const TrendingDown = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="TrendingDown" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  TrendingDown.displayName = 'TrendingDown';
  
  export default TrendingDown;
  