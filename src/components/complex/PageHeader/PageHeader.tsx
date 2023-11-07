import { FC, ReactNode } from 'react';

import styles from './PageHeader.module.css';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';

type PageHeaderProps = {
  title: string;
  children?: ReactNode;
  onBackClick?: () => void;
};

const PageHeader: FC<PageHeaderProps> = ({ title, children, onBackClick }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleSection}>
        {onBackClick ? (
          <Button
            onClick={onBackClick}
            className={styles.arrow}
            icon={<Icon kind="ArrowLeft" size="s" />}
            type="text"
          />
        ) : null}

        {title}
      </div>
      <div className={styles.settingSection}>{children}</div>
    </div>
  );
};

export { PageHeader };
