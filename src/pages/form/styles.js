import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
`;

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: transparent;
`;

export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    /* padding: 16px; */
    gap: 8px;
    margin: 0 16px 16px 16px;
    padding: 8px 16px 16px 16px;
    border-radius: 0 0 3px 3px;
    border: 1px solid #d1d5da;
    border-top: none;
    padding-top: 20px;
`;

export const SectionTitle = styled.h1`
    grid-column: span 4;
    border-bottom: 1px solid #d1d5da;
    font-size: 13px;
    color: #24292e;
    opacity: .8;
    text-transform: uppercase;
    background: #0366d6;
    color: #fff;
    margin: 0 16px;
    margin-top: 32px;
    border-radius: 3px 3px 0 0;
    padding: 8px;
`;

export const InputWrapper = styled.div`
    grid-column: span ${({ c }) => c || 1};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Label = styled.label`
    font-size: 11px;
    text-transform: uppercase;
    color: #949494;
    margin: 0;
    padding: 0;
    margin-bottom: 4px;
`;

export const Input = styled.input`
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

export const Jump = styled.div`
    grid-column: span ${({ c }) => c || 1};
`;

export const BigInput = styled.textarea`
    width: 100%;
    padding: 12px 8px;
    outline: none;
    color: #37474f;
    font-size: 16px;
    max-width: 100%;
    min-width: 100%;
    font-weight: 400;
    transition: 300ms;
    
    background-color: #fff;
    border: 1px solid #d1d5da;
    border-radius: 3px;

    &::placeholder{
        color: #24292e;
    }

    &:focus{
        border-color: #0366d6;
        box-shadow: 0px 0px 0px 1px #0366d6;
    }
`;

export const SubGrid = styled.div`
    grid-column: span 4;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 8px;
`;

export const Button = styled.button`
    grid-column: span ${({ s }) => s || 2};
    border-radius: 4px;
    padding: 12px 8px;
    border: 1px solid #ccc;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    width: 100%;
    background: #0366d6;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background: #074a96;
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
    grid-column-start: ${({ cs }) => cs || 6};

    &:hover{
        background: #0366d6;
        border-color: #0366d6;
        color: #fff;
    }
`;

export const Table = styled.div`
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    border: 1px solid #37474f;
    border-radius: 4px 4px 3px 3px;
    margin: 0;
`;

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr 1fr 6fr 2fr 2fr 2fr 2fr 2fr;
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

    &:nth-child(3){
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

export const Divisor = styled.div`
    grid-column: span 4;
    height: 1px;
    background: #dedede;
    margin: 16px 0;
`;

/* --------------------- */


export const StyledGrid = styled.div`
    width: 100%;
    grid-column: span 4;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 16px;
    padding: 0;
`;

export const ItemsTitle = styled.h2`
    grid-column: span 2;
    font-size: 22px;
    font-weight: 600;
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
