
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
  className="aunt-icon aunt-icon-skip-forward"
  {...props}
>
  <polygon points="5 4 15 12 5 20 5 4" />
  <line x1="19" y1="5" x2="19" y2="19" />
</svg>

  );
  
  const SkipForward = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="SkipForward" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  SkipForward.displayName = 'SkipForward';
  
  export default SkipForward;
  