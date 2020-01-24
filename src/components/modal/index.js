import React from 'react';

import { Wrapper, ModalContainer, Link, Download, CloseModal } from './styles';

const Modal = ({ handleClick, show, PDFLink }) => {
    return (
        <Wrapper show={show}>
            <ModalContainer>
                <h1>Documento gerado!</h1>
                <CloseModal onClick={handleClick} />
                <Link href={PDFLink} target='_blank'>
                    <Download>Baixar</Download>
                </Link>
            </ModalContainer>
        </Wrapper>
    );
}

export default Modal;