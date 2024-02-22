import { FC, JSX } from 'react';
import { IRegistrationFormField } from '@/types';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { Button, Form, Input } from 'antd';

interface IRegistrationFormProps {
  onFinish: (data: IRegistrationFormField) => void;
  onFinishFailed: (errData: ValidateErrorEntity<IRegistrationFormField>) => void;
}

const RegistrationForm: FC<IRegistrationFormProps> = ({onFinish, onFinishFailed}): JSX.Element => {
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
      <Form.Item<IRegistrationFormField>
        label="Имя"
        name="name"
        rules={[{ required: true, message: 'Введите имя!' }]}
      >
        <Input autoComplete={'name'}/>
      </Form.Item>

      <Form.Item<IRegistrationFormField>
        label="Фамилия"
        name="lastName"
        rules={[{ required: true, message: 'Введите фамилию!' }]}
      >
        <Input autoComplete={'name'}/>
      </Form.Item>

      <Form.Item<IRegistrationFormField>
        label="Логин"
        name="username"
        rules={[{ required: true, message: 'Введите логин!' }]}
      >
        <Input autoComplete={'login'}/>
      </Form.Item>

      <Form.Item<IRegistrationFormField>
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Введите пароль!' }]}
      >
        <Input.Password autoComplete={'current-password'}/>
      </Form.Item>

      <Form.Item<IRegistrationFormField>
        label="Подтвердите пароль"
        name="passwordConfirmation"
        rules={[{ required: true, message: 'Подтвердите пароль!' }]}
      >
        <Input.Password autoComplete={'confirm-password'}/>
      </Form.Item>

      <Form.Item label={' '}>
        <Button type="primary"
                htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm;
