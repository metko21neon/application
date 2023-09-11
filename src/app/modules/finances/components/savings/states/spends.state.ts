import { ACTION_TYPE_ENUM } from "../../../enums/action-type.enum";
import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export const SPENDS_STATE = [
  {
    action: ACTION_TYPE_ENUM.SPEND,
    amount: 200,
    currency: CURRENCY_ENUM.EUR,
    period: '15 July 2023 00:00:00',
    description: 'Mom traveling',
    rate: 38.8
  }
];