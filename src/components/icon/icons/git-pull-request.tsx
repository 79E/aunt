
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
  className="aunt-icon aunt-icon-git-pull-request"
  {...props}
>
  <circle cx="18" cy="18" r="3" />
  <circle cx="6" cy="6" r="3" />
  <path d="M13 6h3a2 2 0 0 1 2 2v7" />
  <line x1="6" y1="9" x2="6" y2="21" />
</svg>

  );
  
  const GitPullRequest = React.forwardRef<SVGSVGElement, Omit<IconProps, 'name'>>((props, ref) => {
    return (
      <Icon name="GitPullRequest" {...props} ref={ref}>
        <Svg />
      </Icon>
    );
  });
  
  GitPullRequest.displayName = 'GitPullRequest';
  
  export default GitPullRequest;
  