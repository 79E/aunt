
  import React from 'react';
  import Icon,{ IconProps } from '../index';
  
  const Svg = (props: React.SVGProps<SVGSVGElement>) => (

    <svg
  viewBox="0 0 24 24"
  width="24"
  height="24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="aunt-icon aunt-icon-meh"
  {...props}
>
  <circle cx="12" cy="12" r="10" />
  <line x1="8" y1="15" x2="16" y2="15" />
  <line x1="9" y1="9" x2="9.01" y2="9" />
  <line x1="15" y1="9" x2="15.01" y2="9" />
</svg>

  );
  
  const Meh = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Meh" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Meh.displayName = 'Meh';
  
  export default Meh;
  