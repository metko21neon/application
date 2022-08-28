import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { combineLatest, Subscription } from 'rxjs';

import { CoinDataService } from './services/coin-data.service';
import { FirebaseService } from './services/firebase.service';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(
    private coinDataService: CoinDataService,
    private firebaseService: FirebaseService,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.getCoinList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCoinList(): void {
    const stream$ = combineLatest([
      this.coinDataService.getCoinData(),
      this.appService.getCoinList()
    ]).subscribe();

    this.subscription.add(stream$);
  }

  // private updateDirectionConfig(): Observable<any> {
  //   const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`;

  //   const headers = new HttpHeaders({
  //     'X-CMC_PRO_API_KEY': '90c1ef10-0914-4ade-b15c-e92216c772f7',
  //     'Accept': 'application/json'
  //   });

  //   return this.http.get<any>(url, { headers });
  // }
}
