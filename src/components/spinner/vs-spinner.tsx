import React, { HTMLAttributes } from 'react';
import { SIZES } from './utils';
import clsx from 'clsx';

export interface SinnerProps extends HTMLAttributes<SVGSVGElement> {
  size?: 'xs' |'sm' | 'md' | 'lg' | 'xl',
  classNames?: string
}

export const VsSpinner = React.forwardRef<SVGSVGElement, SinnerProps>(
  (props, ref) => {
    const { size = 'md', classNames, ...restProps } = props;
    const classes = clsx('animate-spin', SIZES[size], classNames);

    return(
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className={classes}
        fill="none"
        viewBox="0 0 66 66"
        {...restProps}
      >
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeWidth="10"
          className="opacity-30"
        />
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          stroke="currentColor"
          strokeDasharray="40, 134"
          strokeDashoffset="325"
          strokeLinecap="round"
          strokeWidth="10"
          className="opacity-70"
        />
      </svg>
    );
  });
