import { Component, OnInit } from '@angular/core';
import { WalletService } from './wallet.service';

@Component({
  selector: 'app-binance',
  templateUrl: './binance.component.html',
  styleUrls: ['./binance.component.scss'],
  providers: [WalletService]
})
export class BinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
