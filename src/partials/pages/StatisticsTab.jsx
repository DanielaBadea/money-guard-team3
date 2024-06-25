import React from 'react';
import StatisticsDashboard from '../Components/StatisticsDashboard';
import StatisticsTable from '../Components/StatisticsTable';
import css from '../../sass/Module/StatisticsTab.module.css';
import { Chart } from '../Components/Chart';

const StatisticsTab = () => {
  return (
    <div className={css.statisticsTab}>
      <div className={css.backgroundImageContainer} />
      <div className={css.content}>
        <h1>Statistics</h1>
        <StatisticsDashboard />
        <StatisticsTable />
        <Chart />
      </div>
    </div>
  );
};

export default StatisticsTab;
