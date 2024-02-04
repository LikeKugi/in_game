import { JSX } from 'react';
import LoginForm from '@/components/LoginForm/LoginForm';
import { ILoginFormField } from '@/types';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { useAppDispatch } from '@/store/hooks';
import { setErrorMessage } from '@/store/slices/ErrorSlice';
import { useLoginUserMutation } from '@/api';

const err = 'Неверный Логин или Пароль'

const LoginPage = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const [loginUser] = useLoginUserMutation();

  const onFinish = (values: ILoginFormField) => {
    console.log('Success:', values);
    if (values.username && values.password) {
      loginUser({
        username: values.username,
        password: values.password,
      })
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ILoginFormField>) => {
    console.log('Failed:', errorInfo);
    dispatch(setErrorMessage(err));
  };

  return (
    <div style={{minHeight: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
    </div>
  );
};
export default LoginPage;
