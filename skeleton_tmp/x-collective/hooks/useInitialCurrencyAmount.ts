import { useMemo } from 'react';

import { DEFAULT_MONEY_AMOUNT } from 'constants/main';

import { getDelimitedString, getUnicoinValue } from 'utils';

interface InitialCurrencyAmountProps {
  price: number;
  factor?: number | null;
  minCurrencyAmount: number;
}

const useInitialCurrencyAmount = ({
  price,
  factor,
  minCurrencyAmount = DEFAULT_MONEY_AMOUNT,
}: InitialCurrencyAmountProps) => {
  return useMemo(() => {
    const unicoinValue = getUnicoinValue({
      calculateType: 'unicoins',
      valueAmount: minCurrencyAmount,
      price,
    });

    return {
      currencyAmount: minCurrencyAmount,
      currencyAmountView: getDelimitedString(minCurrencyAmount),
      unicoinAmountView: getDelimitedString(unicoinValue * (factor || 1)),
    };
  }, [price, factor, minCurrencyAmount]);
};

export default useInitialCurrencyAmount;
