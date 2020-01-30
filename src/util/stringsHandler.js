const moneyFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
});

const bigIntFormatter = new Intl.NumberFormat({ style: 'bigInt' });

export const toMoneyFormat = (amount) => moneyFormatter.format(amount);
export const toBigIntFormat = (number) => bigIntFormatter.format(number);