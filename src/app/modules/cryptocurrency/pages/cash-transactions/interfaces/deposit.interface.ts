export interface DepositInterface {
  orderNo: string;
  fiatCurrency: string;
  indicatedAmount: string;
  amount: string;
  totalFee: string;
  method: string;
  status: string;
  createTime: number;
  updateTime: number;
  usdPrice: string;
  usdAmount?: number;
}
