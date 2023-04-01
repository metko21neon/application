import { DebtInterface, IncomeInterface } from "../finances.component";

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
    singleSocialContribution: number;
    singleTaxPercentage: number;
    singleTax?: number;
    total?: number;
    payed: false;
  },
}