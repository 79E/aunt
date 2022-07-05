
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
  className="aunt-icon aunt-icon-music"
  {...props}
>
  <path d="M9 18V5l12-2v13" />
  <circle cx="6" cy="18" r="3" />
  <circle cx="18" cy="16" r="3" />
</svg>

  );
  
  const Music = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Music" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Music.displayName = 'Music';
  
  export default Music;
  