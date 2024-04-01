import { notification as antdNotification } from 'antd';
import type { ArgsProps } from 'antd/es/notification';

type NotificationConfig = ArgsProps;

const DEFAULT_DURATION = 15;
const DEFAULT_PLACEMENT = 'bottomRight';

const defaultConfig: Partial<NotificationConfig> = { placement: DEFAULT_PLACEMENT, duration: DEFAULT_DURATION };

export const notification = {
  error: (config: NotificationConfig) => {
    antdNotification.error({ ...defaultConfig, ...config });
  },
  warning: (config: NotificationConfig) => {
    antdNotification.warning({ ...defaultConfig, ...config });
  },
};

//TODO 1. Добавить другие виды нотификации в notification
//TODO 2. Сделать notification не мутабельным

//TODO 3. Вместо плашки "No Data" при ошибке загрузки учеников
//TODO    вывести блок Empty с описанием, с краным крестом и кнопкой для повторного запроса
//TODO    https://ant.design/components/empty
