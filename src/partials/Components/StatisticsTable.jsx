import React from 'react';
import css from '../../sass/Module/StatisticsTable.module.css';
import { useSelector } from 'react-redux';
import { selectorIsLoading } from '../../redux/summaryTransactions/selectors';
import Loader from './Loader';

const colors = [
          '#fed057', 
          '#ffd8d0', 
          '#fd9498', 
          '#c5baff',
          '#6e78e8',
          '#4a56e2',
          '#81e1ff',
          ' #24cca7',
          '#00ad84',
];

const StatisticsTable = ({ summary }) => {
  console.log('summary', summary );
  if (!summary || !summary.categoriesSummary) {
    return <div className={css.noData}>No data available</div>;
  }

  const { categoriesSummary, incomeSummary, expenseSummary } = summary;
  const hasTransactions = categoriesSummary.length > 0;
  const isLoading = useSelector(selectorIsLoading);
  
  return (
    <div className={css.statisticsTable}>
      {
        isLoading? <Loader/>:
        (
          <>
          {hasTransactions ? (
            <>
              <table className={css.table}>
                <thead>
                  <tr className={`${css.container} ${css.containerCol}`}>
                    <th className={css.col}>Category</th>
                    <th className={css.col}>Sum</th>
                  </tr>
                </thead>
                <tbody>
                  {categoriesSummary.map((category, index) => (
                    <tr key={index} className={`${css.container} ${css.containerRow}`}>
                      <td className={css.row}>
                        <div 
                          className={css.colorBox} 
                          style={{ backgroundColor: colors[index % colors.length] }}
                        ></div>
                        {category.name}
                      </td>
                      <td className={css.row}>{category.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={`${css.container} ${css.containerTypesExpenses} ${css.containerStyle}`}>
                <span>Income</span>
                <span className={css[incomeSummary >= 0 ? 'income' : 'expense']}>{incomeSummary}</span>
              </div>
              <div className={`${css.container} ${css.containerStyle}`}>
                <span>Expense</span>
                <span className={css[expenseSummary >= 0 ? 'income' : 'expense']}>{expenseSummary}</span>
              </div>
            </>
          ) : (
            <div className={css.noTransactions}>
              You don't have any transactions in this period.
            </div>
          )}
          </>
        )
      }
    </div>
  );
};

export default StatisticsTable;
