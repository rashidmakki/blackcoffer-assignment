import React from 'react'

export interface ISelect{
    name:string,
    value:string,
    optionList:Array<any>,
    onChange:(e:any) => void
}

function Select({name, value, optionList, onChange}:ISelect) {
  return (
    <select  style={{"fontWeight": 500, width:'100px'}} name={name} value={value} onChange={onChange}>
        {
         optionList.map((i:string,idx:number)=>(
            <option key={idx} value={i}> {i.charAt(0).toUpperCase()+i.slice(1)}</option>
            ))
        }
    </select>
  )
}

export default Select