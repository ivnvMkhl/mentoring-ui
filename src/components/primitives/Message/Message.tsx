import { Empty as AntdEmpty } from 'antd';
import { CloseCircleTwoTone, WarningTwoTone } from '@ant-design/icons';
import { Kind, MessageProps } from './Message.interfaces';
import styles from './Message.module.css';

const DefaultDescriptions: Record<Kind, string> = {
  error: 'Ошибка при загрузке данных. Просьба повторить чуть позже',
  warning: 'Данные отсутствуют. Просьба повторить чуть позже',
};

const DefaultColors: Record<Kind, string> = {
  error: '#ffaeb5',
  warning: '#ffc258',
};

const DefaultSize: Record<string, string> = { fontSize: '96px' };

export const Message = (props: MessageProps) => {
  const { kind, icon, color, description, size } = props;
  const iconColor = color ? color : DefaultColors[kind];
  const iconSize = size ? { fontSize: size } : DefaultSize;
  const DefaultIcon: Record<Kind, JSX.Element> = {
    error: <CloseCircleTwoTone twoToneColor={iconColor} style={iconSize} />,
    warning: <WarningTwoTone twoToneColor={iconColor} style={iconSize} />,
  };

  const elementDescription = description ? description : DefaultDescriptions[kind];
  const elementIcon = icon ? icon : DefaultIcon[kind];

  return (
    <AntdEmpty
      image={elementIcon}
      description={<span className={styles.description}>{elementDescription}</span>}
    ></AntdEmpty>
  );
};
