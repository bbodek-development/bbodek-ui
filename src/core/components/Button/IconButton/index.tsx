import clsx from 'clsx';
import { forwardRef } from 'react';
import ButtonBase from '../ButtonBase';
import { ROUNDED } from '../ButtonBase/constants';
import { BUTTON_SIZE } from './constants';
import { IconButtonProps } from './types';

const IconButton = forwardRef(
  (
    { icon, isCircle = false, ...props }: IconButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { rounded, size, className, ...rest } = props;

    return (
      <ButtonBase
        ref={ref}
        className={clsx(BUTTON_SIZE[size], className)}
        size={size}
        rounded={!isCircle ? rounded : ROUNDED['ROUNDED_FULL']}
        {...rest}
      >
        {icon}
      </ButtonBase>
    );
  },
);

export default IconButton;
