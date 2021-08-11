const appendCurrency = (amount: number, currency: string = 'usd') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toLocaleUpperCase(),
  }).format(amount || 0);
};
export default appendCurrency;
