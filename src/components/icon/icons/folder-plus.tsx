
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
  className="aunt-icon aunt-icon-folder-plus"
  {...props}
>
  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  <line x1="12" y1="11" x2="12" y2="17" />
  <line x1="9" y1="14" x2="15" y2="14" />
</svg>

  );
  
  const FolderPlus = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="FolderPlus" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  FolderPlus.displayName = 'FolderPlus';
  
  export default FolderPlus;
  