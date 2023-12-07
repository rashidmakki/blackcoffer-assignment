import React, { useState,useMemo, useEffect} from 'react'
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
  GoToInput,
  PageIndex,
  PageNavigatorButton,
  PageButtonContainer
} from './table'

export interface ITableComponent{
    data:any,
    isLoading:boolean
}
function TableComponent({data, isLoading}:ITableComponent) {
    console.log("Table", data)
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
    <div style={{width:'100', display:'flex',justifyContent:'center',alignContent:'center',padding:'1rem 2rem'}}>
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
                       Array.from({length: Math.ceil(data.length / 10)},(i:number,idx:number)=> idx+1).map((i)=>(
                        <option value={i-1}> {i}</option>
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
  )
}

export default TableComponent;
