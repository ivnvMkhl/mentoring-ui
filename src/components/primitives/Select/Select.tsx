import { Select as AntdSelect } from 'antd';
import type { SelectProps } from 'antd/lib';
import { BaseOptionType } from 'antd/es/select';
import { DefaultOptionType } from 'antd/es/cascader';

const Select = <ValueType, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(
  props: SelectProps<ValueType, OptionType>,
) => {
  return <AntdSelect<ValueType, OptionType> {...props}></AntdSelect>;
};

export { Select };
