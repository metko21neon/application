import { DebtInterface, IncomeInterface } from "../finances.component";
import { TAX_ENUM } from "../enums/tax.enum";

export interface StateInterface {
  period: {
    string: string;
    month: number;
    year: number;
  },
  debt: {
    list: DebtInterface[];
    payed: {
      list: DebtInterface[];
    }
  },
  investing: {
    list: DebtInterface[];
  },
  income: {
    list: IncomeInterface[];
    total?: number;
  },
  pureIncome?: {
    list: IncomeInterface[];
    total: number;
  },
  savings?: {
    percentage: number;
    list: any[];
    total?: number;
  },
  lifeCosts: {
    list: any[];
  },
  taxes: {
    list: {
      percentage?: number;
      payed: boolean;
      amount: number;
      type: TAX_ENUM;
      source: string;
    }[];
    total?: number;
  },
}