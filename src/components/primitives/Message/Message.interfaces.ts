export type Kind = 'error' | 'warning' | 'info';

export type MessageProps = {
  kind: Kind;
  icon?: JSX.Element;
  color?: string;
  description?: string;
  size?: string;
};
