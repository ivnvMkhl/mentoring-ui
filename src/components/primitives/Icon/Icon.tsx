import { FC } from 'react';
import { UsergroupAdd } from './icons/UsergroupAdd';
import { Contacts } from './icons/Contacts';
import { BarChart } from './icons/BarChart';

type IconKind = 'UsergroupAdd' | 'Contacts' | 'BarChart';
type IconSize = 's' | 'm' | 'l';

type IconProps = {
  kind: IconKind;
  size?: IconSize;
};

const sizes: Record<IconSize, readonly [number, number]> = {
  s: [16, 16],
  m: [24, 24],
  l: [32, 32],
} as const;

const Icon: FC<IconProps> = ({ kind, size = 'm' }) => {
  switch (kind) {
    case 'UsergroupAdd':
      return <UsergroupAdd size={sizes[size]} />;
    case 'Contacts':
      return <Contacts size={sizes[size]} />;
    case 'BarChart':
      return <BarChart size={sizes[size]} />;
    default:
      return null;
  }
};

export { Icon };
