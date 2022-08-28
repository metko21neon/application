export interface BinanceCoinInterface {
  flexibleAmount?: number;
  isLegalMoney: boolean;
  symbol: string;
  amount: number;
  fullAmount?: number;
  total?: number | null;
  price?: number;
}