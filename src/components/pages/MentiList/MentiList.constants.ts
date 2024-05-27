import { ColumnType } from 'antd/lib/table';
//import { buildColumn } from '../../primitives/Column/column';
import { Menti } from '../../../interfaces/menti.interfaces';
//import type { ColumnType } from '../../primitives/Column/column.interfaces';

const sorter = (key: keyof Menti) => (a: Menti, b: Menti) => String(a[key]).localeCompare(String(b[key]));

export const columns: ColumnType<Menti>[] = [
  {
    title: 'Имя',
    dataIndex: 'Name',
    sorter: sorter('Name'),
    sortDirections: ['descend', 'ascend'],
    filters: [
      { text: 'Эмир', value: 'Эмир' },
      { text: 'Роман', value: 'Роман' },
      { text: 'Михаил', value: 'Михаил' },
      { text: 'Евгений', value: 'Евгений' },
    ],
    filterMultiple: true,
    //onFilter: (value: string, record: Menti) => record.Name.indexOf(value) == 0,
  },
  {
    title: 'Уровень',
    dataIndex: 'Grade',

    sorter: (a: Menti, b: Menti) => String(a.Grade).localeCompare(String(b.Grade)),
    sortDirections: ['descend', 'ascend'],
    filters: [
      { text: 'beginner', value: 'beginner' },
      { text: 'pre junior', value: 'pre junior' },
      { text: 'junior', value: 'junior' },
      { text: 'middle', value: 'middle' },
    ],
    filterMultiple: true,
    //onFilter: (value: string, record: Menti) => String(record.Grade) == value,
  },

  {
    title: 'Telegram',
    dataIndex: 'Telegram',

    sorter: (a: Menti, b: Menti) => String(a.Telegram).localeCompare(String(b.Telegram)),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Email',
    dataIndex: 'Email',

    sorter: (a: Menti, b: Menti) => String(a.Email).localeCompare(String(b.Email)),
    sortDirections: ['descend', 'ascend'],
  },

  {
    title: 'Город',
    dataIndex: 'Location',

    sorter: (a: Menti, b: Menti) => String(a.Location).localeCompare(String(b.Location)),
    sortDirections: ['descend', 'ascend'],
    filters: [
      { text: 'Саратов', value: 'Саратов' },
      { text: 'Нижний Новгород', value: 'Нижний Новгород' },
      { text: 'Санкт-Петербург', value: 'Санкт-Петербург' },
      { text: 'Ярославль', value: 'Ярославль' },
    ],
    filterMultiple: true,
    //onFilter: (value: string, record: Menti) => String(record.Location) == value,
    //onFilter: (value: string, record: Menti) => record.Location.includes(value),
  },

  { title: 'Телефон', dataIndex: 'Phone' },
];
