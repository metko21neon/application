export interface BinanceWithdrawalInterface {
  id: string;
  amount: string;
  transactionFee: string;
  coin: string;
  status: number;
  address: string;
  txId: string;
  applyTime: string;
  network: string;
  transferType: number;
  info: string;
  confirmNo?: number;
  walletType: number;
  txKey: string;
  completeTime?: string;

  // TODO delete
  rank?: number;

  from?: string;
}