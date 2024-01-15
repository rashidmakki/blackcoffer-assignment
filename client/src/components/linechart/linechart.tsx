import React,{ useEffect, useState } from 'react'
import Chart from "react-apexcharts";

export interface IIntensityData{
  _id:string,
  intensity: number
}

function Linechart() {
    const [instensityData, setIntensityData] = useState<Array<IIntensityData>>([])
    
    const fetchData = async (url:string):Promise<{data:Array<IIntensityData>, status:string}> =>{
      const response:any= await fetch(url)
      const data:{data:Array<IIntensityData>, status:string} = await response.json()
      return data
    }
    useEffect(()=>{
      fetchData("http://localhost:3000/data/intensities")
      .then((data:{data:Array<IIntensityData>, status:string}) => (setIntensityData(data.data.filter(data => data._id  !== ""))))
      .catch(err=> console.log(err.message))
    },[])

    const state = {
        options: {
          chart: {
            id: "Country"
          },
          xaxis: {
            categories: instensityData.map((data:IIntensityData) => data._id),
            labels:{
              show:true,
              title:{
                text:"Country"
              }
            }
          },
          yaxis:{
            labels:{
              show:true,
              title:{
               text:"Intensity"
              }
            }
          },
          lengend:{
            show:true,
            width: 12,
            height: 12,
            
          },
          noData:{
            text:"No Data Available"
          }
          ,
          title:{
            text:"Average Intensity Based on Country"
          },
          labels:['Country']

        },
        series: [
          {
            name: "Intensity",
            data:  instensityData.map((data:IIntensityData) => Number(data.intensity.toFixed(2)))
          }
        ]
    };
  return (
    <div style={{ width: '80%', height:'600px', padding:"2rem 0rem"}}>
    <Chart
    options={state.options}
    series={state.series}
    type="line"
  />
  </div>
  )
}

export default Linechart