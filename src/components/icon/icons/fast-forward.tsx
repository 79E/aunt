
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
  className="aunt-icon aunt-icon-fast-forward"
  {...props}
>
  <polygon points="13 19 22 12 13 5 13 19" />
  <polygon points="2 19 11 12 2 5 2 19" />
</svg>

  );
  
  const FastForward = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="FastForward" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  FastForward.displayName = 'FastForward';
  
  export default FastForward;
  