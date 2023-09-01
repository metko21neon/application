import { CashTransactionsInterface } from "../interfaces/cash-transactions.interface";

export const CASH_TRANSACTIONS_STATE: CashTransactionsInterface = {
  withdrawals: [],
  deposits: [],
  statistic: {
    withdrawalUSDTotal: 0,
    withdrawalUAHTotal: 0,
    depositUSDTotal: 0,
    depositUAHTotal: 0
  }
};