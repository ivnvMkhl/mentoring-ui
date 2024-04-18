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
  const { kind, color, description, size } = props;
  const iconColor = color ? color : DefaultColors[kind];
  const iconSize = size ? { fontSize: size } : DefaultSize;

  const getIcon = (kind: Kind) => {
    if (kind == 'error') {
      return <CloseCircleTwoTone twoToneColor={iconColor} style={iconSize} />;
    }
    if (kind == 'warning') {
      return <WarningTwoTone twoToneColor={iconColor} style={iconSize} />;
    }
  };

  const elementDescription = (
    <span className={styles.description}>{description ? description : DefaultDescriptions[kind]}</span>
  );

  return <AntdEmpty image={getIcon(kind)} description={elementDescription}></AntdEmpty>;

  //switch (kind) {
  //  case 'error':
  //    icon = <CloseCircleTwoTone twoToneColor={iconColor ? iconColor : DefaultColors[kind]} style={iconSize} />;
  //    return (
  //      <AntdEmpty
  //        image={icon}
  //        description={<span className={styles.description}>{description ? description : DefaultDescriptions:kind]}</span>}
  //      ></AntdEmpty>
  //    );
  //  case 'warning':
  //    icon = <WarningTwoTone twoToneColor={iconColor ? iconColor : DefaultColors[kind]} style={iconSize} />;
  //    return (
  //      <AntdEmpty
  //        image={icon}
  //        description={<span className={styles.description}>{description ? description : DefaultDescriptions:kind]}</span>}
  //      ></AntdEmpty>
  //    );
  //  //default:
  //  //  kind = 'default';
  //}

  // if (kind == 'error') {
  //   return (
  //     <AntdEmpty
  //       image={<CloseCircleTwoTone twoToneColor={iconColor} style={{ fontSize: '96px' }} />}
  //       description={<h1>Ошибка при загрузке данных. Просьба повторить чуть позже</h1>}
  //     ></AntdEmpty>
  //   );
  // }
  // if (kind == 'warning') {
  //   return (
  //     <AntdEmpty
  //       image={<WarningTwoTone twoToneColor={iconColor} style={{ fontSize: '96px' }} />}
  //       description={<h1>Данные отсутствуют. Просьба повторить чуть позже</h1>}
  //     ></AntdEmpty>
  //   );
  // }
};
