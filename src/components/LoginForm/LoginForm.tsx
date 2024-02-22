import { FC, JSX } from 'react';
import { Button, Form, Input } from 'antd';
import { ILoginFormField } from '@/types';
import type { ValidateErrorEntity } from 'rc-field-form/es/interface';

interface ILoginFormProps {
  onFinish: (data: ILoginFormField) => void;
  onFinishFailed: (errData: ValidateErrorEntity<ILoginFormField>) => void;
}

const LoginForm: FC<ILoginFormProps> = ({ onFinish, onFinishFailed }): JSX.Element => {
  return (
    <Form
      name="login"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 24 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      colon={false}
    >
      <Form.Item<ILoginFormField>
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Введите логин!' }]}
      >
        <Input autoComplete={'login'}/>
      </Form.Item>

      <Form.Item<ILoginFormField>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Input.Password autoComplete={'current-password'}/>
      </Form.Item>

      <Form.Item label={' '}>
        <Button type="primary"
                htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
