import { CURRENCY_ENUM } from "../../../enums/currency.enum";

export interface BondInterface {
  amount: number;
  currency: CURRENCY_ENUM,
  creation_date: string;
  return_date: string;
  bond_return: number;
  return_amount?: number;
  income_amount?: number;
  percantage: number;
  quantity: number;
  isActive?: boolean;
  payed: boolean;
}