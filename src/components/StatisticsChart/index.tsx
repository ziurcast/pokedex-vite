import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { IPokemonStats } from '@/models/states.model';

interface Props {
  stats: IPokemonStats;
}

const StatisticsChart = ({ stats }: Props) => {
  // const data = [
  //   { quarter: 1, earnings: 13000 },
  //   { quarter: 2, earnings: 16500 },
  //   { quarter: 3, earnings: 14250 },
  //   { quarter: 4, earnings: 19000 },
  //   { quarter: 4, earnings: 19000 },
  //   { quarter: 4, earnings: 19000 },
  // ];

  return (
    <div className="w-full">
      {Object.values(stats).map((item, idx) => (
        <div key={idx} className="flex">
          <p>{`${item.label}: ${item.value}`}</p>
        </div>
      ))}
      {/* <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={Array.from(Array(6).keys()).map((key) => key + 1)}
          tickFormat={Object.values(stats).map((item) => item.label)}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          // tickFormat={(x) => `$${x / 1000}k`}
          tickValues={Array.from(Array(10).keys()).map((key) => key + 10)}
        />
        <VictoryBar data={Object.values(stats)} x="value" />
      </VictoryChart> */}
    </div>
  );
};

export default StatisticsChart;
