interface GetUnicoinValueProps {
  calculateType: 'money' | 'unicoins';
  valueAmount: number;
  price: number;
  factor?: number | null;
}

const getUnicoinValue = ({
  calculateType,
  valueAmount,
  price,
  factor,
}: GetUnicoinValueProps): number => {
  if (calculateType === 'unicoins') {
    return Math.ceil((valueAmount / price) * (factor || 1));
  }

  const valueAmountWithoutFactor = valueAmount / (factor || 1);

  return Number(
    (valueAmountWithoutFactor * price).toFixed(2),
  );
};

export default getUnicoinValue;
