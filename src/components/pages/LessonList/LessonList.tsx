import { FC } from 'react';

import styles from './LessonList.module.css';
import { PageHeader } from '../../complex/PageHeader/PageHeader';

const LessonList: FC = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader title="Занятия" />
    </div>
  );
};

export { LessonList };
