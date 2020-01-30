import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { BASE_URL } from '../../config';

import MainHeader from '../../components/header';

import DeleteIcon from '../../assets/delete.svg';

import {
    Wrapper,
    ListContainer,
    List,
    Row,
    Cell,
    HeaderCell,
    Loading,

    DeleteItem,
    SmallCell,
    SmallHeaderCell,

    ConfirmExclusionModalWrapper,
    ExclusionModal,
    ModalText,
    ExlclusionButtons,

    Button,
    SecondaryButton
} from './styles';

const DocsList = () => {
    const [docs, setDocs] = useState();
    const [showModal, setShowModal] = useState(false);
    const [modalPosition, setModalPosition] = useState();
    const [recycleBin, setRecycleBin] = useState();

    const handleOpenExcludeModal = () => {
        const Y = window.scrollY;

        setModalPosition(Y);
        setShowModal(true);

        document.querySelector('body').style.overflow = 'hidden';
    }

    const handleCloseExcludeModal = () => {
        setRecycleBin('');
        setShowModal(false);

        document.querySelector('body').style.overflow = 'auto';
    }

    const handleRemoveDoc = async () => {
        await axios.delete(`${BASE_URL}/${recycleBin}`);

        const filteredList = docs.filter(doc => doc.id !== recycleBin);
        setDocs(filteredList);

        handleCloseExcludeModal();
    }

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(BASE_URL);
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
                        <ConfirmExclusionModalWrapper show={showModal} y={modalPosition}>
                            <ExclusionModal>
                                <ModalText>Deseja exluir esse item?</ModalText>
                                <ExlclusionButtons>
                                    <SecondaryButton
                                        style={{ width: '160px' }}
                                        onClick={handleCloseExcludeModal}
                                    >
                                        Cancelar
                                    </SecondaryButton>
                                    <Button
                                        style={{ width: '160px', marginLeft: '16px' }}
                                        onClick={handleRemoveDoc}
                                    >
                                        Excluir
                                    </Button>
                                </ExlclusionButtons>
                            </ExclusionModal>
                        </ConfirmExclusionModalWrapper>

                        <MainHeader title='Documentos' linkLabel='Novo Documento' target='/' />
                        <ListContainer>
                            <List>
                                <Row>
                                    <SmallHeaderCell />
                                    <HeaderCell>N° Processo Administrativo</HeaderCell>
                                    <HeaderCell>Pregoeiro</HeaderCell>
                                    <HeaderCell>Pregão</HeaderCell>
                                    <HeaderCell>Data da Licitação</HeaderCell>
                                </Row>
                                {docs?.map((doc) => {
                                    return (
                                        <Row key={doc.id}>
                                            <SmallCell>
                                                <DeleteItem onClick={() => {
                                                    handleOpenExcludeModal();
                                                    setRecycleBin(doc.id);
                                                }}>
                                                    <img src={DeleteIcon} alt='apagar' />
                                                </DeleteItem>
                                            </SmallCell>
                                            <Link to={`/documents/${doc.id}`}>
                                                <Cell>{doc.num_processo}</Cell>
                                                <Cell>{doc.pregoeiro}</Cell>
                                                <Cell>{doc.num_pregao}</Cell>
                                                <Cell>{doc.data_licitacao}</Cell>
                                            </Link>
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