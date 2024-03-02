import { FC, JSX } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { IBeforeTrainingForm } from '@/types';

interface IPlayerBeforeTrainingModalProps {
  onFinish: (e: IBeforeTrainingForm) => void;
}

const PlayerBeforeTrainingModal: FC<IPlayerBeforeTrainingModalProps> = ({ onFinish }): JSX.Element => {

  const [form] = useForm();

  return (
    <Form form={form}
          style={{ maxWidth: 600, marginInline: 'auto' }}
          layout="vertical"
          onFinish={onFinish}>
      <Form.Item<IBeforeTrainingForm> name={'frontRightHip'}
                                      label={'Передняя правая поверхность бедра'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'frontLeftHip'}
                                      label={'Передняя левая поверхность бедра'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'rearRightHip'}
                                      label={'Задняя правая поверхность бедра'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'rearLeftHip'}
                                      label={'Задняя левая поверхность бедра'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'rightAdductor'}
                                      label={'Правая приводящая мышца'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'leftAdductor'}
                                      label={'Левая приводящая мышца'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'rightGroin'}
                                      label={'Правая паховая область'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'leftGroin'}
                                      label={'Левая паховая область'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'rightCalf'}
                                      label={'Правая икроножная мышца'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'leftCalf'}
                                      label={'Левая икроножная мышца'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'fatigue'}
                                      label={'Усталость'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'dreamQuality'}
                                      label={'Качество сна'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'musclePain'}
                                      label={'Боль в мышцах'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'stress'}
                                      label={'Уровень стресса'}>
        <Radio.Group>
          {Array.from({ length: 6 }, (_, idx) => (
            <Radio.Button value={idx}
                          key={idx}>{idx}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item<IBeforeTrainingForm> name={'comments'}
                                      label={'Комментарий'}>
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
export default PlayerBeforeTrainingModal;
