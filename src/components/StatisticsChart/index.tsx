import React, { HTMLAttributes } from 'react';
import { IPokemonStats } from '@/models/states.model';

interface Props extends HTMLAttributes<HTMLElement> {
  stats: IPokemonStats;
}

const StatisticsChart = ({ stats, className, ...divProps }: Props) => {
  return (
    <div className={`w-full flex gap-3 ${className}`} {...divProps}>
      {Object.values(stats).map((item, idx) => (
        <div key={idx} className="w-2/12 h-48">
          <div className=" flex flex-col items-center h-full">
            <div className="relative grow h-full w-full mb-1 bg-white rounded-lg border border-black overflow-hidden">
              <div
                style={{ height: `${(item.value / 255) * 100}%` }}
                className="absolute w-full bg-main bottom-0 right-0 drop-shadow rotate-180 flex justify-center pb-0.5"
              >
                <p className="text-xs text-white rotate-180 font-semibold">{item.value}</p>
              </div>
            </div>
            <p className="text-xs text-center h-8 shrink-0 font-semibold">{`${item.label}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsChart;
