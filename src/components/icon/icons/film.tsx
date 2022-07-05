
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
  className="aunt-icon aunt-icon-film"
  {...props}
>
  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
  <line x1="7" y1="2" x2="7" y2="22" />
  <line x1="17" y1="2" x2="17" y2="22" />
  <line x1="2" y1="12" x2="22" y2="12" />
  <line x1="2" y1="7" x2="7" y2="7" />
  <line x1="2" y1="17" x2="7" y2="17" />
  <line x1="17" y1="17" x2="22" y2="17" />
  <line x1="17" y1="7" x2="22" y2="7" />
</svg>

  );
  
  const Film = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="Film" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  Film.displayName = 'Film';
  
  export default Film;
  