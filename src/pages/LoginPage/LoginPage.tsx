import { JSX } from 'react';
import LoginForm from '@/components/LoginForm/LoginForm';
import { ILoginFormField } from '@/types';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { useAppDispatch } from '@/store/hooks';
import { setErrorMessage } from '@/store/slices/ErrorSlice';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import { useLogin } from '@/hooks/useLogin';

const err = 'Неверный Логин или Пароль';

const LoginPage = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const [loginUser] = useLogin();

  const onFinish = (values: ILoginFormField) => {
    console.log('Success:', values);
    if (values.username && values.password) {
      loginUser({
        username: values.username,
        password: values.password,
      });
    }
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<ILoginFormField>) => {
    console.log('Failed:', errorInfo);
    dispatch(setErrorMessage(err));
  };

  return (
    <div style={{
      minHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography.Title>Авторизация</Typography.Title>
      <LoginForm onFinish={onFinish}
                 onFinishFailed={onFinishFailed}/>
      <Link to={RoutesPath.REGISTRATION.path}>{RoutesPath.REGISTRATION.description}</Link>
    </div>
  );
};
export default LoginPage;
