import React, {
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
  Ref,
} from 'react';
import clsx from 'clsx';

import { COLOR_THEME, COLOR_THEME_STYLES } from '@/constants/theme';
import { LABEL_ROUNDED, LABEL_SIZE, SIZE } from './constants';
import { LabelProps } from './types';
import { BUTTON_ROUNDED } from '@/core/components/Button/ButtonBase/constants';

const Label = forwardRef(
  <T extends ElementType = 'div'>(
    {
      label,
      icon,
      element: Element,
      colorTheme = COLOR_THEME['WHITE'],
      size = SIZE['MEDIUM'],
      rounded,
      ...props
    }: LabelProps<T> & ComponentPropsWithoutRef<T>,
    ref: Ref<T>,
  ) => {
    const { className, ...rest } = props;
    const Component: ElementType = Element || 'div';

    return (
      <Component
        ref={ref}
        className={clsx(
          'flex items-center justify-center gap-1',
          COLOR_THEME_STYLES[colorTheme],
          size && LABEL_SIZE[size],
          rounded ? BUTTON_ROUNDED[rounded] : LABEL_ROUNDED[size],
          className,
        )}
        {...rest}
      >
        {icon && icon}
        {label}
      </Component>
    );
  },
);

export default Label;
