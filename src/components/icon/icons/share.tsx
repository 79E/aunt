
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
  className="aunt-icon aunt-icon-share"
  {...props}
>
  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
  <polyline points="16 6 12 2 8 6" />
  <line x1="12" y1="2" x2="12" y2="15" />
</svg>

  );
  
  const Share = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Share" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Share.displayName = 'Share';
  
  export default Share;
  