import { notification as antdNotification } from 'antd';
import DefaultConfig from './notification.constants.ts';

import type NotificationConfig from './notification.interfaces.ts';

const makeNotificationConfig = (config: NotificationConfig): NotificationConfig => {
  return { ...DefaultConfig, ...config };
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
} as const;
