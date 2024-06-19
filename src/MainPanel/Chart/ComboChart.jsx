import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  BarElement,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './ComboChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  Legend,
  Title,
  Tooltip
);
const months=['Month','January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']
const initialData = {
  labels: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  datasets: [
    {
      type: 'bar',
      label: 'Received',
      data: [4000, 3000, 2000, 1000, 1500, 2500, 3000, 3500, 2000, 1500, 1000, 500],
      backgroundColor: '#277ACC',
      borderColor: '#277ACC',
      borderRadius:4,
      borderWidth: 1,
      datalabels: {
        anchor: 'end',
        align: 'start',
        color: 'black',
        font: {
          size: 12,
          weight: 'bold',
        },
      },
    },
    {
      type: 'line',
      label: 'Processed',
      data:[1000, 2000, 3000, 2500, 3000, 3500, 4000, 3000, 2500, 2000, 1500, 1000],
      backgroundColor: '#002B55BD)',
      borderColor: '#002B55BD',
      borderWidth: 2,
      datalabels: {
        anchor: 'start',
        align: 'end',
        color: 'black',
        font: {
          size: 12,
          weight: 'bold',
        },
      },
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
          weight: 'bold',
        },
        color: '#002B55BD',
      },
    },
  
    tooltip: {
      titleFont: {
        size: 14,
        weight: 'bold',
      },
      bodyFont: {
        size: 12,
      },
      footerFont: {
        size: 10,
        style: 'italic',
      },
      callbacks: {
        labelTextColor: function (context) {
          return '#543453';
        },
      },
    },
  },
  
};

function ComboChart () {
  const [data, setData] = useState(initialData);

  const handleSelectChange = (event) => {
    const selectedMonthIndex = parseInt(event.target.value);
    const filteredData = {
      ...initialData,
      labels: initialData.labels.filter((_, index) => index < selectedMonthIndex),
      datasets: initialData.datasets.map((dataset) => ({
        ...dataset,
        data: dataset.data.slice(0, selectedMonthIndex),
      })),
    };
    setData(filteredData);
  };

  return (
    <div className="chart-container">

      <div className="select-container pb-3">
        <div className='heading'>Application's Info</div>
        <select id="monthSelect" onChange={handleSelectChange} className="month-select">
          {months.map((month, index) => (
            <option key={index} value={index + 1}>
              {month}
            </option>
          ))}
        </select>
      </div>
    
      <Bar data={data} options={options} height={400}
        width={1000} />
    </div>
  );
};

export default ComboChart;
