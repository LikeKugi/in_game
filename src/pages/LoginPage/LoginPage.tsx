import { JSX } from 'react';
import LoginForm from '@/components/LoginForm/LoginForm';
import { ILoginFormField } from '@/types';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';

const LoginPage = (): JSX.Element => {

  const onFinish = (values: ILoginFormField) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ILoginFormField>) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  );
};
export default LoginPage;
