import React from 'react';
import { Input as AntdInput } from 'antd';
import type { InputProps } from 'antd';
const Input: React.FC<InputProps> = (props: InputProps) => <AntdInput {...props}></AntdInput>;

export { Input };
