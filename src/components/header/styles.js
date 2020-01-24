import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    padding: 4px 32px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.13);
    grid-column: span 4;
    grid-row: span 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #00b0ff;

    & > h1{
        font-size: 20px;
        color: #fff;
    }

    & > a {
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 15px;
        padding: 8px 16px;
        border-radius: 4px;
        transition: 300ms;
        border: 2px solid transparent;
        background: #0095d8;
        font-weight: 600;

        &:hover{
            border-color: #fff;
        }
    }
`;