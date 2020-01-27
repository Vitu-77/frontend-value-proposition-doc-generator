import React from 'react';
import CurrencyInput from 'react-currency-input';

import './style.css';

const MoneyFormatInput = ({ val, handleChange }) => {
    return (
        <div className='container'>
            <span>R$</span>
            <CurrencyInput className='currency-input' value={val} onChange={handleChange} />
        </div>
    )
}

export default MoneyFormatInput;