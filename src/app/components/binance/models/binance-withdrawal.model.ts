import { BinanceWithdrawalInterface } from "../interfaces/binance-withdrawal.interface";
import { DATE_FORMAT } from "src/app/app.component";

import moment from 'moment';

export class BinanceWithdrawalModel {

  action = "transfer";
  address = '';
  amount = 0;

  date = '';
  fee = 0;
  network = '';

  constructor(action: string, deposit: BinanceWithdrawalInterface) {
    if (action !== 'receive') {
      this.address = deposit.address;
    }

    this.amount = +deposit.amount;
    this.action = action;

    this.date = moment(deposit['applyTime']).format(DATE_FORMAT);
    this.fee = +deposit.transactionFee;
    this.network = deposit.network;
  }
}