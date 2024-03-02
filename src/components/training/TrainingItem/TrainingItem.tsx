import { FC, JSX } from 'react';
import { ITraining } from '@/types';
import { Button, List } from 'antd';
import TrainingDescription from '@/components/training/TrainingDescription/TrainingDescription';
import { RoutesPath } from '@/routes';
import { useNavigate } from 'react-router-dom';

interface ITrainingItemProps {
  training: ITraining;
}

const TrainingItem: FC<ITrainingItemProps> = ({ training }): JSX.Element => {
  const navigate = useNavigate();
  return (
    <List.Item actions={[
      <Button onClick={() => navigate(`${RoutesPath.PLAYER_BIO.path}${RoutesPath.PLAYER_TRAINING.path}/${training.id}/${RoutesPath.PLAYER_BEFORE_TRAINING.path}`)}>Состояние
        до тренировки</Button>,
      <Button onClick={() => navigate(`${RoutesPath.PLAYER_BIO.path}${RoutesPath.PLAYER_TRAINING.path}/${training.id}/${RoutesPath.PLAYER_AFTER_TRAINING.path}`)}>Состояние после тренировки</Button>]}>
      <List.Item.Meta title={'Тренировка'}
                      description={<TrainingDescription training={training}/>}/>
    </List.Item>
  );
};
export default TrainingItem;
