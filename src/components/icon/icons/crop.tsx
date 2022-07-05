
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
  className="aunt-icon aunt-icon-crop"
  {...props}
>
  <path d="M6.13 1L6 16a2 2 0 0 0 2 2h15" />
  <path d="M1 6.13L16 6a2 2 0 0 1 2 2v15" />
</svg>

  );
  
  const Crop = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Crop" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Crop.displayName = 'Crop';
  
  export default Crop;
  