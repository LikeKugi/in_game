import { FC, JSX } from 'react';
import { ITraining } from '@/types';
import { Button, List } from 'antd';
import TrainingDescription from '@/components/training/TrainingDescription/TrainingDescription';

interface ITrainingItemProps {
  training: ITraining;
}

const TrainingItem: FC<ITrainingItemProps> = ({training}): JSX.Element => {
  return (
    <List.Item actions={[<Button>Состояние до тренировки</Button>, <Button>Состояние после тренировки</Button>]}>
      <List.Item.Meta title={'Тренировка'} description={<TrainingDescription training={training} />} />
    </List.Item>
  );
};
export default TrainingItem;
