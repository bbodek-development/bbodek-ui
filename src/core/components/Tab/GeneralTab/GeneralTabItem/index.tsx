import { forwardRef, useId } from 'react';
import clsx from 'clsx';

import { Typography } from '@/index';
import { GeneralTabItemProps } from './types';

const GeneralTabItem = forwardRef(
  (
    {
      label,
      theme = 'subhead-01-bold',
      className,
      ...props
    }: Omit<GeneralTabItemProps, 'ref'>,
    ref: React.Ref<HTMLInputElement>,
  ) => {
    const id = useId();

    return (
      <li className='flex-1'>
        <label htmlFor={id}>
          <input
            ref={ref}
            id={id}
            type='radio'
            className={'peer hidden'}
            {...props}
          />
          <Typography
            className={clsx(
              'block w-full cursor-pointer rounded-[1rem] bg-transparent p-2.5 text-center peer-checked:bg-white peer-checked:text-black peer-disabled:cursor-not-allowed',
              className,
            )}
            theme={theme}
            color='gray-05'
            text={label}
          >
            {label}
          </Typography>
        </label>
      </li>
    );
  },
);

export default GeneralTabItem;

GeneralTabItem.displayName = 'GeneralTabItem';
