import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuItem.module.css';

type Props = {
  label: string;
  link: string;
  icon: ReactNode;
};

const MenuItem: FC<Props> = ({ label, link, icon }) => {
  return (
    <Link to={link} className={styles.link}>
      <div className={styles.menuItem}>
        {icon}
        <div className={styles.label}> {label} </div>
      </div>
    </Link>
  );
};

export { MenuItem };
