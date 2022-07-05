
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
  className="aunt-icon aunt-icon-user-plus"
  {...props}
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
  <circle cx="8.5" cy="7" r="4" />
  <line x1="20" y1="8" x2="20" y2="14" />
  <line x1="23" y1="11" x2="17" y2="11" />
</svg>

  );
  
  const UserPlus = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="UserPlus" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  UserPlus.displayName = 'UserPlus';
  
  export default UserPlus;
  