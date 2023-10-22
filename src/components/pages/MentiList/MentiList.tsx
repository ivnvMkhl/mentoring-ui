import { FC } from 'react';
import styles from './MentiList.module.css';
import { TheInput } from '../../primitives/input/TheInput';
import { TheButton } from '../../primitives/button/TheButton';
import { TheTable } from '../../primitives/Table/TheTable';

const MentiList: FC = () => {
  return <div className={styles.wrapper}>
      <TheInput placeholder = "123" defaultValue="123"></TheInput>
      <TheButton type="primary">Тестовая кнопка</TheButton>
      <TheButton type="dashed">Тестовая кнопка</TheButton>
      <TheTable columns={[{title: 'Age',dataIndex: 'age',key: 'age',},{title: 'Address',dataIndex: 'address',key: 'address'}]} dataSource={[{key: '3',name: 'Joe Black',age: 32,address: 'Sydney No. 1 Lake Park',tags: ['cool', 'teacher']}]}></TheTable>
  </div>;
};

export { MentiList };
