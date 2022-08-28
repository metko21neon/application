export interface BinanceCoinFlexiblePositionInterface {
  asset: string;
  productId: string;
  productName: string;
  dailyInterestRate: string;
  annualInterestRate: string;
  avgAnnualInterestRate: string;
  totalAmount: string;
  lockedAmount: string;
  freeAmount: string;
  freezeAmount: string;
  totalInterest: string;
  canRedeem: boolean;
  redeemingAmount: string;
  todayPurchasedAmount: string;
}
