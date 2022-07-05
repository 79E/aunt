
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
  className="aunt-icon aunt-icon-twitch"
  {...props}
>
  <path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7" />
</svg>

  );
  
  const Twitch = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Twitch" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Twitch.displayName = 'Twitch';
  
  export default Twitch;
  