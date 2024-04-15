import { Empty as AntdEmpty } from 'antd';
import { CloseCircleTwoTone, WarningTwoTone } from '@ant-design/icons';
import { emptyType } from './Empty.interfaces';

export const Empty = (props: emptyType) => {
  const { msgType } = props;

  if (msgType == 'error') {
    return (
      <AntdEmpty
        image={<CloseCircleTwoTone twoToneColor="#ffaeb5" style={{ fontSize: '96px' }} />}
        description={<h1>Ошибка при загрузке данных. Просьба повторить чуть позже</h1>}
      ></AntdEmpty>
    );
  }
  if (msgType == 'warning') {
    return (
      <AntdEmpty
        image={<WarningTwoTone twoToneColor="#ffc258" style={{ fontSize: '96px' }} />}
        description={<h1>Данные отсутствуют. Просьба повторить чуть позже</h1>}
      ></AntdEmpty>
    );
  }
};
