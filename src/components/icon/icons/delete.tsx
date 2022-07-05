
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
  className="aunt-icon aunt-icon-delete"
    {...props}
>
  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
  <line x1="18" y1="9" x2="12" y2="15" />
  <line x1="12" y1="9" x2="18" y2="15" />
</svg>

  );
  
  const Delete = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Delete" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Delete.displayName = 'Delete';
  
  export default Delete;
  