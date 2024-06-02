import { FC, useState, useEffect, useMemo, Key } from 'react';
import styles from './MentiList.module.css';
import { Button } from '../../primitives/Button/Button';
import { Table } from '../../primitives/Table/Table';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';
import { notification } from '../../../helpers/notification/notification';
import { ColumnType } from 'antd/lib/table';
import { ColumnFilterItem } from 'antd/lib/table/interface';
import { Input } from 'antd';

import type { Menti } from '../../../interfaces/menti.interfaces';
import { Message } from '../../primitives/Message/Message.tsx';

const makeSorting = (key: keyof Menti) => (a: Menti, b: Menti) => String(a[key]).localeCompare(String(b[key]));

const createFilterObjects = (key: keyof Menti, list: Menti[]): ColumnFilterItem[] =>
  list?.map((menti) => ({ text: String(menti[key]), value: String(menti[key]) }));

const makeFiltering = (key: keyof Menti) => (value: Key | boolean, record: Menti) =>
  String(record[key]).includes(String(value));

const MentiList: FC = () => {
  const [mentiList, setMentiList] = useState<Menti[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://imkhl-mentoring-1.glitch.me/menti')
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

  const columns = useMemo<ColumnType<Menti>[]>(
    () => [
      {
        title: 'Имя',
        dataIndex: 'Name',
        sorter: makeSorting('Name'),
        sortDirections: ['descend', 'ascend'],
        //TODO Выделить map в отдельную ф-цию, а затем прогнать рез-т этой ф-ции через словарик для уник.значений
        filters: createFilterObjects('Name', mentiList),
        filterMultiple: true,
        onFilter: makeFiltering('Name'),
      },
      {
        title: 'Уровень',
        dataIndex: 'Grade',
        sorter: makeSorting('Grade'),
        sortDirections: ['descend', 'ascend'],
        filters: createFilterObjects('Grade', mentiList),
        filterMultiple: true,
        onFilter: makeFiltering('Grade'),
      },

      {
        title: 'Telegram',
        dataIndex: 'Telegram',
        sorter: makeSorting('Telegram'),
        sortDirections: ['descend', 'ascend'],
      },

      {
        title: 'Email',
        dataIndex: 'Email',
        sorter: makeSorting('Email'),
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Город',
        dataIndex: 'Location',
        sorter: makeSorting('Location'),
        sortDirections: ['descend', 'ascend'],
        filters: createFilterObjects('Location', mentiList),
        filterMultiple: true,
        onFilter: makeFiltering('Location'),
      },
      { title: 'Телефон', dataIndex: 'Phone' },
    ],
    [mentiList],
  );

  return (
    <PageWrapper>
      <PageHeader title="Список учеников">
        <Input.Search disabled className={styles.searcher} placeholder="Поиск" />
        <Button disabled> Добавить ученика </Button>
        <Button disabled className={styles.setting} icon={<Icon kind="Setting" size="s" />} />
      </PageHeader>
      <Table<Menti>
        rowKey={(row) => row.ID}
        columns={columns}
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
