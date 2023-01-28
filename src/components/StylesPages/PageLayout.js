import styled from "styled-components";

export const Container = styled.div `
    padding: 3rem 2rem;
    max-width: 960px;
    margin: 0 auto;
`

export const StyledBox = styled.div `
    height: 250px;
    width: 300px;
    display: block;
    text-align: center;
    margin: 10px 10px;
    cursor: pointer;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;
    overflow: hidden;
`

export const Flexarea = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-item: center;
`

export const CardHeader = styled.div `
    heigh: 85px;
    width: 300px;
    margin-top: 0;
    padding-top : 0;
    border-radius: 15px 15px 0 0;
    background-color: #2a9d8f;
`

export const StyledName = styled.h2`
    font-size: 25px;
    color: #fff;
    padding: 5px;    
`

export const DescriptTxt = styled.div `
    margin: 10px;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 8px 8px 0px;
    color: #2a9d8f;
    height: 120px;
    background-color: rgb(42,157,143,0.1);
    font-size: 15px;
    line-height: 2.2;
`

export const Detail = styled.div `
    margin: 10px;
    color: #2a9d8f
`

export const PetType = styled.div `
    margin: 10px;
    color: #2a9d8f
`

export const IconFilter = styled.div `
    height: 100px;
    border: 1px solid #2a9d8f;
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
`

export const Topic = styled.h1 `
    justify-content: center;
    color: #2a9d8f;
    align-items: center;
`