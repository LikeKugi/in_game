import { JSX, useEffect } from 'react';
import { message } from 'antd';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { clearErrorMessage, selectErrorMessage } from '@/store/slices/ErrorSlice';

const AppMessage = (): JSX.Element => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useAppDispatch();

  const errorMessage = useAppSelector(selectErrorMessage);

  useEffect(() => {
    const error = () => {
      messageApi.open({
        type: 'error',
        content: errorMessage,
        onClose: () => {
          dispatch(clearErrorMessage());
        }
      });
    };


    if (errorMessage) {
      error();
    }
  }, [dispatch, errorMessage, messageApi]);


  return (
    <>
      {contextHolder}
    </>
  );
};
export default AppMessage;
