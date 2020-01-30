import React from 'react';
import CurrencyInput from 'react-currency-input';

import './style.css';

const MoneyFormatInput = ({ val, handleChange, disabled }) => {
    return (
        <div className='container'>
            <span>R$</span>
            <CurrencyInput
                disabled={disabled}
                className='currency-input'
                value={val}
                onChange={handleChange}
            />
        </div>
    )
}

export default MoneyFormatInput;