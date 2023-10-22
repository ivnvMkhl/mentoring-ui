import { FC } from 'react';

import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';
import { Icon } from '../../primitives/Icon/Icon';

const SideBar: FC = () => {
  return (
    <div className={styles.sideBar}>
      {/* <MenuItem label='MentiList' link="/menti-list" icon={<Icon kind="UsergroupAdd" size="l" />} active={true} /> */}

      <Link to="/menti-list">
        <Icon kind="UsergroupAdd" size="l" />
        MentiList
      </Link>
      <Link to="/lesson-list">LessonList</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
};

export { SideBar };
