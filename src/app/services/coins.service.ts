import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import * as COIN_LIST from "./../jsons/coins.json";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FillCoinDataDialogComponent } from '../components/crypto/dialogs/fill-coin-data-dialog/fill-coin-data-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  coins$!: Observable<any[]>;

  private coinsState: any[] = JSON.parse(JSON.stringify((COIN_LIST as any).default));
  private coinsSubject = new BehaviorSubject<any[]>(this.coinsState);

  constructor(private dialog: MatDialog) {
    this.coins$ = this.coinsSubject.asObservable();
  }

  get coins(): any[] {
    return this.coinsSubject.getValue();
  }

  async findCoinBySymbol(symbol: string): Promise<any> {
    const coinIndex = this.coinsState.findIndex((item: any) => item.symbol === symbol);
    return coinIndex === -1 ? await this.prepareCoin(symbol) : this.coinsState[coinIndex];
  }

  private async prepareCoin(symbol: string): Promise<any> {
    const config: MatDialogConfig = {
      disableClose: true,
      data: symbol,
    };

    const coin = await firstValueFrom(this.dialog.open(FillCoinDataDialogComponent, config).afterClosed());
    this.coinsState.push(coin);

    return this.findCoinBySymbol(symbol);
  }
}
