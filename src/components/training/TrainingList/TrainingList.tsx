import { FC, JSX } from 'react';
import { ITraining } from '@/types';
import TrainingItem from '@/components/training/TrainingItem/TrainingItem';
import { List } from 'antd';

interface ITrainingListProps {
  trainings: ITraining[]
}

const TrainingList: FC<ITrainingListProps> = ({trainings}): JSX.Element => {
  return (
    <List itemLayout={'vertical'} dataSource={trainings} renderItem={(training) => <TrainingItem key={training.id} training={training} />} />

  );
};
export default TrainingList;
