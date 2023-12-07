import styled from 'styled-components'

// Table 
export const TableContainer=styled.div`
width:100%;
padding: 0 2rem;
`
export const Table=styled.table`
width:100%;
border-radius: 1.2rem;
background: #FFF;
`
export const TableHead=styled.thead`

`
export const TableRow=styled.tr`
text-align: left;
`
export const TableHeader=styled.th`
color: #000;
padding: 1rem 0.4rem;
font-family: Gilroy;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
`
export const TableBody=styled.tbody`
`
export const TableData=styled.td`
border-bottom: 1px solid #656768;
color: #000;
padding: 0.8rem 0.4rem;
font-family: Gilroy;
font-size: 0.8rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const OtherDetailsWrapper=styled.div`

width:20rem;
display:flex;
justify-content:space-evenly;
align-items:center;
gap:1.6rem;
`
export const ViewDetailsButton=styled.button`
color: #F66401;
font-family: Gilroy;
font-size: 1.2rem;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
border:none;
background-color: #FFF;
`

export const TableAcceptButton=styled.button`
border-radius: 8px;
background: #2B9773;
padding:1.2rem 1.6rem;
border: none;
`

export const TableRejectedButton=styled(TableAcceptButton)`
background: #E31C2E;
`
export const DeactivateButton = styled(TableAcceptButton)`
background: #E31C2E;
color:#FFFFFF;
&:hover{
 background-color:#b30000;
}
`
export const ReactivateButton =styled(TableAcceptButton)`
background:#009999;
color:#FFFFFF;
&:hover{
 background-color: #006666;
}
`
export const IconInTable=styled.img`

&.profileImage{
width:4.4rem;
height: 4.4rem;
object-fit: fill;
}

`
export const HeadingImageWrapper = styled.div`
 padding: 1rem 1rem;
`
export const PageNavigationWrapper = styled.div`
width:100%;
padding: 2rem 2rem;
display:grid;
align-items:center;
justify-content:space-between;
grid-auto-flow:column;
gap:2rem;

&.notFound{
justify-content: center;
}

&.showData{
justify-content: end;
}
`
export const PageNavigatorButton=styled.button`
border: none;
font-family: Gilroy;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
background-color: #FFF;
`
export const PageDetailsContainer=styled.span`
font-family: Gilroy;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
`
export const PageButtonContainer = styled(PageDetailsContainer)`
display:flex;
gap:2rem;
`

export const GoToInput = styled.input`
width:5rem;
background: #FFFFFF;
border: 1px solid #E0E0E0;
box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
border-radius: 2px;
`
export const PageIndex=styled.strong`

`
export const SelectDataToShow = styled.select`
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.08);
    border-radius: 2px;
    padding: 1rem 1rem;;
    font-size:1.2rem;
    font-family: Gilroy;
    font-weight:bold;
    font-style: normal;
    line-height: normal; 
`
export const OptionDataToSelect = styled.option`

`

export const TabContentContainer =styled.div`
width: 100%;
`