import { FC } from 'react';
import styles from './MentiList.module.css';
import { TheInput } from '../../primitives/input/TheInput';
import { TheButton } from '../../primitives/button/TheButton';
const MentiList: FC = () => {
  return <div className={styles.wrapper}>
      <TheInput placeholder = "123" defaultValue="123"></TheInput>
      <TheButton type="primary">Тестовая кнопка</TheButton>
      <TheButton type="dashed">Тестовая кнопка</TheButton>
  </div>;
};

export { MentiList };
