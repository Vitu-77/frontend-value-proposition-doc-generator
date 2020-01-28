import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainHeader from '../../components/header';
import axios from 'axios';

import { Wrapper, Button, EditableField, EditableFieldContainer, Label, Divisor, SubGrid } from './styles';

const Document = () => {

    const { document_id } = useParams();
    const [doc, setDoc] = useState();
    const [editMode, setEditMode] = useState(false);

    const [pregoeiro, setPregoeiro] = useState(doc?.pregoeiro);
    const [numPregao, setNumPregao] = useState(doc?.num_pregao);
    const [numProcesso, setNumProcesso] = useState(doc?.num_processo);
    const [endereco, setEndereco] = useState(doc?.endereco);
    const [dataLicitacao, setDataLicitacao] = useState(doc?.data_licitacao);
    const [dataProposta, setDataProposta] = useState(doc?.data_proposta);
    const [prazo, setPrazo] = useState(doc?.prazp);
    const [garantia, setGarantia] = useState(doc?.garantia);
    const [validade, setValidade] = useState(doc?.validade);
    const [dataLocal, setDataLocal] = useState(doc?.data_local);

    useEffect(() => {
        const fetch = async () => {
            const { data } = await axios.get(`http://localhost:4000/${document_id}`);
            setDoc(data.result);
        }

        fetch();
    }, []);

    return (
        <React.Fragment>
            <MainHeader
                title={`Documento: ${document_id.replace('documento-', '')}`}
                linkLabel='Ver Documentos'
                target='/documents'
            />
            <Wrapper>
                <Button editMode={editMode} onClick={() => setEditMode(!editMode)}>
                    {editMode ? 'Cancelar Edição' : 'Editar'}
                </Button>
                <Divisor />
                <EditableFieldContainer>
                    <Label>Pregoeiro</Label>
                    <EditableField defaultValue={doc?.pregoeiro} editMode={editMode} />
                </EditableFieldContainer>
                <EditableFieldContainer>
                    <Label>Nº do Pregão</Label>
                    <EditableField defaultValue={doc?.num_pregao} editMode={editMode} />
                </EditableFieldContainer>
                <EditableFieldContainer>
                    <Label>Nº do Processo Administrativo</Label>
                    <EditableField defaultValue={doc?.num_processo} editMode={editMode} />
                </EditableFieldContainer>
                <EditableFieldContainer s={3}>
                    <Label>Endereço</Label>
                    <EditableField defaultValue={doc?.endereco} editMode={editMode} />
                </EditableFieldContainer>
                <Divisor />
                <EditableFieldContainer>
                    <Label>Data da Licitação</Label>
                    <EditableField type='date' defaultValue={doc?.data_licitacao} editMode={editMode} />
                </EditableFieldContainer>
                <EditableFieldContainer>
                    <Label>Data da Proposta</Label>
                    <EditableField type='date' defaultValue={doc?.data_proposta} editMode={editMode} />
                </EditableFieldContainer>
                <Divisor />
                <SubGrid>
                    <EditableFieldContainer>
                        <Label>Prazo de Entrega</Label>
                        <EditableField defaultValue={doc?.prazo} editMode={editMode} />
                    </EditableFieldContainer>
                    <EditableFieldContainer>
                        <Label>Prazo de Garantia</Label>
                        <EditableField defaultValue={doc?.garantia} editMode={editMode} />
                    </EditableFieldContainer>
                    <EditableFieldContainer>
                        <Label>Validade da Proposta</Label>
                        <EditableField defaultValue={doc?.validade} editMode={editMode} />
                    </EditableFieldContainer>
                    <EditableFieldContainer>
                        <Label>Local e Data Atuais</Label>
                        <EditableField defaultValue={doc?.data_local} editMode={editMode} />
                    </EditableFieldContainer>
                </SubGrid>
                <Divisor />
                <Button onClick={() => console.log(doc)} disabled={editMode}>Salvar</Button>
            </Wrapper>
        </React.Fragment>
    )
}

export default Document;