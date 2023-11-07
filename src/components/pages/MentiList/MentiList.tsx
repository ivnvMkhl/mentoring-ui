import { FC } from 'react';
import styles from './MentiList.module.css';
import { Input } from '../../primitives/input/Input';
import { Button } from '../../primitives/button/Button';
import { Table } from '../../primitives/Table/Table';
import { Form } from '../../primitives/Form/Form';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';

const MentiList: FC = () => {
  return (
    <PageWrapper>
      <PageHeader title="Список учеников" onBackClick={() => undefined}>
        <Button> Добавить ученика </Button>
        <Button className={styles.setting} icon={<Icon kind="Setting" size="s" />} />
      </PageHeader>
      <Form onFinish={() => console.log('finish!')} onFinishFailed={() => console.log('finish failed!')}>
        <Form.Item label="test" name="test" rules={[{ required: true, message: 'Test validation!' }]}>
          <Input placeholder="123"></Input>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Тестовая кнопка
        </Button>
      </Form>
      <Table
        columns={[
          { title: 'Age', dataIndex: 'age', key: 'age' },
          { title: 'Address', dataIndex: 'address', key: 'address' },
        ]}
        dataSource={[
          { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'] },
        ]}
      ></Table>
    </PageWrapper>
  );
};

export { MentiList };
