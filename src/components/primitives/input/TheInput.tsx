import React from "react";
import { Input } from "antd";
import type {InputProps} from "antd"

const TheInput: React.FC<InputProps> = (props: InputProps) => <Input {...props}></Input>;

export {TheInput};