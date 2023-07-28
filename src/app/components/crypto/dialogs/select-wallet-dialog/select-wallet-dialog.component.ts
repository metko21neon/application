import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

import { BinanceDepositInterface } from 'src/app/components/binance/interfaces/binance-deposit.interface';
import { DATE_FORMAT } from 'src/app/services/binance-synchronization.service';

import * as COIN_LIST from "./../../../../jsons/coins.json";

import moment from 'moment';

@Component({
  selector: 'app-select-wallet-dialog',
  templateUrl: './select-wallet-dialog.component.html',
  styleUrls: ['./select-wallet-dialog.component.scss']
})
export class SelectWalletDialogComponent {

  walletList: any[] = [];
  wallet!: any;
  address = '';
  date = '';
  fee = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public deposit: BinanceDepositInterface,
    private dialogRef: MatDialogRef<SelectWalletDialogComponent>) {
    this.date = moment(deposit.insertTime).format(DATE_FORMAT);

    const coin = this.findCoinBySymbol(deposit.coin);
    this.filterWalletsByNetwork(coin.wallets);
  }

  save(): void {
    this.dialogRef.close({ ...this.deposit, from: this.address, fee: this.fee });
  }

  selectDepositNetwork(wallet: { address: string; }): void {
    this.address = wallet.address;
    this.wallet = wallet;
  }

  private filterWalletsByNetwork(wallets: any[]): void {
    this.walletList = wallets.filter((wallet: { address: string; }) => wallet.address !== this.deposit.address);
  }

  private findCoinBySymbol(symbol: string): any {
    const coins = JSON.parse(JSON.stringify((COIN_LIST as any).default));
    const coinIndex = coins.findIndex((item: any) => item.symbol === symbol);
    return coins[coinIndex];
  }
}
