import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    Table,
    Row,
    Cell,
    HeaderCell,
    Divisor
} from './styles';

import Modal from '../../components/modal';
import MainHeader from '../../components/header';

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
    const [qtdTotal, setQtdTotal] = useState(0);
    const [valorUni, setValorUni] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(() => {
        setValorTotal(qtdTotal * valorUni);
    }, [qtdTotal, valorUni])

    const [items, setItems] = useState([]);

    const [showModal, setShowModal] = useState(false);
    const [PDFLink, setPDFLink] = useState('');

    const handleAddItem = () => {
        const item = { numItem, desc, marca, unidade, qtdTotal, valorUni, valorTotal }

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

    const moneyFormatter = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL',
    });

    const toMoneyFormat = (amount) => moneyFormatter.format(amount);

    const handleSubmit = async () => {
        if (isAbleToSubmit()) {
            let newItems = items.map(item => {
                const {
                    numItem,
                    desc,
                    marca,
                    unidade,
                    qtdTotal,
                    valorUni,
                    valorTotal,
                } = item;

                const valUnitario = valorUni;
                const valTotal = valorTotal;

                return { numItem, desc, marca, unidade, qtdTotal, valUnitario, valTotal }
            })

            const reducer = (total, currentValue) => total + Number(currentValue.valorTotal);
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

            const response = await axios.post('http://localhost:4000', data);
            setPDFLink(`http://localhost:4000/pdf/${response.data.id}`);
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
            desc === '' ||
            numItem === '' ||
            marca === '' ||
            unidade === '' ||
            qtdTotal === '' ||
            valorUni === '' ||
            valorTotal === '' ||
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
                            <Input value={dataLicitacao} onChange={(e) => setDataLicitacao(e.target.value)} />
                        </InputWrapper>
                        <InputWrapper>
                            <Label>Data da Proposta</Label>
                            <Input value={dataProposta} onChange={(e) => setDataProposta(e.target.value)} />
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
                            <Label>Data e Local Atual</Label>
                            <Input value={dataLocal} onChange={(e) => setDataLocal(e.target.value)} />
                        </InputWrapper>
                    </Section>
                    <SectionTitle>Items</SectionTitle>
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
                                <Input type='number' value={qtdTotal}
                                    onChange={(e) => {
                                        setQtdTotal(e.target.value);
                                    }}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Valor Unitário</Label>
                                <Input type='number' value={valorUni}
                                    onChange={(e) => {
                                        setValorUni(e.target.value);
                                    }}
                                />
                            </InputWrapper>
                            <InputWrapper>
                                <Label>Valor Total</Label>
                                <Input disabled={true} type='number' value={valorTotal} />
                            </InputWrapper>
                            <Button type='button' onClick={handleAddItem}>
                                ADICIONAR ITEM
                            </Button>
                        </SubGrid>
                    </Section>
                    <Section style={{ display: items.length ? 'block' : 'none' }}>
                        <SectionTitle style={{ display: items.length ? 'block' : 'none' }}>
                            Items Cadastrados
                        </SectionTitle>
                        <Table>
                            <Row>
                                <HeaderCell>Item</HeaderCell>
                                <HeaderCell>DESCRIÇÃO</HeaderCell>
                                <HeaderCell>MARCA</HeaderCell>
                                <HeaderCell>UNIDADE</HeaderCell>
                                <HeaderCell>QTD. TOTAL</HeaderCell>
                                <HeaderCell>VALOR UNITÁRIO</HeaderCell>
                                <HeaderCell>VALOR TOTAL</HeaderCell>
                            </Row>
                            {
                                items.map((item, index) => {
                                    return <Row key={index}>
                                        <Cell>{item.numItem}</Cell>
                                        <Cell>{item.desc}</Cell>
                                        <Cell>{item.marca}</Cell>
                                        <Cell>{item.unidade}</Cell>
                                        <Cell>{item.qtdTotal}</Cell>
                                        <Cell>{toMoneyFormat(item.valorUni)}</Cell>
                                        <Cell>{toMoneyFormat(item.valorTotal)}</Cell>
                                    </Row>
                                })
                            }
                        </Table>
                    </Section>
                    <Section>
                        <Divisor />
                        <Button onClick={handleSubmit} type='button' s={4}>GERAR DOCUMENTO</Button>
                    </Section>
                </FormWrapper>
            </Wrapper>
        </React.Fragment >
    )
}

export default Form;