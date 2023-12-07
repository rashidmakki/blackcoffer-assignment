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
function Dashboard() {
  const [dataList, setDataList] = useState<Array<IData>>([])
  const [isLoading,setLoading] = useState<boolean>(false)

  const fetchData = async (url:string):Promise<Array<IData>> =>{
    const response:any= await fetch(url)
    const data:Array<IData> = await response.json()
    return data
  }

  useEffect(()=>{
    setLoading(true)
    fetchData("http://localhost:3000/data")
    .then((data:any)=> setDataList(data.data))
    .catch((err:any)=> console.log(err.message) )
    setLoading(false)
  },[])
  
  return (
    <>
    <Linechart data={dataList} />
    <TableComponent data={dataList} isLoading={isLoading}/>
    </>
    
  )
}

export default Dashboard