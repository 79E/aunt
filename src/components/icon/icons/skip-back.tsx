
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
  className="aunt-icon aunt-icon-skip-back"
  {...props}
>
  <polygon points="19 20 9 12 19 4 19 20" />
  <line x1="5" y1="19" x2="5" y2="5" />
</svg>

  );
  
  const SkipBack = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="SkipBack" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  SkipBack.displayName = 'SkipBack';
  
  export default SkipBack;
  