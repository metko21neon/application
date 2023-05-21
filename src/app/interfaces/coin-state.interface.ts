export interface CoinStateInterface {
  name: string;
  symbol: string;
  token_address: string;
  wallets?: {
    name: string;
    address: string;
    transactions: any[];
  }[];
}