import { FC, useState, useEffect } from 'react';
import styles from './MentiList.module.css';
import { Button } from '../../primitives/Button/Button';
import { Table } from '../../primitives/Table/Table';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';

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
  const [students, setStudents] = useState<Student[]>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetch('https://imkhl-mentoring-1.glitch.me/menti')
      .then((response) => response.json())
      .catch((error) => {
        setError(error);
      })
      .then((data: Student[]) => {
        setStudents(data);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h2>Ошибка при загрузке студентов. Просьба повторить позже.</h2>
      </div>
    );
  }
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
        loading
      ></Table>
    </PageWrapper>
  );
};

export { MentiList };
