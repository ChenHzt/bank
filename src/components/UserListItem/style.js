import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    color:black;
    text-decoration:none;
    padding: 10px;
    display:flex;
    flex-direction:row;
    background-color:#D3D3D3;
    margin:10px;
    width:100%;
    border-radius:5px;
`

export const Name = styled.p`
    font-size:1.25rem;
    font-weight:bold;
`