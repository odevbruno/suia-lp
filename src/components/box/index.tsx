import clsx from 'clsx';
import { ReactNode } from 'react';

interface IBox {
  children: ReactNode;
  variant: 'grid' | 'col' | 'row';
  className?: string;
}

export default function Box(props: IBox) {
  const className = props?.className || '';
  if (props?.variant === 'grid')
    return (
      <div
        className={clsx(
          ...className,
          'grid md:grid-cols-2 lg:grid-cols-3 gap-6',
        )}
      >
        {props?.children}
      </div>
    );
  if (props?.variant === 'col')
    return (
      <div className={clsx(...className, 'flex flex-col gap-4')}>
        {props?.children}
      </div>
    );
  if (props?.variant === 'row')
    return (
      <div className={clsx(...className, 'flex flex-row gap-4')}>
        {props?.children}
      </div>
    );
}
