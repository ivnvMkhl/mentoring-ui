import { FC } from 'react';
import { UsergroupAdd } from './icons/UsergroupAdd';
import { Contacts } from './icons/Contacts';
import { BarChart } from './icons/BarChart';
import { Project } from './icons/Project';
import styles from './Icon.module.css';
import { ArrowLeft } from './icons/ArrowLeft';
import { Setting } from './icons/Setting';
import { Bell } from './icons/Bell';
import { User } from './icons/User';

type IconKind = 'UsergroupAdd' | 'Contacts' | 'BarChart' | 'Project' | 'ArrowLeft' | 'Setting' | 'Bell' | 'User';
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
      return <UsergroupAdd size={sizes[size]} className={styles.icon} />;
    case 'Contacts':
      return <Contacts size={sizes[size]} className={styles.icon} />;
    case 'BarChart':
      return <BarChart size={sizes[size]} className={styles.icon} />;
    case 'Project':
      return <Project size={sizes[size]} className={styles.icon} />;
    case 'ArrowLeft':
      return <ArrowLeft size={sizes[size]} className={styles.icon} />;
    case 'Setting':
      return <Setting size={sizes[size]} className={styles.icon} />;
    case 'Bell':
      return <Bell size={sizes[size]} className={styles.icon} />;
    case 'User':
      return <User size={sizes[size]} className={styles.icon} />;
    default:
      return null;
  }
};

export { Icon };
