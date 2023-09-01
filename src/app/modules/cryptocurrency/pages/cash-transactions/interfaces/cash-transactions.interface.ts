import { WithdrawalInterface } from "./withdrawal.interface";
import { DepositInterface } from "./deposit.interface";

export interface CashTransactionsInterface {
  withdrawals: WithdrawalInterface[];
  deposits: DepositInterface[];
  statistic: {
    withdrawalUSDTotal: number;
    withdrawalUAHTotal: number;
    depositUSDTotal: number;
    depositUAHTotal: number;
  };
};