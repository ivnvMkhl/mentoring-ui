import { FC } from 'react';
import styles from './MentiList.module.css';
import { TheInput } from '../../primitives/input/TheInput';
const MentiList: FC = () => {
  return <div className={styles.wrapper}>
      <TheInput placeholder = "123" defaultValue="123"></TheInput>
  </div>;
};

export { MentiList };
