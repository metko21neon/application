import { DebtInterface, IncomeInterface } from "../finances.component";
import { TAX_ENUM } from "../enums/tax.enum";
import { CURRENCY_ENUM } from "../enums/currency.enum";

export interface StateInterface {
  period: string
  income: {
    list: FinanceIncomeInterface[];
    total?: number;
  };
  debt: {
    list: DebtInterface[];
    payed: {
      list: DebtInterface[];
    }
  },
  investing: {
    list: any[];
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
  costs?: {
    percentage: number;
    list: any[];
    total?: number;
  },
  lifeCosts: {
    list: any[];
  },
  taxes?: {
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

export interface FinanceIncomeInterface {
  currency?: CURRENCY_ENUM;
  exchangeRate?: number;
  source: string;
  amount: number;

  taxes?: any;
}



// import { DebtInterface, IncomeInterface } from "../finances.component";
// import { TAX_ENUM } from "../enums/tax.enum";
// import { CURRENCY_ENUM } from "../enums/currency.enum";

// export interface StateInterface {
//   period: string
//   income: {
//     list: FinanceIncomeInterface[];
//     total?: number;
//     debt: {
//       list: DebtInterface[];
//       payed: {
//         list: DebtInterface[];
//       }
//     },
//     investing: {
//       list: any[];
//     },
//     pureIncome?: {
//       list: IncomeInterface[];
//       total: number;
//     },
//     savings?: {
//       percentage: number;
//       list: any[];
//       total?: number;
//     },
//     costs?: {
//       percentage: number;
//       list: any[];
//       total?: number;
//     },
//     lifeCosts: {
//       list: any[];
//     },
//     taxes?: {
//       list: {
//         percentage?: number;
//         payed: boolean;
//         amount: number;
//         type: TAX_ENUM;
//         source: string;
//       }[];
//       total?: number;
//     },
//   };
// }

// export interface FinanceIncomeInterface {
//   currency?: CURRENCY_ENUM;
//   exchangeRate?: number;
//   source: string;
//   amount: number;

//   taxes?: any;
// }