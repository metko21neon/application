import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export interface BalanceInterface {
  action: string;
  creation_date: string;
  from: {
    amount: number;
    currency: CURRENCY_ENUM;
  };
  to: {
    amount: number;
    currency: CURRENCY_ENUM;
  };
  balance: {
    uah: number;
    usd: number;
    eur: number;
  };
}