import NotificationConfig from './notification.interfaces.ts';

const DEFAULT_DURATION = 15;
const DEFAULT_PLACEMENT = 'bottomRight';

const DefaultConfig: Partial<NotificationConfig> = {
  placement: DEFAULT_PLACEMENT,
  duration: DEFAULT_DURATION,
} as const;

export default DefaultConfig;
