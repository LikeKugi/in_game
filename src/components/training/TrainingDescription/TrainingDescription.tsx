import { FC, JSX } from 'react';
import { Descriptions } from 'antd';
import { ITraining } from '@/types';

interface ITrainingDescriptionProps {
  training: ITraining;
}

const TrainingDescription: FC<ITrainingDescriptionProps> = ({training}): JSX.Element => {
  return (
    <Descriptions title={training.description}>
      <Descriptions.Item label={'Команда'}>{training.teamName}</Descriptions.Item>
      <Descriptions.Item label={'Дата'}>{training.scheduledAt}</Descriptions.Item>
    </Descriptions>
  );
};
export default TrainingDescription;
