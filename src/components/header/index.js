import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './styles';

const MainHeader = ({ title, linkLabel, target }) => {
    return (
        <React.Fragment>
            <Header>
                <h1>{title}</h1>
                <Link to={target}>{linkLabel}</Link>
            </Header>
        </React.Fragment>
    )
}

export default MainHeader;