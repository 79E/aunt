
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
  className="aunt-icon aunt-icon-rss"
  {...props}
>
  <path d="M4 11a9 9 0 0 1 9 9" />
  <path d="M4 4a16 16 0 0 1 16 16" />
  <circle cx="5" cy="19" r="1" />
</svg>

  );
  
  const Rss = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Rss" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Rss.displayName = 'Rss';
  
  export default Rss;
  