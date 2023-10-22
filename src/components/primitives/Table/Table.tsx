import React from "react";
import { Table as AntdTable } from "antd";
import type {TableProps} from "antd"
const Table: React.FC<TableProps<object>> = (props) => <AntdTable {...props}></AntdTable>;
export {Table};