import { Meta } from '@storybook/react';
import { User } from '@phosphor-icons/react';
import { useState } from 'react';

import { colorThemeOptions } from '@/constants/theme';
import Chip from './index';
import { ChipProps } from './types';
import { ROUNDED } from '@/core/components/Button/ButtonBase/constants';
import { SIZE } from '@/core/components/Label/constants';

const meta = {
  title: 'core/Chip',
  component: Chip,
  argTypes: {
    colorTheme: {
      control: 'select',
      options: colorThemeOptions,
      description: 'Chip Color Theme',
    },
    size: {
      control: 'select',
      options: Object.keys(SIZE).map((size) => SIZE[size as keyof typeof SIZE]),
      description: 'Chip Size',
    },
    rounded: {
      control: 'select',
      options: Object.keys(ROUNDED).map(
        (rounded) => ROUNDED[rounded as keyof typeof ROUNDED],
      ),
      description: 'Chip Rounded Size',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

export const Default = (props: ChipProps<'div'>) => {
  const [values, setValues] = useState(['test', 'test2', 'test3']);

  const chips = values.map((item) => {
    const handleDelete = () => {
      setValues((prevValue) => prevValue.filter((v) => v !== item));
    };

    const handleClick = () => {
      console.log(item);
    };

    return (
      <Chip
        key={item}
        label={item}
        colorTheme={props.colorTheme ?? 'primary'}
        size={props.size ?? 'medium'}
        rounded={props.rounded}
        icon={<User size={18} />}
        onClick={handleClick}
        onDelete={handleDelete}
      />
    );
  });

  return <ul className={'flex gap-2'}>{chips}</ul>;
};
