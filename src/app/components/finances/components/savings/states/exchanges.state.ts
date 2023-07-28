import { ACTION_TYPE_ENUM } from "../../../enums/action-type.enum";
import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export const EXCHANGES_STATE = [
  {
    action: ACTION_TYPE_ENUM.EXCHANGE,
    period: '02 December 2022',
    amount: 44943.6,
    from: CURRENCY_ENUM.UAH,
    to: CURRENCY_ENUM.USD,
    rate: 37.453
  },
  {
    action: ACTION_TYPE_ENUM.EXCHANGE,
    period: '03 December 2022',
    amount: 19400,
    from: CURRENCY_ENUM.UAH,
    to: CURRENCY_ENUM.EUR,
    rate: 38.8
  },
  {
    action: ACTION_TYPE_ENUM.EXCHANGE,
    period: '04 December 2022',
    amount: 6000,
    from: CURRENCY_ENUM.UAH,
    to: CURRENCY_ENUM.EUR,
    rate: 40
  },
];