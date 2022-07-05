
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
  className="aunt-icon aunt-icon-git-commit"
  {...props}
>
  <circle cx="12" cy="12" r="4" />
  <line x1="1.05" y1="12" x2="7" y2="12" />
  <line x1="17.01" y1="12" x2="22.96" y2="12" />
</svg>

  );
  
  const GitCommit = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="GitCommit" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  GitCommit.displayName = 'GitCommit';
  
  export default GitCommit;
  