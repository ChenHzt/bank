import {  StyledTable,StyledTh, StyledTd} from './style'

function Table(props) {
    return <StyledTable>
        <thead>
            {props.columns.map(col => <StyledTh>{col}</StyledTh>)}
        </thead>
        <tbody>
            {props.data.map(dataRow => <tr key={dataRow[0]}>
                {dataRow.map(dataCol => <StyledTd>{dataCol}</StyledTd>)}
            </tr> )}
        </tbody>
    </StyledTable>
}

export default Table;
