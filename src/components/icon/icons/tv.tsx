
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
  className="aunt-icon aunt-icon-tv"
  {...props}
>
  <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
  <polyline points="17 2 12 7 7 2" />
</svg>

  );
  
  const Tv = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Tv" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Tv.displayName = 'Tv';
  
  export default Tv;
  