import { FC, ReactNode } from 'react';
import styles from './MainLayout.module.css';
import { TopBar } from '../TopBar/TopBar';
import { SideBar } from '../SideBar/SideBar';

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <TopBar />
      </div>
      <SideBar />
      <>{children}</>
    </div>
  );
};

export { MainLayout };
