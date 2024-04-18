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
import { Message } from '../../primitives/Message/Message.tsx';
//import { CloseCircleTwoTone, WarningTwoTone } from '@ant-design/icons';

const MentiList: FC = () => {
  const [mentiList, setMentiList] = useState<Menti[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://imkhl-mentoring-1.glitch.me/menti1111')
      //TODO: пока запрос написан так до создания api сервиса
      .then((response) => response.json())
      .then((data: Menti[]) => {
        setMentiList(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
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
      <Table
        columns={colums}
        dataSource={mentiList}
        loading={loading}
        locale={{
          emptyText: loading ? ' ' : error ? <Message kind="error" /> : <Message kind="warning" />,
        }}
      ></Table>
    </PageWrapper>
  );
};

export { MentiList };
