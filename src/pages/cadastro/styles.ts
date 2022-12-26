import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
`

export const Wrapper = styled.div`
    max-width: 300px;
    width: 400px;
    height: 337px;

    margin-right: 100px;


    @media (max-width: 620px) {
        width: 150px;
        height: 76px;
    }

`

export const Column = styled.div`
    flex: 1;

    @media (max-width: 620px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    width: 400px;
    height: 176px;
    
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

    color: #FFFFFF;

    @media (max-width: 620px) {
        width: 150px;
        height: 76px;
        font-size: 15px;
        line-height: 24px;
    }
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 8px;
    line-height: 44px;

    width: 500px;

    @media (max-width: 620px) {
        font-size: 22px;
        margin-bottom: 20px;
        line-height: 24px;
    }
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 35px;
    line-height: 25px;

    @media (max-width: 620px) {
        font-size: 15px;
        margin-bottom: 15px;
        line-height: 15px;
    }
`

export const TermsText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin-top: 20px;

    width: 280px;
    height: 75px;

`

export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    margin-top: 10px;

    button {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        background: transparent;
        border: none;
        cursor: pointer;
        color: #23DD7A;
    }

`