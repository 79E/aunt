
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
  className="aunt-icon aunt-icon-volume-one"
  {...props}
>
  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
</svg>

  );
  
  const VolumeOne = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="VolumeOne" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  VolumeOne.displayName = 'VolumeOne';
  
  export default VolumeOne;
  