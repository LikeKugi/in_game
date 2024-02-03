import { FC, JSX } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { ILoginFormField } from '@/types';
import type { ValidateErrorEntity } from 'rc-field-form/es/interface';

interface ILoginFormProps {
  onFinish: (data: ILoginFormField) => void;
  onFinishFailed: (errData: ValidateErrorEntity<ILoginFormField>) => void;
}

const LoginForm: FC<ILoginFormProps> = ({ onFinish, onFinishFailed }): JSX.Element => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
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

      <Form.Item<ILoginFormField>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 0, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
        <Button type="primary"
                htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
