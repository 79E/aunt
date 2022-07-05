
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
  className="aunt-icon aunt-icon-file-plus"
  {...props}
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
  <polyline points="14 2 14 8 20 8" />
  <line x1="12" y1="18" x2="12" y2="12" />
  <line x1="9" y1="15" x2="15" y2="15" />
</svg>

  );
  
  const FilePlus = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="FilePlus" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  FilePlus.displayName = 'FilePlus';
  
  export default FilePlus;
  