import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../components/header';
import axios from 'axios';
import { BASE_URL } from '../../config';
import { toMoneyFormat } from '../../util/stringsHandler';
import MoneyFormatInput from '../../components/currencyInput';

import {
    Wrapper,
    SecondaryButton,
    Button,
    EditableField,
    EditableBigField,
    EditableFieldContainer,
    Label,
    Divisor,
    SubGrid,
    Loading,
    // Table,
    // Row,
    // DeleteItem,
    // Cell,
    // HeaderCell,
    EditModalWraper,
    Modal,
    ModalHeader,
    ModalForm,

    StyledGrid,
    StyledItem,
    Value,
    DescItem,
    ItemKeyWrapper,
    ItemLabel,
    ItemHeader,
    ItemAction,
    PDF,

    NewItem,
    PlusIcon,

    ConfirmExclusionModalWrapper,
    ExclusionModal,
    ModalText,
    ExlclusionButtons,

    NewItemModalWraper,
    NewItemModal,
    NewItemModalHeader,
    NewItemModalForm,
} from './styles';

import DeleteIcon from '../../assets/delete.svg';
import EditIcon from '../../assets/edit.svg';
import CloseIcon from '../../assets/close.png';
import PDFIcon from '../../assets/pdf.png';
import Plus from '../../assets/plus.svg';

