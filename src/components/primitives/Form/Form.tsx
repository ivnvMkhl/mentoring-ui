import {
    Form as AntdForm,
    FormInstance as AntdFormInstance,
    FormItemProps as AntdFormItemProps,
    FormProps as AntdFormProps,
} from 'antd';
import { FormProviderProps as AntdFormProviderProps } from 'antd/lib/form/context';
const { Item: AntdItem, Provider: AntdProvider, useForm: AntdUseForm } = AntdForm;

type FormProps = AntdFormProps;
type FormItemProps = AntdFormItemProps;
type FormProviderProps = AntdFormProviderProps;
type FormInstance<Values> = AntdFormInstance<Values>;

type FormExtensions = {
    Item: typeof Item;
    Provider: typeof Provider;
    useForm: typeof useForm;
};

const Item: React.FC<FormItemProps> = ({ children, ...props }) => {
    return <AntdItem {...props}>{children}</AntdItem>;
};
function useForm<Values>(form?: FormInstance<Values>): [FormInstance<Values>] {
    return AntdUseForm<Values>(form);
}
const Provider: React.FC<FormProviderProps> = ({ children, ...props }) => {
    return <AntdProvider {...props}>{children}</AntdProvider>;
};
const Form: React.FC<FormProps> & FormExtensions = ({ ...restProps }) => {
        const {children} = restProps;
        return <AntdForm {...restProps}> {children as React.ReactNode} </AntdForm>;
};

Form.Item = Item;
Form.Provider = Provider;
Form.useForm = useForm;

export { Form };
export type { FormInstance, FormItemProps, FormProps, FormProviderProps };
