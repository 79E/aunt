
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
  className="aunt-icon aunt-icon-hash"
  {...props}
>
  <line x1="4" y1="9" x2="20" y2="9" />
  <line x1="4" y1="15" x2="20" y2="15" />
  <line x1="10" y1="3" x2="8" y2="21" />
  <line x1="16" y1="3" x2="14" y2="21" />
</svg>

  );
  
  const Hash = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Hash" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Hash.displayName = 'Hash';
  
  export default Hash;
  