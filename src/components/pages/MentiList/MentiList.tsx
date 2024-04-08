import { FC, useState, useEffect } from 'react';
import styles from './MentiList.module.css';
import { Button } from '../../primitives/Button/Button';
import { Table } from '../../primitives/Table/Table';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';
import { notification } from '../../../helpers/notification/notification';
import { colums } from './MentiList.constants.ts';

import type { Menti } from '../../../interfaces/menti.interfaces';

const MentiList: FC = () => {
  const [mentiList, setMentiList] = useState<Menti[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://imkhl-mentoring-1.glitch.me/menti')
      //TODO: пока запрос написан так до создания api сервиса
      .then((response) => response.json())
      .then((data: Menti[]) => {
        setMentiList(data);
        setLoading(false);
        notification.success({
          message: 'Выполнено',
          description: 'Список учеников загружен успешно',
        });
      })
      .catch(() => {
        setLoading(false);
        notification.error({
          message: 'Ошибка загрузки списка учеников',
          description: 'Попробуйте обновить страницу',
        });
      });
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="Список учеников" onBackClick={() => undefined}>
        <Button> Добавить ученика </Button>
        <Button className={styles.setting} icon={<Icon kind="Setting" size="s" />} />
      </PageHeader>
      <Table columns={colums} dataSource={mentiList} loading={loading}></Table>
    </PageWrapper>
  );
};

export { MentiList };
