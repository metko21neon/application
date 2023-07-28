export interface BinanceDepositInterface {
  id: string;
  amount: string;
  coin: string;
  status: number;
  address: string;
  txId: string;
  network: string;
  transferType: number;
  walletType: number;

  "addressTag": string;
  "insertTime": number;
  "confirmTimes": string;
  "unlockConfirm": number;

  "insertDate": string;
  "from": string;
  "fee": number;
}