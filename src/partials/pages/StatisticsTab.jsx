import React, { useEffect, useMemo } from "react";
import css from '../../sass/Module/StatisticsTab.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectorSummaryTr } from "../../redux/summaryTransactions/selectors";
import { getTransactionsSummary } from "../../redux/summaryTransactions/operations";
import StatisticsDashboard from "../Components/StatisticsDashboard";
import StatisticsTable from "../Components/StatisticsTable";
import Chart from "../Components/Chart";

const StatisticsTab = () => {
  const transactionsSummary = useSelector(selectorSummaryTr);
  const dispatch = useDispatch();

  const { currentMonth, currentYear } = useMemo(() => {
    const currentDate = new Date();
    return {
      currentMonth: currentDate.getMonth() + 1,
      currentYear: currentDate.getFullYear()
    };
  }, []);

  useEffect(() => {
    dispatch(getTransactionsSummary({ month: currentMonth, year: currentYear }));
  }, [dispatch, currentMonth, currentYear]);


  return (
    <div className={css.statisticsTab}>
      <h3 className={css.title}>Statistics</h3>
      <div className={css.statistics}>
      {transactionsSummary&& <Chart summary={transactionsSummary}/>}
      <div className={css.data}>
      <StatisticsDashboard />
      <StatisticsTable summary={transactionsSummary} />
      </div>
      </div>
    </div>
  );
};

export default StatisticsTab;
