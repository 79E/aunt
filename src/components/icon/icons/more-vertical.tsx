
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
  className="aunt-icon aunt-icon-more-vertical"
  {...props}
>
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="19" r="1" />
</svg>

  );
  
  const MoreVertical = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="MoreVertical" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  MoreVertical.displayName = 'MoreVertical';
  
  export default MoreVertical;
  