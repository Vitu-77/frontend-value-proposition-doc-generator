import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    margin: 32px 16px 16px 16px;
    transition: 300ms;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px 8px;
`;

export const PDF = styled.a`
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    z-index: 10000000;
    cursor: pointer;
    background: #0366d6;
    /* opacity: .8; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    outline: none;

    & > img {
        width: 30px;
    }

    &:hover {
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    }
`;

export const SubGrid = styled.div`
    grid-column: span 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px 8px;
`;

export const Divisor = styled.div`
    grid-column: span ${({ s }) => s || 3};
    height: 1px;
    background: #dedede;
    margin: 8px 0;
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

export const EditableFieldContainer = styled.div`
    grid-column: span ${({ s }) => s || 1};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Label = styled.label`
    font-size: 11px;
    text-transform: uppercase;
    color: #949494;
    margin: 0;
    padding: 0;
    margin-bottom: 4px;
`;

export const EditableField = styled.input`
    border-radius: 4px;
    padding: 12px 8px;
    border: 1px solid #ccc;
    outline: none;
    color: #3F464D;
    font-size: 16px;
    width: 100%;
    background: #fff;
    font-weight: 400;
    transition: 300ms;

    &::placeholder{
        color: #24292e;
    }

    &:focus{
        border-color: #0366d6;
        box-shadow: 0px 0px 0px 1px #0366d6;
    }
`;

export const EditableBigField = styled.textarea`
    border-radius: 4px;
    padding: 12px 8px;
    border: 1px solid #ccc;
    outline: none;
    color: #3F464D;
    font-size: 16px;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    background: #fff;
    font-weight: 400;
    transition: 300ms;
    
    &::placeholder{
        color: #24292e;
    }

    &:focus{
        border-color: #0366d6;
        box-shadow: 0px 0px 0px 1px #0366d6;
    }
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


export const Table = styled.div`
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    border: 1px solid #37474f;
    border-radius: 4px 4px 3px 3px;
    margin: 0;
`;

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1.2fr 1fr 6fr 2fr 2fr 2fr 2fr 2fr;
    border-bottom: 1px solid #37474f;

    &:last-child{
        border-bottom: none;
    }
`;

export const DeleteItem = styled.img`
    color: #37474f;
    cursor: pointer;
    transition: 300ms;
    opacity: .7;

    &:hover{
        opacity: 1;
    }
`;

export const Cell = styled.p`
    grid-column: span 1;
    font-size: 14px;
    color: #37474f;
    border-right: 1px solid #37474f;    
    padding: 8px;
    word-break: break-word;
    margin: 0;
    text-align: center;
    background: #fff;

    &:nth-child(4){
        text-align: justify;
    }

    &:last-child{
        border-right: none;
    }
`;

export const HeaderCell = styled.div`
    grid-column: span 1;
    font-size: 14px;
    color: #fff;
    background: #24292e;
    padding: 12px 8px;
    word-break: break-word;
    border-right: 1px solid #fff;
    margin: 0;
    text-align: center;

    &:first-child{ border-radius: 3px 0 0 0 }
    &:last-child{ border: none; border-radius: 0 3px 0 0 }
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

export const EditModalWraper = styled.div`
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

export const Modal = styled.div`
    width: 1000px;
    padding: 16px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    z-index: 100000;
`;

export const ModalHeader = styled.header`
    width: 100%;
    background:  #0366d6;
    border-radius: 3px 3px 0 0;
    padding: 0 8px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p {
        color: #fff;
        font-size: 13px;
        font-weight: 600;
    }

    & > button {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        outline: none;

        & > img {
            width: 23px;
            color: #fff;
        }
    }
`;

export const ModalForm = styled.form`
    padding: 8px;
    width: 100%;
    display: grid;
    background: #f6f8fa;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    border-radius: 0 0 3px 3px;
`;


export const NewItemModalWraper = styled.div`
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

export const NewItemModal = styled.div`
    width: 1000px;
    padding: 16px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    z-index: 100000;
`;

export const NewItemModalHeader = styled.header`
    width: 100%;
    background:  #0366d6;
    border-radius: 3px 3px 0 0;
    padding: 0 8px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p {
        color: #fff;
        font-size: 13px;
        font-weight: 600;
    }

    & > button {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        outline: none;

        & > img {
            width: 23px;
            color: #fff;
        }
    }
`;

export const NewItemModalForm = styled.form`
    padding: 8px;
    width: 100%;
    display: grid;
    background: #f6f8fa;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    border-radius: 0 0 3px 3px;
`;

/* ------------------ */

export const StyledGrid = styled.div`
    width: 100%;
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 16px;
    padding: 0;
`;

export const ItemsTitle = styled.h2`
    grid-column: span 2;
    font-size: 22px;
    font-weight: 500;
    color: #4f5358;
    margin: 0;
    text-transform: uppercase;
    padding: 0;
    opacity: .9;
`;

export const StyledItem = styled.div`
    grid-column: span 1;
    padding: 16px;
    border-radius: 3px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    border: 1px solid #ccc;
    background: #fff;
`;

export const NewItem = styled.div`
    grid-column: span 1;
    padding: 16px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #0366d680;
    background: #0366d612;
    cursor: pointer;
    transition: 300ms;

    &:hover{
        background: #0366d625;

        & > img { opacity: .8 }
    }
`;

export const PlusIcon = styled.img`
    width: 50px;
    height: 50px;
    opacity: .6;
    transition: 300ms;
`;

export const ItemLabel = styled.p`
    font-size: 11px;
    text-transform: uppercase;
    color: #949494;
    margin: 0;
    padding: 0;
    margin-bottom: 4px;
`;

export const ItemHeader = styled.header`
    grid-column: span 3;
    padding: 0 4px;
    padding-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ItemAction = styled.button`
    width: 20px;
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 16px;
    
    & > img {
        width: 20px;
        opacity: .6;

        &:hover{
            opacity: .8;
        }
    }
`;

export const Value = styled.h3`
    font-size: 20px;
    font-weight: 600;
    color: #4f5358;
    margin: 0;
    padding: 0;
    opacity: .9;
`;

export const DescItem = styled.p`
    font-size: 15px;
    color: #3F464D;
    margin: 0;
    text-align: justify;
    padding: 0;
    font-weight: 500;
`;

export const ItemKeyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-column: span ${({ c }) => c || 1};
    margin-bottom: 16px;
`;
