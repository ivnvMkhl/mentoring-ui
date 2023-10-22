import React from "react";
import { Table } from "antd";
import type {TableProps} from "antd"

const TheTable: React.FC<TableProps<object>> = (props) => <Table {...props}></Table>;

export {TheTable};