import { BinanceDepositInterface } from "../interfaces/binance-deposit.interface";
import { DATE_FORMAT } from "../../../app.component";

import moment from 'moment';

export class BinanceDepositModel {

  action = "transfer";
  address = '';
  amount = 0;

  date = '';
  fee = 0;
  network = '';

  constructor(action: string, deposit: BinanceDepositInterface) {
    if (action !== 'receive') {
      this.address = deposit.address;
    }

    this.amount = +deposit.amount;
    this.action = action;

    this.date = moment(deposit['insertTime']).format(DATE_FORMAT);
    this.fee = +deposit.fee;
    this.network = deposit.network;
  }
}