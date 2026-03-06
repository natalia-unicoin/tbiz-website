import * as yup from 'yup';
import { TFunction } from 'next-i18next';

import getStringWithoutDelimiters from 'utils/getStringWithoutDelimiters';

import { MAX_CURRENCY_AMOUNT, MIN_CURRENCY_AMOUNT } from 'constants/main';

interface UnicoinCalculatorSchemeProps {
  t: TFunction;
}

const unicoinCalculatorScheme = ({
  t,
}: UnicoinCalculatorSchemeProps) => yup.object({
  currencySell: yup
    .string()
    .test('currencySell', 'field__common_required', (value) => {
      return Boolean(value && value.trim());
    }),
  currencyAmountView: yup
    .string()
    .test(
      'currencyAmountView_1',
      'field__common_required',
      (value) => {
        return Boolean(value && value.trim());
      },
    )
    .test(
      'currencyAmountView_2',
      t('field__common_number_minimum', {
        minNumber: MIN_CURRENCY_AMOUNT,
      }),
      (value) => {
        if (!value) return false;
        return (
          Number(getStringWithoutDelimiters(value)) >= MIN_CURRENCY_AMOUNT
        );
      },
    )
    .test(
      'currencyAmountView_3',
      t('field__common_number_maximum', {
        maxNumber: MAX_CURRENCY_AMOUNT,
      }),
      (value) => {
        if (!value) return false;
        return (
          Number(getStringWithoutDelimiters(value)) <= MAX_CURRENCY_AMOUNT
        );
      },
    ),
  unicoinAmountView: yup
    .string()
    .test('unicoinAmountView', 'field__common_required', (value) => {
      return Boolean(value && value.trim());
    }),
});

export default unicoinCalculatorScheme;
