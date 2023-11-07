import React from 'react';
import { Button as AntdButton } from 'antd';
import type { ButtonProps } from 'antd';
const Button: React.FC<ButtonProps> = (props) => <AntdButton {...props}></AntdButton>;

export { Button };
