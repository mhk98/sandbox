const currency = amount => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

export default currency;