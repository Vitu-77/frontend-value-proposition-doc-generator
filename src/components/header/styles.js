import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    padding: 16px 32px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.13);
    grid-column: span 4;
    grid-row: span 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #24292e;

    & > h1{
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    & > a {
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        font-size: 13px;
        padding: 12px 16px;
        border-radius: 3px;
        transition: 300ms;
        border: 1px solid transparent;
        background: #0366d6;
        font-weight: 500;

        &:hover{
            background: #074a96;
        }
    }
`;