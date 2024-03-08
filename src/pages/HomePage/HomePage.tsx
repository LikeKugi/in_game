import { JSX } from 'react';
import image from '@/assets/hero/undraw_fitness_stats_sht6.svg'
import { Space, Typography } from 'antd';

const HomePage = (): JSX.Element => {
  return (
    <Space direction="horizontal" size={64}>
      <img src={image} alt={'365 in Game'}/>
      <Typography.Title>
        365 In Game
      </Typography.Title>
    </Space>
  );
};
export default HomePage;
