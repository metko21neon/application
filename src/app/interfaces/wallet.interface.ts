export interface WalletInterface {
  address: string;
  company: string;
  name: string;

  transactions?: any[];
  investedAmount?: number;
  percentageResult?: number;
  totalInCurrency?: number;
  currencyResult?: number;
  quantity?: number;
}
