import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import transactions from '../../helpers/transactionsFacke';
ChartJS.register(ArcElement, Tooltip, Legend);




const categoryTotals = transactions.reduce((acc, transaction) => {
  const { comment, amount } = transaction;
  if (!acc[comment]) {
    acc[comment] = 0;
  }
  acc[comment] += Math.abs(amount); 
  return acc;
}, {});

const totalExpenses = Object.values(categoryTotals).reduce((acc, amount) => acc + amount, 0);

const data = {
  labels: ['Education', 'Self care', 'Products'],
  datasets: [
    {
      data: Object.values(categoryTotals),
      backgroundColor: [
        'rgba(0, 191, 255, 0.2)', 
        'rgba(128, 0, 128, 0.2)', 
        'rgba(255, 165, 0, 0.2)', 
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

const centerTextPlugin = {
  id: 'centerText',
  beforeDraw: function (chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const totalExpenses = chart.config.data.totalExpenses;

    ctx.restore();
    ctx.font = '30px Arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';

    ctx.fillStyle = 'white';
    ctx.fillText(`₴ ${totalExpenses.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`, centerX, centerY);
    ctx.save();
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
          return `${tooltipItem.label}: ₴ ${tooltipItem.raw.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
        }
      }
    },
    centerText: centerTextPlugin
  }
};



export function Chart() {

  const colors = ['rgba(0, 191, 255, 1)', 'rgba(128, 0, 128, 1)', 'rgba(255, 165, 0, 1)'];

  return (
    <div>
      
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default Chart;
