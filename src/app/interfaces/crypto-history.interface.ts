export interface CryptoHistoryInterface {
  action?: string,
  filled?: number,
  price: number,
  total: number
  amount?: number
  fee?: number
  averagePrice?: number;
  totalQuantity?: number;

  totalQuantityPercentage?: number;
}
