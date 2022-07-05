
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
  className="aunt-icon aunt-icon-navigation-two"
  {...props}
>
  <polygon points="12 2 19 21 12 17 5 21 12 2" />
</svg>

  );
  
  const NavigationTwo = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="NavigationTwo" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  NavigationTwo.displayName = 'NavigationTwo';
  
  export default NavigationTwo;
  