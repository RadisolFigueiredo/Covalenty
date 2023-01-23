export const formatPrice = (number: number) => {
  return new Intl.NumberFormat('br-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(number);
};

export const formatDecimal = (number: number) => {
  return new Intl.NumberFormat('br-BR', {
    style: 'decimal',
    currency: 'BRL',
  }).format(number);
};
