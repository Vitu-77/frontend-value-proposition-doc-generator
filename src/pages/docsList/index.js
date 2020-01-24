import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import MainHeader from '../../components/header';

import {
    Wrapper,
    ListContainer,
    List,
    Row,
    Cell,
    HeaderCell,
    Loading
} from './styles';

const DocsList = () => {
    const [docs, setDocs] = useState();

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get('http://localhost:4000');
            setDocs(data.result);
        }

        fetch();
    }, []);

    return (
        <React.Fragment>
            {
                docs
                    ?
                    <Wrapper>
                        <MainHeader title='Documentos' linkLabel='Novo Documento' target='/create' />
                        <ListContainer>
                            <List>
                                <Row>
                                    <HeaderCell>N° Processo Administrativo</HeaderCell>
                                    <HeaderCell>Pregoeiro</HeaderCell>
                                    <HeaderCell>Pregão</HeaderCell>
                                    <HeaderCell>Data da Licitação</HeaderCell>
                                    <HeaderCell>Data da Proposta</HeaderCell>
                                </Row>
                                {docs?.map((doc) => {
                                    return (
                                        <Row key={doc.id}>
                                            <a
                                                href={`LINK DA API AQUI/pdf/${doc.id}`} 
                                                target='_blank'
                                            >
                                                <Cell>{doc.num_processo}</Cell>
                                                <Cell>{doc.pregoeiro}</Cell>
                                                <Cell>{doc.num_pregao}</Cell>
                                                <Cell>{doc.data_licitacao}</Cell>
                                                <Cell>{doc.data_proposta}</Cell>
                                            </a>
                                        </Row>
                                    )
                                })}
                            </List>
                        </ListContainer>
                    </Wrapper>
                    :
                    <Loading>
                        <p>Carregando...</p>
                    </Loading>
            }
        </React.Fragment>
    )
}

export default DocsList;