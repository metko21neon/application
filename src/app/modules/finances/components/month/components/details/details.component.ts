import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {

  @Input() list: any[] = [];
  @Input() period = '';

  displayedColumns = ['income', 'taxes', 'savings', 'costs', 'newDebts', 'payedDebts', 'investing', 'lifeCosts'];
  dataSource: any[] = [];

  ngOnInit(): void {
    this.setDataSource();
  }

  private setDataSource(): void {
    this.dataSource = this.list.map((item: any) => {
      return {
        income: {
          list: [{
            amount: item.amount,
            source: item.source,
          }]
        },
        taxes: item.taxes,
        savings: item.savings,
        costs: item.costs,
        newDebts: item.debt,
        payedDebts: item.debt?.payed,
        investing: item.investing,
        lifeCosts: item.lifeCosts,
      };
    });
  }
}
