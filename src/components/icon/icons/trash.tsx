
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
  className="aunt-icon aunt-icon-trash"
  {...props}
>
  <polyline points="3 6 5 6 21 6" />
  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
</svg>

  );
  
  const Trash = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Trash" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Trash.displayName = 'Trash';
  
  export default Trash;
  