import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.6);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms;
    pointer-events: ${({ show }) => show ? 'all' : 'none'};
    opacity: ${({ show }) => show ? 1 : 0};
    z-index: 10000000000000000000000;
`;

export const ModalContainer = styled.div`
    position: relative;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background: #fff;
    border-radius: 4px;

    & > h1{
        font-size: 24px;
        color: #5c5c5c;
        margin-bottom: 28px;
    }
`;

export const CloseModal = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3%;
    right: 3%;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;

    &:hover{
        &:after{
            background: #5c5c5c;
        }
        &:before{
            background: #5c5c5c;
        }
    }

    &::after{
        content: '';
        position: absolute;
        width: 80%;
        height: 4px;
        background: red;
        top: 50%;
        left: 0%;
        transform: rotate(-45deg);
        cursor: pointer;
        border-radius: 4px;
        background: #ccc;
        transition: 200ms;
    }

    &::before{
        content: '';
        position: absolute;
        width: 80%;
        height: 4px;
        background: red;
        top: 50%;
        left: 0%;
        transform: rotate(45deg);
        cursor: pointer;
        border-radius: 4px;
        background: #ccc;
        transition: 200ms;
    }
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const Download = styled.button`
    padding: 16px 62px;
    font-size: 18px;
    border: none;
    border-radius: 4px;
    background: #00b0ff;
    margin-top: 8px;
    transition: 300ms;
    cursor: pointer;
    color: #fff;

    &:hover{
        transform: scale(1.03);
    }
`;