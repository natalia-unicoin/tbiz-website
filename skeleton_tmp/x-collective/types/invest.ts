import {
  InvestmentStep,
} from '@tbiz/tb-types';

export interface InvestmentStepData {
  step: InvestmentStep | null;
  label: string | null;
}

export interface UnicoinCalculatorData {
  currencySell: string;
  currencyAmount: number;
  currencyAmountView: string;
  unicoinAmountView: string;
  walletId?: string;
}
