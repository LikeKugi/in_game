import { JSX } from 'react';
import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { ILoginFormField, IRegistrationFormField } from '@/types';
import { setErrorMessage } from '@/store/slices/ErrorSlice';
import { useAppDispatch } from '@/store/hooks';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RoutesPath } from '@/routes';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import { useLazyGetUserShortBioQuery, useLoginUserMutation, useRegisterUserMutation } from '@/api';

const err = 'Ошибка регистрации';

const RegistrationPage = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const [registerUser] = useRegisterUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [getUserShortBio] = useLazyGetUserShortBioQuery();


  const onFinish = (values: IRegistrationFormField) => {
    console.log('Success:', values);
    if (values.username && values.password && values.passwordConfirmation && values.name && values.lastName) {
      registerUser({
        username: values.username,
        name: values.name,
        lastName: values.lastName,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      }).then(data => {
        if ('data' in data) {
          loginUser({
            username: data.data.username,
            password: values.password as string,
          }).then((data) => {
            if ('data' in data) {
              getUserShortBio({
                userId: data.data.id,
                userToken: data.data.accessToken,
              });
            }
          }).catch(() => {
          });
        }
      }).catch(() => {
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
      <Typography.Title>Регистрация</Typography.Title>
      <RegistrationForm onFinish={onFinish}
                        onFinishFailed={onFinishFailed}/>
      <Link to={RoutesPath.LOGIN.path}>{RoutesPath.LOGIN.description}</Link>
    </div>
  );
};
export default RegistrationPage;
