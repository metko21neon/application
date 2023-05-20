export interface CoinStateInterface {
  token_address?: string;
  address?: string;
  symbol: string;
  name?: string;
  wallets?: {
  }[];
  history?: {
    averagePrice?: number;
    executed?: number;
    filled?: number;
    amount?: number;
    total?: number;
    price?: number;
    fee?: number;

    wallet?: string;
    action: string;
    date: string;
  }[];
}