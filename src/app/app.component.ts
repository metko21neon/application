import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AppService } from './app.service';

export interface ColumnInterface {
  selected: boolean;
  position: number;
  shortcut: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getCoinListSettings();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getCoinListSettings(): void {
    const stream$ = this.appService.getCoinListSettings().subscribe();

    this.subscription.add(stream$);
  }

  // private getSystemInfoSettings(): void {
  //   const stream$ = this.updateDirectionConfig().subscribe();

  //   this.subscription.add(stream$);
  // }

  // private updateDirectionConfig(): Observable<any> {
  //   const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`;

  //   const headers = new HttpHeaders({
  //     'X-CMC_PRO_API_KEY': '90c1ef10-0914-4ade-b15c-e92216c772f7',
  //     'Accept': 'application/json'
  //   });

  //   return this.http.get<any>(url, { headers });
  // }
}
