import { useState,useMemo, useEffect} from 'react'
import { useTable, useSortBy, usePagination} from "react-table"
import  WithSpinner from "../spinner/spinner.tsx"
import {
  TabContentContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  PageNavigationWrapper,
  PageDetailsContainer,
  PageIndex,
  PageNavigatorButton,
  PageButtonContainer
} from './table'
import { IData } from '../dashboard/dashboard.tsx'
import Select from '../select/select.tsx'

export interface ITableComponent{
    data:any,
    dataForOptions:any,
    isLoading:boolean,
    getData:(e:any)=>void
}
function TableComponent({data, isLoading,dataForOptions ,getData}:ITableComponent) {
  const [filterData, setFilterData] = useState({
    country:"",
    region:"",
    sector:"",
    pestle:"",
    source:"",
    topic:""
  })
  const countryList = [...new Set( dataForOptions.map((d:IData)=>d.country))]
  const regionList = [...new Set( dataForOptions.map((d:IData)=>d.region))]
  const sectorList =  [...new Set( dataForOptions.map((d:IData)=>d.sector))] 
  const pestleList = [...new Set( dataForOptions.map((d:IData)=>d.pestle))]
  const sourceList =  [...new Set( dataForOptions.map((d:IData)=>d.source)),""]
  const topicList = [...new Set( dataForOptions.map((d:IData)=>d.topic))]
  const { country, region, sector, pestle, source, topic } = filterData

  useEffect(()=>{
    if(filterData)
    getData(filterData)
  },[filterData])

  const onChange = (e:any )=> {
    const { value, name} = e.target
    setFilterData({...filterData, [name]:value})
  }

  const requiredColumnsName={ 
  "region": "region",
  "country": "country",
  "sector": "sector",
  "intensity":  "intensity",
  "relevance": "relevance",
  "likelihood": "likelihood",
  "topic": "topic",
  "impact": "impact",
  "pestle": "Political",
  "source":"source",
  "start_year":"start_year",
  "end_year": "end_year",
 }
  const creatorColumns:any= useMemo(() =>data[0] ? Object.keys(requiredColumnsName).map((key)=>{
    if(key==="profilePic"){
     
    }else{
      return {Header:key.replace("_"," ").charAt(0).toUpperCase()+key.replace("_"," ").slice(1), accessor:key.replace("_"," ")};
    }
  }):[],[data]);
   
  const tableInstance =useTable({columns:creatorColumns,data:data},useSortBy,usePagination);
  const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage,canNextPage, canPreviousPage, pageOptions,gotoPage,pageCount,setPageSize, state, prepareRow }:any = tableInstance;
  const { pageIndex, pageSize } = state;

  return (
    <div style={{width:'100%', display:'flex', alignItems:'flex-start',justifyContent:"center"}}>
     
      <div style={{width:'100$', display:'flex',justifyContent:'center',alignContent:'center',padding:'1rem 2rem', flexDirection:"column"}}>
        <div style={{ width:"100%", display:'flex',justifyContent:'center', alignContent:'center', gap:"1rem", padding:'0.4rem 0.8rem', margin:"1rem 0rem"}}>
          <span style={{fontWeight:"bold", fontSize:"1rem"}}> Filter By Properties </span>
          <span>
           <label> By Country: </label><Select name="country" value={country} optionList={countryList} onChange={onChange} />
          </span>
          <span>
          <label> By Region: </label> <Select name="region" value={region} optionList={regionList} onChange={onChange} />
          </span>
          <span>
          <label> By Sector: </label> <Select name="sector" value={sector} optionList={sectorList} onChange={onChange} />
          </span>
          <span>
          <label> By Pestle: </label> <Select name="pestle" value={pestle} optionList={pestleList} onChange={onChange} />
          </span>
          <span>
          <label> By Source: </label> <Select name="source" value={source} optionList={sourceList} onChange={onChange} />
          </span>
          <span>
          <label> By Topic: </label> <Select name="topic" value={topic} optionList={topicList} onChange={onChange} />
          </span>
        </div>
      <WithSpinner isLoading={isLoading}>
        {
        data.length > 0 ?
          <TabContentContainer>
            <Table {...getTableProps()}>
              <TableHead>
                  {headerGroups.map((headerGroup:any)=>(
                      <TableRow {...headerGroup.getHeaderGroupProps()}>
                          {headerGroup.headers.map((column:any)=>(
                              <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())}>
                              {
                                  column.render("Header")
                              }
                              {column.isSorted ? ( column.isSortedDesc ? "▼" : "▲"  ) : "" }  
                              </TableHeader>
                          ))}
                      </TableRow>
                  ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map((row:any)=>{
                  prepareRow(row);
                  return <TableRow {...row.getRowProps()}>
                    {
                      row.cells.map((cell:any,idx:any)=>(
                      <TableData {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </TableData>
                    ))}
                  </TableRow>
                })}
              </TableBody>
            </Table>
            <PageNavigationWrapper>
            <PageDetailsContainer>
                  Go To Page:{' '}
                  <select onChange={(e)=>gotoPage(e.target.value) }>
                      {
                        Array.from({length: Math.ceil(data.length / 10)},(i:number,idx:number)=> idx+1).map((i,idx)=>(
                          <option key={idx} value={i-1}> {i}</option>
                        ))
                      }
                  </select>
              </PageDetailsContainer>
              <PageDetailsContainer>
                Page{' '}
                <PageIndex>
                  {Number(pageIndex) + 1} of {pageOptions.length}
                </PageIndex>{' '}
              </PageDetailsContainer>
              <PageButtonContainer>
                  <PageNavigatorButton type="button" onClick={()=> gotoPage(0)} disabled = {!canPreviousPage}> {'<<'}</PageNavigatorButton>
                  <PageNavigatorButton type="button" onClick={previousPage} disabled = {!canPreviousPage}> Prev</PageNavigatorButton>
                  <PageNavigatorButton  type="button" onClick={nextPage} disabled = {!canNextPage}> Next</PageNavigatorButton>
                  <PageNavigatorButton type="button" onClick={()=> gotoPage(pageCount-1)} disabled = {!canNextPage}> {'>>'}</PageNavigatorButton>
              </PageButtonContainer>
            </PageNavigationWrapper>
          </TabContentContainer>
          : 
          <PageNavigationWrapper className="notFound">
          <PageDetailsContainer>
              <PageIndex>
              No Data Found
              </PageIndex>
            </PageDetailsContainer>
          </PageNavigationWrapper>
        }
        </WithSpinner>
      </div>
    </div>
  )
}

export default TableComponent;
