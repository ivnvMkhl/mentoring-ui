import { makeAutoObservable } from "mobx";
import { Menti } from "../../../interfaces/menti.interfaces";
import { apiService } from '../../../services/api/api.service.ts';
import { notification } from '../../../helpers/notification/notification';
import { Key } from "react";
import { ColumnFilterItem, ColumnType } from 'antd/lib/table/interface';



const makeSorting = (key: keyof Menti) => (a: Menti, b: Menti) => String(a[key]).localeCompare(String(b[key]));

const createFilterObjects = (key: keyof Menti, list: Menti[]): ColumnFilterItem[] => {
  if (!list?.length) { return [] }
  const filter:Record<string, ColumnFilterItem> = {};
  const FilterObjectsArray: ColumnFilterItem[] = 
    list?.map((menti) => ({ text: String(menti[key]), value: String(menti[key]) }))
  
  for(const obj of FilterObjectsArray) {
    const objKey = JSON.stringify(obj);
    filter[objKey] = obj;
  }
  return (Object.values(filter));
};

const makeFiltering = (key: keyof Menti) => (value: Key | boolean, record: Menti) =>
  String(record[key]) === (String(value));



class MentiListUiState {

  constructor(){
    makeAutoObservable(this)
  }

  mentiList:Menti[] = [];
  loading = true;
  error = false; 
  filteredMentiList: Menti[] = [];


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
  }

  get columns(): ColumnType<Menti>[]{
    if (!this.mentiList.length) {
      return []
    }
    return [
      {
        title: 'Имя',
        dataIndex: 'Name',
        sorter: makeSorting('Name'),
        sortDirections: ['descend', 'ascend'],
        //TODO Прогнать результат этой функции через словарик для уник.значений
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
    ]
  }

  handleChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    const filteredMentiList = this.mentiList.filter(({ Email, Grade, Name, Location, Phone, Telegram }) =>
      `${Email}${Grade}${Location}${Name}${Phone}${Telegram}`.toLowerCase().includes(searchText.toLowerCase()),
    );
    this.filteredMentiList = filteredMentiList;
  }
  
}

export const mentiListUiState = new MentiListUiState();