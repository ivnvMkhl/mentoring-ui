import { FC } from 'react';

import styles from './Analytics.module.css';
import { PageHeader } from '../../complex/PageHeader/PageHeader';

const Analytics: FC = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader title="Аналитика" />
    </div>
  );
};

export { Analytics };
