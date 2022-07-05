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
    className="aunt-icon aunt-icon-bar-chart-two"
    {...props}
  >
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const BarChartTwo = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="BarChartTwo" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});




BarChartTwo.displayName = 'BarChartTwo';

export default BarChartTwo;
