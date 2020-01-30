import styled from "styled-components";

export const StyledGrid = styled.div`
    width: 100%;
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 16px;
    background: lightcoral;
    padding: 20px 0;
`;

export const StyledItem = styled.div`
    grid-column: span 1;
    padding: 2px;
    background: blue;
    border-radius: 3px;
`;

export const NumItem = styled.h3`
    font-size: 22px;
    font-weight: 500;
    color: #3F464D;
    margin: 0%;
    padding: 0;
`;