import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toMoneyFormat } from '../../util/stringsHandler';
import MoneyFormatInput from '../../components/currencyInput';

import { BASE_URL } from '../../config';

import {
    Wrapper,
    FormWrapper,
    Section,
    Input,
    SectionTitle,
    Jump,
    BigInput,
    SubGrid,
    Label,
    InputWrapper,
    Button,
    SecondaryButton,
    // Table,
    // Row,
    // Cell,
    // HeaderCell,
    // Divisor,
    // DeleteItem,

    StyledGrid,
    StyledItem,
    Value,
    DescItem,
    ItemKeyWrapper,
    ItemLabel,
    ItemHeader,
    ItemAction
} from './styles';

import Modal from '../../components/modal';
import MainHeader from '../../components/header';

import DeleteIcon from '../../assets/delete.svg';

const Form = () => {

    const [pregoeiro, setPregoeiro] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numPregao, setNumPregao] = useState('');
    const [numProcesso, setNumProcesso] = useState('');
    const [dataLicitacao, setDataLicitacao] = useState('');
    const [dataProposta, setDataProposta] = useState('');
    const [desc, setDesc] = useState('');
    const [numItem, setNumItem] = useState('');
    const [marca, setMarca] = useState('');
    const [unidade, setUnidade] = useState('');
    const [prazo, setPrazo] = useState('');
    const [garantia, setGarantia] = useState('');
    const [validade, setValidade] = useState('');
    const [dataLocal, setDataLocal] = useState('');
    const [qtdTotal, setQtdTotal] = useState(1);
    const [valorUni, setValorUni] = useState('0');
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        const valorUnitarioConvertido = Number(valorUni.replace(/,/g, ''));
        setValorTotal(qtdTotal * valorUnitarioConvertido);
    }, [qtdTotal, valorUni])

    const [items, setItems] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [PDFLink, setPDFLink] = useState('');

    const handleAddItem = () => {

        const valorUnitarioConvertido = Number(valorUni.replace(/,/g, '')).toFixed(2);
        const valorTot = valorTotal.toFixed(2);

        const item = {
            numItem,
            desc, marca,
            unidade,
            qtdTotal,
            valorUnitarioConvertido,
            valorTot
        }

        if (
            item.numItem === ''
            || item.desc === ''
            || item.marca === ''
            || item.unidade === ''
            || item.qtdTotal === ''
            || item.valorUni === ''
            || item.valorTotal === ''
        ) {
            return alert('Campo(s) obrigatório(s) não preenchido(s)')
        }

        setItems([...items, item]);

        setDesc('');
        setNumItem('');
        setMarca('');
        setUnidade('');
        setQtdTotal('');
        setValorUni('');
        setValorTotal('');
    }

    const handleRemoveItem = (removeIndex) => {
        const filteredItemsList = items.filter((item, index) => index !== removeIndex);
        setItems(filteredItemsList)
    }

    const handleSubmit = async () => {
        if (isAbleToSubmit()) {
            let newItems = items.map(item => {
                const {
                    numItem,
                    desc,
                    marca,
                    unidade,
                    qtdTotal,
                    valorUnitarioConvertido,
                    valorTot,
                } = item;

                const valUnitario = Number(valorUnitarioConvertido);
                const valTotal = valorTot;

                return { numItem, desc, marca, unidade, qtdTotal, valUnitario, valTotal }
            })

            const reducer = (total, currentValue) => total + Number(currentValue.valorTot);
            const totalFinal = items.reduce(reducer, 0);

            const data = {
                pregoeiro,
                endereco,
                numPregao,
                numProcesso,
                dataLicitacao,
                dataProposta,
                prazo,
                garantia,
                validade,
                dataLocal,
                totalFinal,
                items: newItems,
            }

            console.log(data);

            const response = await axios.post(BASE_URL, data);
            setPDFLink(`${BASE_URL}/pdf/${response.data.id}`);
            setShowModal(true);
        }
        else {
            return alert('Campos obrigatórios não preenchidos');
        }
    }

    const hideModal = () => {
        setShowModal(false);
        setPDFLink('');

        setPregoeiro('');
        setEndereco('');
        setNumPregao('');
        setNumProcesso('');
        setDataLicitacao('');
        setDataProposta('');
        setDesc('');
        setNumItem('');
        setMarca('');
        setUnidade('');
        setQtdTotal('');
        setValorUni('');
        setValorTotal('');
        setPrazo('');
        setGarantia('');
        setValidade('');
        setDataLocal('');
        setItems([]);
    }

    const isAbleToSubmit = () => {
        if (
            pregoeiro === '' ||
            endereco === '' ||
            numPregao === '' ||
            numProcesso === '' ||
            dataLicitacao === '' ||
            dataProposta === '' ||
            prazo === '' ||
            garantia === '' ||
            validade === '' ||
            dataLocal === '' ||
            items === []
        ) {
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <React.Fragment>
            <Wrapper>
                <Modal handleClick={hideModal} show={showModal} PDFLink={PDFLink} />
                <FormWrapper>
                    <MainHeader title='Gerar Documento' linkLabel='Ver Documentos' target='/documents' />
                    <SectionTitle>Pregoeiro e Pregão</SectionTitle>
                    <Section>
                        <InputWrapper>
                            <Label>Pregoeiro</Label>
                            <Input value={pregoeiro} onChange={(e) => setPregoeiro(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Endereço</Label>
                            <Input value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Número do Pregão</Label>
                            <Input value={numPregao} onChange={(e) => setNumPregao(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Número do Processo</Label>
                            <Input value={numProcesso} onChange={(e) => setNumProcesso(e.target.value)} />
                        </InputWrapper>
                        <Jump />
                    </Section>
                    <SectionTitle>Licitação</SectionTitle>
                    <Section>
                        <InputWrapper>
                            <Label>Data da Licitação</Label>
                            <Input type='date' value={dataLicitacao} onChange={(e) => setDataLicitacao(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Data da Proposta</Label>
                            <Input type='date' value={dataProposta} onChange={(e) => setDataProposta(e.target.value)} />
                        </InputWrapper>
                    </Section>
                    <SectionTitle>Informações do Rodapé</SectionTitle>
                    <Section>
                        <InputWrapper>
                            <Label>Prazo de Entrega</Label>
                            <Input value={prazo} onChange={(e) => setPrazo(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Prazo de Garantia</Label>
                            <Input value={garantia} onChange={(e) => setGarantia(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Validade da Proposta</Label>
                            <Input value={validade} onChange={(e) => setValidade(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Local e Data Atuais</Label>
                            <Input value={dataLocal} onChange={(e) => setDataLocal(e.target.value)} />
                        </InputWrapper>
                    </Section>
                    <SectionTitle>Itens</SectionTitle>
                    <Section>
                        <InputWrapper c={4}>
                            <Label>Descrição</Label>
                            <BigInput value={desc} onChange={(e) => setDesc(e.target.value)}></BigInput>
                        </InputWrapper>
                        <SubGrid>
                            <InputWrapper>
                                <Label>Item</Label>
                                <Input value={numItem} onChange={(e) => setNumItem(e.target.value)} />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Marca</Label>
                                <Input value={marca} onChange={(e) => setMarca(e.target.value)} />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Unidade</Label>
                                <Input value={unidade} onChange={(e) => setUnidade(e.target.value)} />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Quantidade Total</Label>
                                <Input
                                    min={0}
                                    type='number'
                                    value={qtdTotal}
                                    onChange={(e) => {
                                        setQtdTotal(e.target.value);
                                    }}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Valor Unitário</Label>
                                <MoneyFormatInput
                                    val={valorUni}
                                    handleChange={(e) => setValorUni(e)}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Valor Total</Label>
                                <Input
                                    disabled={true}
                                    type='string'
                                    value={toMoneyFormat(valorTotal)}
                                />
                            </InputWrapper>
                            <SecondaryButton type='button' onClick={handleAddItem}>
                                Adicionar Item
                            </SecondaryButton>
                        </SubGrid>
                        <StyledGrid>
                            {
                                items.map((item, index) => (
                                    <StyledItem key={index}>
                                        <ItemHeader>
                                            <ItemAction onClick={() => handleRemoveItem(index)}>
                                                <img alt='' src={DeleteIcon} />
                                            </ItemAction>
                                        </ItemHeader>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Item</ItemLabel>
                                            <Value>{item.numItem}</Value>
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
                                            <Value>{item.qtdTotal}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Valor Unitário</ItemLabel>
                                            <Value>{toMoneyFormat(item.valorUnitarioConvertido)}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper>
                                            <ItemLabel>Valor Total</ItemLabel>
                                            <Value>{toMoneyFormat(item.valorTot)}</Value>
                                        </ItemKeyWrapper>
                                        <ItemKeyWrapper c={3}>
                                            <ItemLabel>Descrição</ItemLabel>
                                            <DescItem>{item.desc}</DescItem>
                                        </ItemKeyWrapper>
                                    </StyledItem>
                                ))
                            }
                        </StyledGrid>
                    </Section>
                    <Button
                        onClick={handleSubmit}
                        type='button'
                        style={{
                            display: items.length ? 'block' : 'none',
                            margin: '16px 0 16px 16px',
                            width: '97.8%'
                        }}
                    >
                        Gerar Documento
                    </Button>
                </FormWrapper>
            </Wrapper>
        </React.Fragment >
    )
}

export default Form;