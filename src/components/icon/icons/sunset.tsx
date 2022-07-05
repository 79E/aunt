
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
  className="aunt-icon aunt-icon-sunset"
  {...props}
>
  <path d="M17 18a5 5 0 0 0-10 0" />
  <line x1="12" y1="9" x2="12" y2="2" />
  <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
  <line x1="1" y1="18" x2="3" y2="18" />
  <line x1="21" y1="18" x2="23" y2="18" />
  <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
  <line x1="23" y1="22" x2="1" y2="22" />
  <polyline points="16 5 12 9 8 5" />
</svg>

  );
  
  const Sunset = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Sunset" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Sunset.displayName = 'Sunset';
  
  export default Sunset;
  