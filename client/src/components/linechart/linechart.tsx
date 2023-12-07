import React from 'react'
import Chart from "react-apexcharts";
import { IData } from '../dashboard/dashboard';

export interface ILineChart{
    data:Array<IData>
}
function Linechart({data}:ILineChart) {
    const state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: data.map((item)=> item.pestle)
          }
        },
        series: [
          {
            name: "series-1",
            data: data.map((item)=> item.intensity)
          }
        ]
    };
  return (
    <div style={{ width: '100%', height:'600px'}}>
    <Chart
    options={state.options}
    series={state.series}
    type="line"
    width="1000"
  />
  </div>
  )
}

export default Linechart