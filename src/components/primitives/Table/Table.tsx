import { Table as AntdTable } from 'antd';
import type { TableProps } from 'antd';

const Table = <RecordType extends object>(props: TableProps<RecordType>) => (
  <AntdTable<RecordType> {...props}></AntdTable>
);
export { Table };
