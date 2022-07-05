
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
  className="aunt-icon aunt-icon-droplet"
    {...props}
>
  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
</svg>

  );
  
  const Droplet = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Droplet" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Droplet.displayName = 'Droplet';
  
  export default Droplet;
  