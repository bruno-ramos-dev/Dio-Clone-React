import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 150px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

`

export const Column = styled.div`
    flex: 1;

    @media (max-width: 992px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 620px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const Title = styled.h2`
    width: 565px;
    height: 565px;
    margin-left: 50px;
    
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

    color: #FFFFFF;

    @media (max-width: 992px) {
        width: 200px;
        height: 76px;
        font-size: 20px;
        line-height: 24px;
    }

    @media (max-width: 620px) {
        width: 150px;
        height: 76px;
        font-size: 15px;
        line-height: 24px;
    }

    @media (max-width: 500px) {
        width: 200px;
        height: 50px;
        font-size: 15px;
        line-height: 20px;
        margin: 0;
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
    width: 370px;
    height: 565px;
    margin-left: 200px;

    @media (max-width: 992px) {
        margin: 0;
        width: 230px;
        height: 76px;
    }

    @media (max-width: 500px) {
        margin: 0;
        width: 200px;
        height: 50px;
        margin-top: 100px;
    }

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;

    @media (max-width: 992px) {
        font-size: 25px;
        margin-bottom: 20px;
        line-height: 24px;
    }

    @media (max-width: 620px) {
        font-size: 22px;
        margin-bottom: 20px;
        line-height: 24px;
    }
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

    @media (max-width: 992px) {
        font-size: 15px;
        margin-bottom: 15px;
        line-height: 20px;
    }

    @media (max-width: 620px) {
        font-size: 15px;
        margin-bottom: 15px;
        line-height: 15px;
    }
`

export const EsqueciText = styled.button`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    background: transparent;
    border: none;
    cursor: pointer;

    color: #E5E044;
`

export const CriarText = styled.button`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    background: transparent;
    border: none;
    cursor: pointer;

    color: #23DD7A;
`