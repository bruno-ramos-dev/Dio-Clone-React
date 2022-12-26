import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 2px;

    &:hover {
        border-bottom: 1px solid #8647AD;
    }
`

export const IconContainer = styled.div`
    margin-right: 10px;
`

export const InputText = styled.input`

    &,
    &:active, 
    &:hover, 
    &:focus {
        background: transparent;
        color: #FFFFFF;
        width: 100%;
        border: 0;
        height: 30px;

        border: 1px solid transparent;
        outline: 1px solid transparent;
        
        -webkit-text-fill-color: #FFFFFF;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-box-shadow: 0 0 0px 1000px #1E192C inset;
        box-shadow: 0 0 0px 1000px #1E192C inset;
        border: 1px solid #1E192C;
    }
`

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin: 5px 0;
`