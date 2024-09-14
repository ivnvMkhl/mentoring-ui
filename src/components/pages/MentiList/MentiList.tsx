import { FC, useEffect } from 'react';
import styles from './MentiList.module.css';
import { Button } from '../../primitives/Button/Button';
import { Table } from '../../primitives/Table/Table';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { Icon } from '../../primitives/Icon/Icon';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';

import { Input } from 'antd';

import type { Menti } from '../../../interfaces/menti.interfaces';
import { Message } from '../../primitives/Message/Message.tsx';

import { mentiListUiState } from './MentiList.ui.state.ts';
import { observer } from 'mobx-react';
import { AddMenti } from '../../complex/AddMenti/AddMenti.tsx';
import { Drawer } from '../../primitives/Drawer/Drawer.tsx';

const MentiList: FC = observer(() => {
  const { loading, error, loadMentiList, columns, filteredMentiList, isAddMentiVisible } = mentiListUiState;

  const handleChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    const filteredMentiList = mentiListUiState.mentiList.filter(({ Email, Grade, Name, Location, Phone, Telegram }) =>
      `${Email}${Grade}${Location}${Name}${Phone}${Telegram}`.toLowerCase().includes(searchText.toLowerCase()),
    );
    mentiListUiState.filteredMentiList = filteredMentiList;
  };

  const handleClickAddMenti = () => {
    mentiListUiState.isAddMentiVisible = true;
  };

  const handleCloseDrawer = () => {
    mentiListUiState.isAddMentiVisible = false;
  };

  useEffect(() => {
    loadMentiList();
  }, []);

  return (
    <PageWrapper>
      <PageHeader title="Список учеников">
        <Input.Search className={styles.searcher} placeholder="Поиск" onChange={handleChangeSearchText} />
        <Button onClick={handleClickAddMenti}> Добавить ученика </Button>
        <Button disabled className={styles.setting} icon={<Icon kind="Setting" size="s" />} />
      </PageHeader>
      <Table<Menti>
        rowKey={(row) => row.ID}
        columns={columns}
        dataSource={filteredMentiList}
        loading={loading}
        locale={{
          emptyText: loading ? ' ' : error ? <Message kind="error" /> : <Message kind="warning" />,
        }}
      ></Table>
      <Drawer width={500} title="Укажите информацию об ученике" open={isAddMentiVisible} onClose={handleCloseDrawer}>
        <AddMenti labelCol={6} wrapperCol={18} />
      </Drawer>
    </PageWrapper>
  );
});

export { MentiList };
