import React from 'react';

import {
    StyledGrid,
    StyledItem,
    NumItem,
} from './styles'

export const ItemsGrid = () => <StyledGrid />

export const Item = ({ numItem }) => {
    return (
        <React.Fragment>
            <StyledItem>
                asixuahsixuhasixuhaisuxhaisuxh
                <NumItem>{numItem}</NumItem>
            </StyledItem>
        </React.Fragment>
    )
}

export const Test = () => <h1>OLÀAA</h1>