
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
  className="aunt-icon aunt-icon-volume"
  {...props}
>
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
</svg>

  );
  
  const Volume = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Volume" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Volume.displayName = 'Volume';
  
  export default Volume;
  