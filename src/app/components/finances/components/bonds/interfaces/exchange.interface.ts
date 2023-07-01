import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export interface ExchangeInterface {
  date: string;
  amount: number;
  from: CURRENCY_ENUM;
  to: CURRENCY_ENUM;
  rate: number;
}