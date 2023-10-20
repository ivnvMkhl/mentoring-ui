import { FC } from 'react';

import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';

const SideBar: FC = () => {
  return (
    <div className={styles.sideBar}>
      <Link to="/menti-list">MentiList</Link>
      <Link to="/lesson-list">LessonList</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
};

export { SideBar };
