import React, { useEffect, useState } from 'react'
import TableComponent from "../table/table.tsx";
import Linechart from '../linechart/linechart.tsx';

export interface IData{
  end_year: string,
  intensity: number,
  sector: string,
  topic: string,
  insight: string,
  url: string,
  region: string,
  start_year: string,
  impact: string,
  added: string,
  published: string,
  country: string,
  relevance: number,
  pestle: string,
  source: string,
  title: string,
  likelihood: number
}

export interface Response{
  data:Array<IData>,
  status:number
}

export interface IParams{
  [key : string]: string
}
function Dashboard() {
  const [dataList, setDataList] = useState<Array<IData>>([])
  const [dataForOptions, setDataForOptions] = useState<Array<IData>>([])
  const [isLoading,setLoading] = useState<boolean>(false)
  const [updated, setIsUpdated]  = useState<boolean>(true)

  const fetchData = async (url:string):Promise<Array<IData>> =>{
    const response:any= await fetch(url)
    const data:Array<IData> = await response.json()
    return data
  }
  
  const getData = (params:IParams) => {
    let query = Object.keys(params as object)
      .map((k:string) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    let url = 'http://localhost:3000/data?' + query;
    setLoading(true)
    fetchData(url)
    .then((data:any)=> setDataList(data.data))
    .catch((err:any)=> console.log(err.message) )
    setLoading(false)
  }

  useEffect(()=>{
    getData({})
  },[])

  useEffect(()=>{
    if(dataList.length !== dataForOptions.length && updated){
      setDataForOptions(dataList)
      setIsUpdated(false)
    }
  },[dataList])


  return (
    <>
      <Linechart />
      <TableComponent 
        data={dataList} 
        isLoading={isLoading} 
        getData={getData} 
        dataForOptions={dataForOptions}
      />
    </>
    
  )
}

export default Dashboard