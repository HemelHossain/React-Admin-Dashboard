import React, { useContext } from 'react';
import { Chart } from "react-google-charts";
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const GeoCharts = () => {
  const {darkMode} = useContext(AuthContext);
    const data = [
        ["Country", "Popularity"],
        ["Germany", 200],
        ["United States", 300],
        ["Bangladesh", 500],
        ["New Zealand", 400],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
      ];
      const chartOptions = {
        backgroundColor: darkMode ? "#1F2937" : "#fff",
        textColor: darkMode ? "#fff" : "#000"
      };
    return (
        <div className={`box-shadow w-[100%] dark:shadow-none mx-auto md:mt-0 mt-6`}>
            <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={chartOptions}
    />
        </div>
    );
};

export default GeoCharts;