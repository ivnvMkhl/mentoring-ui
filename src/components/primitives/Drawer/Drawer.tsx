import { FC } from 'react';

import { Drawer as AntdDrawer } from 'antd';
import type { DrawerProps } from 'antd/lib';

const Drawer: FC<DrawerProps> = ({ placement, ...props }: DrawerProps) => {
  return <AntdDrawer {...props} placement={placement ? placement : 'right'}></AntdDrawer>;
};
export { Drawer };
