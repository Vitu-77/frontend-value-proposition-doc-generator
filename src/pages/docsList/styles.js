import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
`;

export const ListContainer = styled.div`
    padding: 32px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #37474f;
    border-radius: 5px;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    transition: 100ms;

    &:nth-child(odd){
        background: #dedede;
    }
    &:nth-child(even){
        background: #eaeaea;
    }

    &:hover{
        background: #adb3b9;
    }

    & > a {
        /* border: 1px solid #37474f; */
        text-decoration: none;
        width: 100%;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }

    &:first-child{
        border: none;
    }
`;

export const Cell = styled.div`
    font-size: 16px;
    color: #37474f;
    padding: 16px 8px;
    word-break: break-word;
    text-decoration: none;
    font-weight: 600;
    margin: 0;
    text-align: center;
    flex: 1;
`;

export const HeaderCell = styled.div`
    flex: 1;
    font-size: 16px;
    color: #fff;
    background: #24292e;
    padding: 16px 8px;
    word-break: break-word;
    margin: 0;
    text-align: center;

    &:first-child{ border-radius: 3px 0 0 0 }
    &:last-child{ border-radius: 0 3px 0 0 }
`;

const LoadingAnimation = keyframes`
    0% {
        opacity: .4;
    }
    100% {
        opacity: 1;
    }
`;

export const Loading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    & > p{
        font-size: 50px;
        animation-name: ${LoadingAnimation};
        animation-duration: 1.8s;
        animation-iteration-count: infinite;
        color: #5c5c5c;
    }
`;
