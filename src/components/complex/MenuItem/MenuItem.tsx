import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

type Props = {
  label: string;
  link: string;
  icon: ReactNode;
  active: boolean;
};

const MenuItem: FC<Props> = ({ label, link, icon, active }) => {
  return (
    <Link to={link} className={styles.link}>
      {active && <div className={styles.active}></div>}
      <div className={styles.menuItem}>
        {icon}
        {label}
      </div>
    </Link>
  );
};

export { MenuItem };
