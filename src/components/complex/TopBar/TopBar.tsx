import { FC } from 'react';

import styles from './TopBar.module.css';

const TopBar: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>MentorHub</div>
      <div className={styles.topBar}>TopBar</div>
    </div>
  );
};

export { TopBar };
