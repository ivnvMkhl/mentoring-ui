import { FC } from 'react';

import styles from './SideBar.module.css';
import { MenuItem } from '../MenuItem/MenuItem';
import { Icon } from '../../primitives/Icon/Icon';

const SideBar: FC = () => {
  const curentPath = window.location.pathname;
  return (
    <div className={styles.sideBar}>
      <MenuItem
        label="Ученики"
        link="/menti-list"
        icon={<Icon kind="UsergroupAdd" size="l" />}
        active={curentPath === '/menti-list'}
      />
      <MenuItem
        label="Занятия"
        link="/lesson-list"
        icon={<Icon kind="Contacts" size="l" />}
        active={curentPath === '/lesson-list'}
      />
      <MenuItem
        label="Аналитика"
        link="/analytics"
        icon={<Icon kind="BarChart" size="l" />}
        active={curentPath === '/analytics'}
      />
    </div>
  );
};

export { SideBar };
