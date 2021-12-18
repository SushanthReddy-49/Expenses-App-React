import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint=>dataPoint.value)
    // const totalMaximum = Math.max(...dataPointValues)
    const totalSum = dataPointValues.reduce((partial_sum, a)=>partial_sum+a,0);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalSum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
