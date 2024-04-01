import { FC, useState, useEffect } from 'react';
import styles from './MentiList.module.css';
import { Button } from '../../primitives/Button/Button';
import { Table } from '../../primitives/Table/Table';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';
import { notification } from '../../../helpers/notification/notification';

type Student = {
  id: string;
  created_time: string;
  last_edited_time: string;
  relations: string[];
  ID: number;
  Grade: string;
  Email: string;
  Telegram: string;
  Location: string[];
  Phone: string;
  Name: string;
};

const MentiList: FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://imkhl-mentoring-1.glitch.me/menti111')
      .then((response) => response.json())
      .catch(() => {
        setLoading(false);
        notification.error({
          message: 'Ошибка загрузки списка учеников',
          description: 'Попробуйте обновить страницу',
        });
      })
      .then((data: Student[]) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="Список учеников" onBackClick={() => undefined}>
        <Button> Добавить ученика </Button>
        <Button className={styles.setting} icon={<Icon kind="Setting" size="s" />} />
      </PageHeader>
      <Table
        columns={[
          { title: 'Имя', dataIndex: 'Name', key: 'Name' },
          { title: 'Уровень', dataIndex: 'Grade', key: 'Grade' },
          { title: 'Telegram', dataIndex: 'Telegram', key: 'Telegram' },
          { title: 'Email', dataIndex: 'Email', key: 'Email' },
          { title: 'Город', dataIndex: 'Location', key: 'Location' },
          { title: 'Телефон', dataIndex: 'Phone', key: 'Phone' },
        ]}
        dataSource={students}
        loading={loading}
      ></Table>
    </PageWrapper>
  );
};

export { MentiList };
