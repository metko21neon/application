import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'im-crypto-details',
  templateUrl: './crypto-details.component.html',
  styleUrls: ['./crypto-details.component.scss']
})
export class CryptoDetailsComponent implements OnInit, OnDestroy {

  coinDetails: any;

  private subscription: Subscription = new Subscription();

  constructor(
    private dbService: NgxIndexedDBService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setAnamnesStepListSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setAnamnesStepListSubscription(): void {
    const stream$ = this.route.params.pipe(
      switchMap((params: Params) => {
        console.log('params:', params, params['id']);
        return this.dbService.getByKey('coinList', Number.parseInt(params['id'], 10))
      })
    ).subscribe((coinDetails: any) => this.coinDetails = coinDetails);

    this.subscription.add(stream$);
  }

}
