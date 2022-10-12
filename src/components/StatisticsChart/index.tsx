import React from 'react';
import { IPokemonStats } from '@/models/states.model';

interface Props {
  stats: IPokemonStats;
}

const StatisticsChart = ({ stats }: Props) => {
  console.log(stats);

  return (
    <div className="w-full">
      {Object.values(stats).map((item) => (
        <div className="flex">
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatisticsChart;
