import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Loader from './Loader';
ChartJS.register(ArcElement, Tooltip, Legend);

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const totalExpenses = chart.config.data.totalExpenses || 0;

    ctx.restore();
    ctx.font = '30px "Poppins", sans-serif';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText(`RON ${totalExpenses.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`, centerX, centerY);
    ctx.save();
  }
};

const Chart = ({ summary }) => {
  if (!summary || !summary.categoriesSummary) {
    return <Loader />;
  }

  const categoryTotals = summary.categoriesSummary.reduce((acc, category) => {
    acc[category.name] = category.total;
    return acc;
  }, {});

  const totalExpenses = Object.values(categoryTotals).reduce((acc, amount) => acc + amount, 0);

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#fed057', 
          '#ffd8d0', 
          '#fd9498', 
          '#c5baff',
          '#6e78e8',
          '#4a56e2',
          '#81e1ff',
          ' #24cca7',
          '#00ad84',
        ],
        borderColor: [
          'rgba(0, 191, 255, 1)', 
          'rgba(128, 0, 128, 1)', 
          'rgba(255, 165, 0, 1)', 
        ],
        borderWidth: 1,
      },
    ],
    totalExpenses
  };

  const doughnutLabel = {
    id: "doughnutLabel",
    afterDatasetsDraw(chart, args, plugins) {
      const { ctx, data } = chart;
      const meta = chart.getDatasetMeta(0);
      
      if (meta && meta.data && meta.data.length > 0 && meta.data[0]) {
        const centerX = meta.data[0].x;
        const centerY = meta.data[0].y;

        ctx.font = '15px "Poppins", sans-serif';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.fillText(`RON ${totalExpenses.toFixed(2)}`, centerX, centerY);
        ctx.save();
      }
    }
  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: RON ${tooltipItem.raw.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
          }
        }
      },
      centerText: centerTextPlugin
    }
  };

  return (
    <div>
      <Doughnut 
        data={data} 
        options={options}
        plugins={[doughnutLabel]}
      />
    </div>
  );
}

export default Chart;
