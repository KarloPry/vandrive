import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineGraph({ chartTitle, chartLabels, chartData, color, bgColor }) {

  console.log(chartTitle);
  console.log(chartLabels);
  console.log(chartData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: chartTitle,
        data: chartData,
        borderColor: color,
        backgroundColor: bgColor,
      }
    ]
  };
  return <Line options={options} data={data} />;
}
