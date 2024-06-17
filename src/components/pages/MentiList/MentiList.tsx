import { FC, useEffect} from 'react';
import styles from './MentiList.module.css';
import { Button } from '../../primitives/Button/Button';
import { Table } from '../../primitives/Table/Table';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';

import { Input } from 'antd';

import type { Menti } from '../../../interfaces/menti.interfaces';
import { Message } from '../../primitives/Message/Message.tsx';


import {mentiListUiState} from './MentiList.ui.state.ts'
import { observer } from 'mobx-react';

const MentiList: FC = observer(() => {
  const {mentiList, loading, error, loadMentiList,columns} = mentiListUiState

  useEffect(()=>{loadMentiList()}, []);
  
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
});

export { MentiList };
