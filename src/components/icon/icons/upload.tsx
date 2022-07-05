
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
  className="aunt-icon aunt-icon-upload"
  {...props}
>
  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
  <polyline points="17 8 12 3 7 8" />
  <line x1="12" y1="3" x2="12" y2="15" />
</svg>

  );
  
  const Upload = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Upload" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Upload.displayName = 'Upload';
  
  export default Upload;
  