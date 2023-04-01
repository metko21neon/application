import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { SAVINGS_STATE } from '../../../../states/finances.state';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {

  @Input() state!: StateInterface[];

  savings = SAVINGS_STATE;
  list: any[] = [];
  total = {
    savings: 0
  };

  ngOnInit(): void {
    this.list = this.state.map((item: StateInterface) => {
      return {
        period: item.period.string,
        list: item.savings?.list
      }
    });

    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.total.savings = this.savings.list.reduce((acc: number, item: any) => {
      return acc + item.amount;
    }, 0);

    this.total.savings = this.total.savings + this.list.reduce((acc: number, savings: any) => {
      return acc + savings.list.reduce((acc: number, item: any) => acc + item.amount, 0);
    }, 0);
  }
}
