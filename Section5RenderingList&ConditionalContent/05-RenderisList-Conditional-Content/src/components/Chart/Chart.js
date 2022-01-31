import React from "react";
import ChartBar from './ChartBar'
import './Chart.css'
const Chart = props => {
  // we want to render the chart bars
  // transform dataPoint from objects into numbers and will return a brand new array of the values
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
  // b/c dataPointValues is an array we use the spread operator to pull out all the array elements 
  // and add them as standalone arugments to the max function
  const totalMax = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => <ChartBar 
      key={dataPoint.label} 
      value={dataPoint.value} 
      maxValue={totalMax} 
      label={dataPoint.label} 
      />)}
    </div>

  )
}

export default Chart