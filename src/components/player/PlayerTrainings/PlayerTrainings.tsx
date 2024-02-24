import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectUserTrainings } from '@/store/slices/TrainingsSlice';
import TrainingList from '@/components/training/TrainingList/TrainingList';

const PlayerTrainings = (): JSX.Element => {
  const trainings = useAppSelector(selectUserTrainings);

  return (
    <>
      <TrainingList trainings={trainings} />
    </>
  );
};
export default PlayerTrainings;
