import { FC, JSX } from 'react';
import { IAfterTrainingForm } from '@/types';
import { useForm } from 'antd/es/form/Form';
import { Button, Form, Input, Radio } from 'antd';

interface IPlayerAfterTrainingModalProps {
  onFinish: (e: IAfterTrainingForm) => void;
}

const PlayerAfterTrainingModal: FC<IPlayerAfterTrainingModalProps> = ({ onFinish }): JSX.Element => {

  const [form] = useForm<IAfterTrainingForm>();

  return (
    <Form form={form}
          style={{ maxWidth: 600, marginInline: 'auto' }}
          layout="vertical"
          onFinish={onFinish}>
      <Form.Item<IAfterTrainingForm> name={'difficulty'} label={''}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item<IAfterTrainingForm> name={'comments'} label={'Комментарий'}>
        <Input placeholder={'Комментарий'} />
      </Form.Item>

      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Button type="primary"
                htmlType="submit">Отправить</Button>
        <Button type="default"
                danger
                htmlType="reset">Отменить</Button>
      </div>

    </Form>
  );
};
export default PlayerAfterTrainingModal;
