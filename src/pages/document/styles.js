import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 16px;
    margin: 16px;
    transition: 300ms;
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px 8px;
`;

export const SubGrid = styled.div`
    grid-column: span 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px 8px;
`;

export const Divisor = styled.div`
    grid-column: span 3;
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
    background: ${({editMode}) => editMode ? '#bf2d2d' : '#0366d6'};
    font-weight: 500;
    cursor: pointer;
    outline: none;
    grid-column-start: 3;

    opacity: ${({ disabled }) => disabled ? .3 : 1};
    pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};

    &:hover{
        background: ${({ editMode }) => editMode ? '#7b1818' : '#074a96'};
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
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: #3F464D;
    margin-bottom: 3px;
    padding-left: 4px;
`;

export const EditableField = styled.input`
    border-radius: 4px;
    padding: 12px 8px;
    border: ${({ editMode }) => editMode ? '1px solid #ccc' : '1px solid #00000017'};
    outline: none;
    color: #3F464D;
    font-size: 16px;
    width: 100%;
    background: ${({ editMode }) => editMode ? '#fff' : 'transparent'};
    font-weight: 400;
    transition: 300ms;
    pointer-events: ${({ editMode }) => editMode ? 'all' : 'none'};

    &::placeholder{
        color: #24292e;
    }

    &:focus{
        border-color: #0366d6;
        box-shadow: 0px 0px 0px 1px #0366d6;
    }
`;