
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
  className="aunt-icon aunt-icon-video"
  {...props}
>
  <polygon points="23 7 16 12 23 17 23 7" />
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
</svg>

  );
  
  const Video = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Video" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Video.displayName = 'Video';
  
  export default Video;
  