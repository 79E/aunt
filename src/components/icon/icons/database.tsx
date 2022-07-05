
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
  className="aunt-icon aunt-icon-database"
  {...props}
>
  <ellipse cx="12" cy="5" rx="9" ry="3" />
  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
</svg>

  );
  
  const Database = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Database" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Database.displayName = 'Database';
  
  export default Database;
  