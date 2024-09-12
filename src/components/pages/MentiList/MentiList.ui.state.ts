import { makeAutoObservable } from 'mobx';
import { Menti } from '../../../interfaces/menti.interfaces';
import { apiService } from '../../../services/api/api.service.ts';
import { notification } from '../../../helpers/notification/notification';
import { Key } from 'react';
import { ColumnFilterItem, ColumnType } from 'antd/lib/table/interface';

const makeSorting = (key: keyof Menti) => (a: Menti, b: Menti) => String(a[key]).localeCompare(String(b[key]));

const createFilterObjects = (key: keyof Menti, list: Menti[]): ColumnFilterItem[] =>
  list?.map((menti) => ({ text: String(menti[key]), value: String(menti[key]) }));

const makeFiltering = (key: keyof Menti) => (value: Key | boolean, record: Menti) =>
  String(record[key]).includes(String(value));

class MentiListUiState {
  constructor() {
    makeAutoObservable(this);
  }

  mentiList: Menti[] = [];
  loading = true;
  error = false;
  filteredMentiList: Menti[] = [];
  isAddMentiVisible = false;

  readonly loadMentiList = () => {
    apiService
      .getMentiList()
      .then((data: Menti[]) => {
        this.mentiList = data;
        this.filteredMentiList = data;
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
        notification.error({
          message: 'Ошибка загрузки списка учеников',
          description: 'Попробуйте обновить страницу',
        });
      });
  };

  get columns(): ColumnType<Menti>[] {
    return [
      {
        title: 'Имя',
        dataIndex: 'Name',
        sorter: makeSorting('Name'),
        sortDirections: ['descend', 'ascend'],
        //TODO Выделить map в отдельную ф-цию, а затем прогнать рез-т этой ф-ции через словарик для уник.значений
        filters: createFilterObjects('Name', this.mentiList),
        filterMultiple: true,
        onFilter: makeFiltering('Name'),
      },
      {
        title: 'Уровень',
        dataIndex: 'Grade',
        sorter: makeSorting('Grade'),
        sortDirections: ['descend', 'ascend'],
        filters: createFilterObjects('Grade', this.mentiList),
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
        filters: createFilterObjects('Location', this.mentiList),
        filterMultiple: true,
        onFilter: makeFiltering('Location'),
      },
      { title: 'Телефон', dataIndex: 'Phone' },
    ];
  }
}

export const mentiListUiState = new MentiListUiState();
