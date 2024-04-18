export type Kind = 'error' | 'warning';

export type MessageProps = {
  kind: Kind;
  color?: string;
  description?: string;
  size?: string;
};
