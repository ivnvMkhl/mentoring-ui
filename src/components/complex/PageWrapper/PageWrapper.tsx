import { FC, ReactNode } from 'react';

import styles from './PageWrapper.module.css';

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export { PageWrapper };
