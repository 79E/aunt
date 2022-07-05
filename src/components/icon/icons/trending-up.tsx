
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
  className="aunt-icon aunt-icon-trending-up"
  {...props}
>
  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
  <polyline points="17 6 23 6 23 12" />
</svg>

  );
  
  const TrendingUp = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="TrendingUp" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  TrendingUp.displayName = 'TrendingUp';
  
  export default TrendingUp;
  