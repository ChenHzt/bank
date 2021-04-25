import styled from "styled-components";

export const Container = styled.div`
    margin: 20px;
    max-width:1000px;
    width:60%;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    // border-radious:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:40px 30px;
    background: rgba(255,255,255,0.8);
`

export const Table = styled.table`
    // width:100%;
    text-align:center;
    margin:30px 0;

`

export const TableHead = styled.th`
    border:1px solid red;
    padding: 0 30px;
`

export const TableColumn = styled.td`
    border:1px solid red;
    padding: 0 30px;
`

export const ButtonsContainer = styled.div`
    width:100%;
    // border: 1px solid black;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
`

export const Button = styled.button`
    width:100%;
    margin:10px;
    padding: 10px 0;
    font-weight:bold;
    border:1px solid black;
    // outline:none;
    border-radius:5px
`
