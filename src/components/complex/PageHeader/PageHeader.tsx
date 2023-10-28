import { FC } from 'react';

import styles from './PageHeader.module.css';
import { Button } from '../../primitives/button/Button';
import { Icon } from '../../primitives/Icon/Icon';

type PageHeaderProps = {
  title: string;
};

const PageHeader: FC<PageHeaderProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        <Button className={styles.arrow} icon={<Icon kind="ArrowLeft" size="s" />} type="text" />
        {title}
      </div>
      <div className={styles.settingSection}>
        <Button> Добавить ученика </Button>
        <Button className={styles.arrow} icon={<Icon kind="Setting" size="s" />} />
      </div>
    </div>
  );
};

export { PageHeader };