const Document = () => {

    const { document_id } = useParams();
    const [doc] = useState();
    const [docItems, setDocItems] = useState([]);

    // const [editMode, setEditMode] = useState(false);
    const [showItems, setShowItems] = useState(false);
    const [itemEditMode, setItemEditMode] = useState(false);

    const [currentEditItem, setCurrentEditItem] = useState();

    const [pregoeiro, setPregoeiro] = useState(doc?.pregoeiro);
    const [numPregao, setNumPregao] = useState(doc?.num_pregao);
    const [numProcesso, setNumProcesso] = useState(doc?.num_processo);
    const [endereco, setEndereco] = useState(doc?.endereco);
    const [dataLicitacao, setDataLicitacao] = useState(doc?.data_licitacao);
    const [dataProposta, setDataProposta] = useState(doc?.data_proposta);
    const [prazo, setPrazo] = useState(doc?.prazo);
    const [garantia, setGarantia] = useState(doc?.garantia);
    const [validade, setValidade] = useState(doc?.validade);
    const [dataLocal, setDataLocal] = useState(doc?.data_local);

    const [editNumItem, setEditNumItem] = useState('');
    const [editDesc, setEditDesc] = useState('');
    const [editMarca, setEditMarca] = useState('');
    const [editUnidade, setEditUnidade] = useState('');
    const [editQtdTotal, setEditQtdTotal] = useState('');
    const [editValorUnitario, setEditValorUnitario] = useState('');
    const [editValorTotal, setEditValorTotal] = useState('');

    const [modalPosition, setModalPosition] = useState();
    const [showExcludeModal, setShowExcludeModal] = useState(false);
    const [recycleBin, setRecycleBin] = useState();
    const [showNewItemModal, setShowNewItemModal] = useState(false);

    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(`${BASE_URL}/${document_id}`);

            setDocItems(data?.result?.items);

            setPregoeiro(data?.result?.pregoeiro);
            setNumPregao(data?.result?.num_pregao);
            setNumProcesso(data?.result?.num_processo);
            setEndereco(data?.result?.endereco);
            setDataLicitacao(data?.result?.data_licitacao);
            setDataProposta(data?.result?.data_proposta);
            setPrazo(data?.result?.prazo);
            setGarantia(data?.result?.garantia);
            setValidade(data?.result?.validade);
            setDataLocal(data?.result?.data_local);

            setLoadingData(false);
        }

        fetch();
    }, [document_id]);

    useEffect(() => {
        console.log('LD - ',loadingData);
    }, [loadingData])

    useEffect(() => {
        setEditValorTotal(Number(editValorUnitario?.replace(/,/g, '')) * Number(editQtdTotal));
    }, [editQtdTotal, editValorUnitario]);

    const handleOpenModal = (item) => {

        const Y = window.scrollY;
        setModalPosition(Y);

        document.querySelector('body').style.overflow = 'hidden';

        setItemEditMode(true);

        setEditNumItem(item.num_item);
        setEditDesc(item.desc);
        setEditMarca(item.marca);
        setEditUnidade(item.unidade);
        setEditQtdTotal(item.qtd_total);
        setEditValorUnitario(item.val_unitario);
        setEditValorTotal(item.val_total);
    }

    const handleCloseModal = () => {

        document.querySelector('body').style.overflow = 'auto';

        setItemEditMode(false);

        setEditNumItem('');
        setEditDesc('');
        setEditMarca('');
        setEditUnidade('');
        setEditQtdTotal('');
        setEditValorUnitario('');
        setEditValorTotal('');
    }

    const handleOpenExcludeModal = () => {
        const Y = window.scrollY;

        setModalPosition(Y);
        setShowExcludeModal(true);

        document.querySelector('body').style.overflow = 'hidden';
    }

    const handleCloseExcludeModal = () => {
        setRecycleBin('');
        setShowExcludeModal(false);

        document.querySelector('body').style.overflow = 'auto';
    }

    const handleOpenAddItemModal = () => {
        const Y = window.scrollY;

        setModalPosition(Y);
        setShowNewItemModal(true);

        document.querySelector('body').style.overflow = 'hidden';
    }

    const handleCloseAddItemModal = () => {
        setRecycleBin('');
        setShowNewItemModal(false);

        document.querySelector('body').style.overflow = 'auto';

        setEditNumItem('');
        setEditDesc('');
        setEditMarca('');
        setEditUnidade('');
        setEditQtdTotal('');
        setEditValorUnitario('');
        setEditValorTotal('');
    }

    const handleAddItem = async () => {

        const item = {
            documento_id: document_id,
            numItem: editNumItem,
            desc: editDesc,
            marca: editMarca,
            unidade: editUnidade,
            qtdTotal: editQtdTotal,
            valUnitario: editValorUnitario
        }

        const { data } = await axios.post(`${BASE_URL}/item`, item);

        setDocItems([...docItems, data.addedItem]);

        handleCloseAddItemModal();

    }

    const handleSubmit = async () => {
        const updatedDoc = {
            pregoeiro,
            num_pregao: numPregao,
            num_processo: numProcesso,
            endereco,
            data_licitacao: dataLicitacao,
            data_proposta: dataProposta,
            prazo,
            garantia,
            validade,
            data_local: dataLocal,
        }

        await axios.put(`${BASE_URL}/${document_id}`, updatedDoc);

        window.location.assign('/documents');
    }

    const handleSubmitItem = async () => {
        const update = {
            num_item: editNumItem,
            desc: editDesc,
            marca: editMarca,
            unidade: editUnidade,
            qtd_total: editQtdTotal,
            val_unitario: editValorUnitario,
            val_total: editValorTotal,
        }

        try {
            const { data } = await axios.put(`${BASE_URL}/item/${currentEditItem}`, update);

            const filteredItemsList = docItems.filter((item) => item.id !== currentEditItem);

            setDocItems([...filteredItemsList, data.updatedItem]);
            handleCloseModal();

        } catch (error) {
            console.log(error);
        }
    }

    const handleRemoveItem = async () => {

        await axios.delete(`${BASE_URL}/item/${recycleBin}`);

        const filteredItemsList = docItems.filter((item) => item.id !== recycleBin);

        setDocItems(filteredItemsList);

        handleCloseExcludeModal();
    }

    return (
        <React.Fragment>
            {!loadingData ?
                <React.Fragment>
                    <MainHeader
                        title={`Documento: ${document_id.replace('documento-', '')}`}
                        linkLabel='Ver Documentos'
                        target='/documents'
                    />
                    <Wrapper>
                        <PDF href={`${BASE_URL}/pdf/${document_id}`} target='_blank'>
                            <img alt='' src={PDFIcon} />
                        </PDF>
                        <ConfirmExclusionModalWrapper show={showExcludeModal} y={modalPosition}>
                            <ExclusionModal>
                                <ModalText>Deseja deletar esse item?</ModalText>
                                <ExlclusionButtons>
                                    <SecondaryButton
                                        style={{ width: '160px' }}
                                        onClick={handleCloseExcludeModal}
                                    >
                                        Cancelar
                                    </SecondaryButton>
                                    <Button
                                        style={{ width: '160px', marginLeft: '16px' }}
                                        onClick={handleRemoveItem}
                                    >
                                        Excluir
                                    </Button>
                                </ExlclusionButtons>
                            </ExclusionModal>
                        </ConfirmExclusionModalWrapper>
                        {/* edit item modal */}
                        <EditModalWraper show={itemEditMode} y={modalPosition}>
                            <Modal>
                                <ModalHeader>
                                    <p>Editar Item</p>
                                    <button onClick={handleCloseModal}>
                                        <img alt='fechar' src={CloseIcon} />
                                    </button>
                                </ModalHeader>
                                <ModalForm>
                                    <EditableFieldContainer s={2}>
                                        <Label>Descrição</Label>
                                        <EditableBigField
                                            rows={5}
                                            value={editDesc}
                                            editMode={true}
                                            onChange={(e) => setEditDesc(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Item</Label>
                                        <EditableField
                                            value={editNumItem}
                                            editMode={true}
                                            onChange={(e) => setEditNumItem(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Marca</Label>
                                        <EditableField
                                            value={editMarca}
                                            editMode={true}
                                            onChange={(e) => setEditMarca(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Unidade</Label>
                                        <EditableField
                                            value={editUnidade}
                                            editMode={true}
                                            onChange={(e) => setEditUnidade(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Qtd Total</Label>
                                        <EditableField
                                            type='number'
                                            min={0}
                                            value={editQtdTotal}
                                            editMode={true}
                                            onChange={(e) => setEditQtdTotal(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Valor Unitário</Label>
                                        <MoneyFormatInput
                                            val={editValorUnitario}
                                            handleChange={(e) => setEditValorUnitario(e)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Valor Total</Label>
                                        <MoneyFormatInput
                                            val={editValorTotal}
                                            handleChange={(e) => setEditValorUnitario(e)}
                                            disabled={true}
                                        />
                                    </EditableFieldContainer>
                                    <Divisor s={2} />
                                    <Button
                                        type='button'
                                        cs={2}
                                        onClick={() => handleSubmitItem()}
                                    >
                                        Salvar Item
                                    </Button>
                                </ModalForm>
                            </Modal>
                        </EditModalWraper>
                        {/* add item modal */}
                        <NewItemModalWraper show={showNewItemModal} y={modalPosition}>
                            <NewItemModal>
                                <NewItemModalHeader>
                                    <p>Novo Item</p>
                                    <button onClick={handleCloseAddItemModal}>
                                        <img alt='' src={CloseIcon} />
                                    </button>
                                </NewItemModalHeader>
                                <NewItemModalForm>
                                    <EditableFieldContainer s={2}>
                                        <Label>Descrição</Label>
                                        <EditableBigField
                                            rows={5}
                                            value={editDesc}
                                            editMode={true}
                                            onChange={(e) => setEditDesc(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Item</Label>
                                        <EditableField
                                            value={editNumItem}
                                            editMode={true}
                                            onChange={(e) => setEditNumItem(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Marca</Label>
                                        <EditableField
                                            value={editMarca}
                                            editMode={true}
                                            onChange={(e) => setEditMarca(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Unidade</Label>
                                        <EditableField
                                            value={editUnidade}
                                            editMode={true}
                                            onChange={(e) => setEditUnidade(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Qtd Total</Label>
                                        <EditableField
                                            type='number'
                                            min={0}
                                            value={editQtdTotal}
                                            editMode={true}
                                            onChange={(e) => setEditQtdTotal(e.target.value)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Valor Unitário</Label>
                                        <MoneyFormatInput
                                            val={editValorUnitario}
                                            handleChange={(e) => setEditValorUnitario(e)}
                                        />
                                    </EditableFieldContainer>
                                    <EditableFieldContainer>
                                        <Label>Valor Total</Label>
                                        <MoneyFormatInput
                                            val={editValorTotal}
                                            handleChange={(e) => setEditValorUnitario(e)}
                                            disabled={true}
                                        />
                                    </EditableFieldContainer>
                                    <Divisor s={2} />
                                    <Button
                                        type='button'
                                        cs={2}
                                        onClick={handleAddItem}
                                    >
                                        Salvar Item
                                    </Button>
                                </NewItemModalForm>
                            </NewItemModal>
                        </NewItemModalWraper>
                        <EditableFieldContainer>
                            <Label>Pregoeiro</Label>
                            <EditableField
                                value={pregoeiro}
                                onChange={(e) => setPregoeiro(e.target.value)}
                            />
                        </EditableFieldContainer>
                        <EditableFieldContainer>
                            <Label>Nº do Pregão</Label>
                            <EditableField
                                defaultValue={numPregao}
                                onChange={(e) => setNumPregao(e.target.value)}
                            />
                        </EditableFieldContainer>
                        <EditableFieldContainer>
                            <Label>Nº do Processo Administrativo</Label>
                            <EditableField
                                defaultValue={numProcesso}
                                onChange={(e) => setNumProcesso(e.target.value)}
                            />
                        </EditableFieldContainer>
                        <EditableFieldContainer s={3}>
                            <Label>Endereço</Label>
                            <EditableField
                                defaultValue={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </EditableFieldContainer>
                        <Divisor />
                        <EditableFieldContainer>
                            <Label>Data da Licitação</Label>
                            <EditableField
                                type='date'
                                defaultValue={dataLicitacao}
                                onChange={(e) => setDataLicitacao(e.target.value)}
                            />
                        </EditableFieldContainer>
                        <EditableFieldContainer>
                            <Label>Data da Proposta</Label>
                            <EditableField
                                type='date'
                                defaultValue={dataProposta}
                                onChange={(e) => setDataProposta(e.target.value)}
                            />
                        </EditableFieldContainer>
                        <Divisor />
                        <SubGrid>
                            <EditableFieldContainer>
                                <Label>Prazo de Entrega</Label>
                                <EditableField
                                    defaultValue={prazo}
                                    onChange={(e) => setPrazo(e.target.value)}
                                />
                            </EditableFieldContainer>
                            <EditableFieldContainer>
                                <Label>Prazo de Garantia</Label>
                                <EditableField
                                    defaultValue={garantia}
                                    onChange={(e) => setGarantia(e.target.value)}
                                />
                            </EditableFieldContainer>
                            <EditableFieldContainer>
                                <Label>Validade da Proposta</Label>
                                <EditableField
                                    defaultValue={validade}
                                    onChange={(e) => setValidade(e.target.value)}
                                />
                            </EditableFieldContainer>
                            <EditableFieldContainer>
                                <Label>Local e Data Atuais</Label>
                                <EditableField
                                    defaultValue={dataLocal}
                                    onChange={(e) => setDataLocal(e.target.value)}
                                />
                            </EditableFieldContainer>
                        </SubGrid>
                        <Divisor />
                        <StyledGrid style={{ display: showItems ? 'grid' : 'none' }}>
                            {
                                docItems.map((item, index) => (
                                    <StyledItem key={item.id || index}>
                                        <ItemHeader>
                                            <ItemAction onClick={() => {
                                                handleOpenModal(item);
                                                setCurrentEditItem(item.id);
                                            }}>
                                                <img alt='' src={EditIcon} />
                                            </ItemAction>
                                            <ItemAction onClick={() => {
                                                handleOpenExcludeModal();
                                                setRecycleBin(item.id);
                                            }}>
                                                <img alt='' src={DeleteIcon} />
                                            </ItemAction>
                                        </ItemHeader>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Item</ItemLabel>
                                            <Value>{item.num_item}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Marca</ItemLabel>
                                            <Value>{item.marca}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Unidade</ItemLabel>
                                            <Value>{item.unidade}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Quantidade</ItemLabel>
                                            <Value>{item.qtd_total}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Valor Unitário</ItemLabel>
                                            <Value>{toMoneyFormat(item.val_unitario)}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Valor Total</ItemLabel>
                                            <Value>{toMoneyFormat(item.val_total)}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper c={3}>
                                            <ItemLabel>Descrição</ItemLabel>
                                            <DescItem>{item.desc}</DescItem>
                                        </ItemKeyWrapper>
                                    </StyledItem>
                                ))
                            }
                            <NewItem onClick={handleOpenAddItemModal}>
                                <PlusIcon src={Plus} />
                            </NewItem>
                        </StyledGrid>
                        <Divisor style={{ display: showItems ? 'grid' : 'none' }} />
                        <SecondaryButton onClick={() => setShowItems(!showItems)}>
                            {showItems ? 'Esconder Itens' : 'Editar Itens'}
                        </SecondaryButton>
                        <Button onClick={handleSubmit}>Salvar</Button>
                    </Wrapper>
                </React.Fragment>
                :
                <Loading>
                    <p>Carregando...</p>
                </Loading>
            }
        </React.Fragment>
    )
}

export default Document;