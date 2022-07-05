
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
  className="aunt-icon aunt-icon-play"
  {...props}
>
  <polygon points="5 3 19 12 5 21 5 3" />
</svg>

  );
  
  const Play = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Play" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Play.displayName = 'Play';
  
  export default Play;
  