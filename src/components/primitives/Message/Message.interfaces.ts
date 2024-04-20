export type Kind = 'error' | 'warning';

export type MessageProps = {
  kind: Kind;
  icon?: JSX.Element;
  color?: string;
  description?: string;
  size?: string;
};
