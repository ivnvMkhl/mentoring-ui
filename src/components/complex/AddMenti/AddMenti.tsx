import { FC } from 'react';

import { Form } from '../../primitives/Form/Form';
import { Input, TextArea } from '../../primitives/Input/Input';
import { Button } from '../../primitives/Button/Button';
import { Icon } from '../../primitives/Icon/Icon';
import { Select } from '../../primitives/Select/Select';
import { addMentiColumns } from './AddMenti.constants';
import styles from './AddMenti.module.css';

type AddMentiProps = {
  labelCol?: number;
  wrapperCol?: number;
};

const AddMenti: FC<AddMentiProps> = ({ labelCol = 6, wrapperCol = 18 }) => {
  return (
    <Form name="addMentiForm" labelCol={{ span: labelCol }} wrapperCol={{ span: wrapperCol }}>
      {addMentiColumns.map((column) => {
        return (
          <Form.Item
            label={column.title}
            name={column.dataIndex}
            rules={[{ required: column.required, message: column.message ? column.message : '' }]}
            key={column.dataIndex}
          >
            <Input />
          </Form.Item>
        );
      })}
      <Form.Item label="Выбор цвета">
        <Select
          options={[
            { value: '', label: '' },
            { value: 'color1', label: <div className={`${styles.mentiSelect} ${styles.greenMenti}`}>&ensp;</div> },
            { value: 'color2', label: <div className={`${styles.mentiSelect} ${styles.blueMenti}`}>&ensp;</div> },
            { value: 'color3', label: <div className={`${styles.mentiSelect} ${styles.orangeMenti}`}>&ensp;</div> },
          ]}
        ></Select>
      </Form.Item>
      <Form.Item label="Комментарий">
        <TextArea
          rows={4}
          maxLength={200}
          style={{ resize: 'none' }}
          placeholder="максимальная длина комментария 200 символов"
        />
      </Form.Item>
      <div className={styles.wrapperButton}>
        <Button type="primary" icon={<Icon kind="Save" size="m" />} style={{ display: 'flex' }}>
          Cохранить
        </Button>
      </div>
    </Form>
  );
};

export { AddMenti };
