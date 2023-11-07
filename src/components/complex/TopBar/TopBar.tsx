import { FC } from 'react';

import styles from './TopBar.module.css';
import { Icon } from '../../primitives/Icon/Icon';

const TopBar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Icon kind="Project" size="l" />
        MentorHub
      </div>
      <div className={styles.topBar}>TopBar</div>
    </div>
  );
};

export { TopBar };
