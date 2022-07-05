
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
  className="aunt-icon aunt-icon-pie-chart"
  {...props}
>
  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
  <path d="M22 12A10 10 0 0 0 12 2v10z" />
</svg>

  );
  
  const PieChart = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="PieChart" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  PieChart.displayName = 'PieChart';
  
  export default PieChart;
  