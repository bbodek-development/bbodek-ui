import { forwardRef, useContext } from 'react';

import clsx from 'clsx';
import { DropdownContext } from './index';
import { DropdownContextValue, DropdownTriggerProps } from './types';

const DropdownTrigger = forwardRef(
  (
    { onClick, className, children, ...props }: DropdownTriggerProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const { isToggle, readOnly, disabled, setIsToggle } = useContext(
      DropdownContext,
    ) as DropdownContextValue;
    const content =
      typeof children === 'function'
        ? children({ isToggle, readOnly, disabled })
        : children;
    const isDisabled = readOnly || disabled;

    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      setIsToggle((v) => !v);
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type='button'
        onClick={onClickHandler}
        className={clsx(
          'cursor-pointer whitespace-nowrap bg-white',
          isDisabled && '!cursor-not-allowed bg-gray-09',
          className,
        )}
        aria-haspopup='listbox'
        aria-expanded={isToggle}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        {...props}
      >
        {content}
      </button>
    );
  },
);

export default DropdownTrigger;

DropdownTrigger.displayName = 'DropdownTrigger';
