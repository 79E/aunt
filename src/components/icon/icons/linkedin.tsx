
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
  className="aunt-icon aunt-icon-linkedin"
  {...props}
>
  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  <rect x="2" y="9" width="4" height="12" />
  <circle cx="4" cy="4" r="2" />
</svg>

  );
  
  const Linkedin = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Linkedin" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Linkedin.displayName = 'Linkedin';
  
  export default Linkedin;
  