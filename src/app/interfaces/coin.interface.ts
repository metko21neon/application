import { CryptoHistoryInterface } from "./crypto-history.interface";
import { WalletInterface } from "./wallet.interface";

export interface CoinInterface {
  id: number;
  name: string;
  symbol: string;
  price: number;
  rank: number;
  quantity: number;
  averagePrice: number;
  investedAmount: number;
  totalInCurrency: number;

  percentageResult: number;
  currencyResult: number;

  token_address: string;

  isUntracked: boolean;
  isClosed: boolean;

  history: CryptoHistoryInterface[];
  wallets: WalletInterface[];
}