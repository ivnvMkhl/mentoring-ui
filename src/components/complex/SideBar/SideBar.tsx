import { FC } from 'react';

import styles from './SideBar.module.css';
import { MenuItem } from '../MenuItem/MenuItem';
import { Icon } from '../../primitives/Icon/Icon';

const SideBar: FC = () => {
  return (
    <div className={styles.sideBar}>
      <MenuItem label="Ученики" link="/menti-list" icon={<Icon kind="UsergroupAdd" size="l" />} />
      <MenuItem label="Занятия" link="/lesson-list" icon={<Icon kind="Contacts" size="l" />} />
      <MenuItem label="Аналитика" link="/analytics" icon={<Icon kind="BarChart" size="l" />} />
    </div>
  );
};

export { SideBar };
