
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
    className="aunt-icon aunt-icon-chevron-right"
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>

);

const ChevronRight = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
  return (
    <Icon name="ChevronRight" {...props} ref={ref}>
      <Svg />
    </Icon>
  );
});

ChevronRight.displayName = 'ChevronRight';

export default ChevronRight;
