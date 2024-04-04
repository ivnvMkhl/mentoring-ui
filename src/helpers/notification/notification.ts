import { notification as antdNotification } from 'antd';
import type { ArgsProps } from 'antd/es/notification';

type NotificationConfig = ArgsProps;

const DEFAULT_DURATION = 15;
const DEFAULT_PLACEMENT = 'bottomRight';

const defaultConfig: Partial<NotificationConfig> = {
  placement: DEFAULT_PLACEMENT,
  duration: DEFAULT_DURATION,
};

const makeNotificationConfig = (config: NotificationConfig): NotificationConfig => {
  return { ...defaultConfig, ...config };
};

export const notification = {
  error: (config: NotificationConfig) => {
    antdNotification.error(makeNotificationConfig(config));
  },
  warning: (config: NotificationConfig) => {
    antdNotification.warning(makeNotificationConfig(config));
  },
  info: (config: NotificationConfig) => {
    antdNotification.info(makeNotificationConfig(config));
  },
  success: (config: NotificationConfig) => {
    antdNotification.success(makeNotificationConfig(config));
  },
};
