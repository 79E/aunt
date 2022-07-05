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
    className="aunt-icon aunt-icon-airplay"
    {...props}
  >
    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
    <polygon points="12 15 17 21 7 21 12 15" />
  </svg>
);


const Airplay = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="Airplay" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

Airplay.displayName = 'Airplay';

export default Airplay;
