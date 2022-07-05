
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
  className="aunt-icon aunt-icon-image"
  {...props}
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <circle cx="8.5" cy="8.5" r="1.5" />
  <polyline points="21 15 16 10 5 21" />
</svg>

  );
  
  const Image = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Image" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Image.displayName = 'Image';
  
  export default Image;
  