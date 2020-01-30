import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
`;

export const ListContainer = styled.div`
    margin-top: 16px;
    padding: 16px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;
`;

export const RowWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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

    & > a {
        /* border: 1px solid #37474f; */
        text-decoration: none;
        width: 100%;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
     
        &:hover{
            background: #cccccc;
        }
    }

    &:first-child{
        border: none;
    }
`;

export const DeleteItem = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    
    &:hover{
        & > img {
            opacity: 1;
        }
    }

    & > img {
        transition: 300ms;
        width: 20px;
        opacity: .7;
    }
`;

export const SmallCell = styled.div`
    flex: .1;
    background: transparent;
    padding: 2px;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    opacity: .8;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SmallHeaderCell = styled.div`
    flex: .1;
    background: #0366d6;
    padding: 0px;
    height: 33px;
    border: 1px solid #0366d6;
    opacity: .8;
`;

export const Cell = styled.div`
    font-size: 13px;
    text-transform: uppercase;
    color: #37474f;
    padding: 8px;
    word-break: break-word;
    text-decoration: none;
    font-weight: 500;
    margin: 0;
    text-align: center;
    flex: 1;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;

    &:last-child{
        border-right: 1px solid #ccc;
    }
`;

export const HeaderCell = styled.div`
    flex: 1;
    font-size: 13px;
    text-transform: uppercase;
    color: #fff;
    background: #0366d6;
    padding: 8px;
    word-break: break-word;
    font-weight: 600;
    margin: 0;
    text-align: center;
    border: 1px solid #0366d6;
    opacity: .8;

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

export const ConfirmExclusionModalWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: ${({ y }) => y}px;
    left: 0;
    display: ${({ show }) => show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .3);
    z-index: 1000;
`;

export const ExclusionModal = styled.div`
    padding: 32px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    z-index: 100000;
    background: #fff;
`;

export const ModalText = styled.p`
    font-size: 22px;
    color: #5c5c5c;
    margin-bottom: 48px;
    margin-top: 0;
`;

export const ExlclusionButtons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;


export const Button = styled.button`
    text-decoration: none;
    color: #fff;
    text-transform: uppercase;
    font-size: 13px;
    padding: 12px 32px;
    border-radius: 3px;
    transition: 300ms;
    border: 1px solid transparent;
    background: ${({ editMode }) => editMode ? '#bf2d2d' : '#0366d6'};
    font-weight: 500;
    cursor: pointer;
    outline: none;
    grid-column-start: ${({ cs }) => cs || 3};

    opacity: ${({ disabled }) => disabled ? .3 : .8};
    pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};

    &:hover{
        background: ${({ editMode }) => editMode ? '#7b1818' : '#074a96'};
    }
`;

export const SecondaryButton = styled.button`
    text-decoration: none;
    color: #0366d6;
    text-transform: uppercase;
    font-size: 13px;
    padding: 12px 32px;
    border-radius: 3px;
    transition: 300ms;
    border: 1px solid #ccc;
    background: transparent;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    grid-column-start: ${({ cs }) => cs || 2};

    &:hover{
        background: #0366d6;
        border-color: #0366d6;
        color: #fff;
        opacity: .8;
    }
`;