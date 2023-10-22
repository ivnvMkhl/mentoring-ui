import React from "react";
import { Button } from "antd";
import type {ButtonProps} from "antd"

const TheButton: React.FC<ButtonProps> = (props) => <Button {...props}></Button>;

export {TheButton};