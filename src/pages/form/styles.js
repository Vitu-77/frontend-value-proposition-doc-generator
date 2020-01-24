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

export const Section = styled.form`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    /* padding: 16px; */
    gap: 8px;
    margin: 16px;
`;

export const InputWrapper = styled.div`
    grid-column: span ${({ c }) => c || 1};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Label = styled.label`
    font-size: 15px;
    font-weight: 600;
    color: #3F464D;
    margin-bottom: 3px;
    padding-left: 4px;
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
    
    &::placeholder{
        color: #90a4ae;
    }
`;

export const Jump = styled.div`
    grid-column: span ${({ c }) => c || 1};
`;

export const SectionTitle = styled.h1`
    grid-column: span 4;
    font-size: 20px;
    padding: 4px 20px 10px 20px;
    color: #3F464D;
    border-bottom: 2px solid #3F464D;
    opacity: .8;
    font-weight: 400;
`;

export const BigInput = styled.textarea`
    width: 100%;
    border-radius: 4px;
    padding: 12px 8px;
    border: 1px solid #ccc;
    outline: none;
    color: #37474f;
    font-size: 16px;
    max-width: 100%;
    min-width: 100%;
    font-weight: 400;
    
    &::placeholder{
        color: #90a4ae;
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
    font-size: 14px;
    width: 100%;
    background:  #00b0ff;
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: 300ms;

    &:hover {
        background:  #229fd8;
    }
`;

export const Table = styled.div`
    grid-column: span 4;
    display: flex;
    flex-direction: column;
    border: 1px solid #37474f;
    border-radius: 6px 6px 4px 4px;
`;

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6fr 2fr 2fr 2fr 2fr 2fr;
    border-bottom: 1px solid #37474f;

    &:last-child{
        border-bottom: none;
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

    &:nth-child(2){
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
    background: #37474f;
    padding: 12px 8px;
    word-break: break-word;
    margin: 0;
    text-align: center;

    &:first-child{ border-radius: 4px 0 0 0 }
    &:last-child{ border-radius: 0 4px 0 0 }
`;

export const Divisor = styled.div`
    grid-column: span 4;
    height: 1px;
    background: #dedede;
    margin: 16px 0;
`;