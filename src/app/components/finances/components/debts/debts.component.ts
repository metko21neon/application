import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { DebtInterface } from '../../finances.component';
import { DEBT_STATE } from '../../states/debts.state';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'startMonth', 'new', 'payed', 'endMonth'];
  debts: any = DEBT_STATE;
  dataSource: any[] = [];
  totalDebts = 0;

  constructor() { }

  ngOnInit(): void {
    this.prepareDebtsDatasource();
    this.totalDebts = this.calculateTotalDebt();
  }

  calculateTotalDebt(): number {
    return this.debts.list.reduce((acc: number, debt: DebtInterface) => (acc + debt.amount), 0);
  }

  private prepareDebtsDatasource(): void {
    this.dataSource = this.state.map((month: any) => {
      const list = JSON.parse(JSON.stringify(this.debts.list)).sort(this.sortByAmount);
      const debtsBeforePayingTotal = this.calculateTotalDebt();

      if (month.debt.list.length) {
        month.debt.list.map((debt: any) => {
          const index = this.debts.list.findIndex((item: any) => item.source === debt.source);

          if (index === -1) {
            this.debts.list.push(debt);
          } else {
            this.debts.list[index].amount = this.debts.list[index].amount + debt.amount;
          }
        });
      }

      const payedDebts = month.debt.payed.list.filter((item: any) => item.payed === true).sort(this.sortByAmount);

      this.debts.list = this.debts.list
        .map((debt: any) => {
          const item = payedDebts.find((payedDebt: any) => payedDebt.source === debt.source);
          return item ? { ...debt, amount: debt.amount - item.amount } : debt;
        })
        .filter((debt: any) => debt.amount !== 0);

      const debtsAfterPaying = JSON.parse(JSON.stringify(this.debts.list)).sort(this.sortByAmount);
      const newDebts = JSON.parse(JSON.stringify(month.debt.list)).sort(this.sortByAmount);

      const debtsAfterPayingTotal = this.calculateTotalDebt();
      const newDebtsTotal = month.debt.list.reduce((acc: number, item: any) => (acc + item.amount), 0);
      const payedDebtsTotal = payedDebts.reduce((acc: number, item: any) => (acc + item.amount), 0);

      return {
        period: month.period.string,
        debtsBeforePayingTotal,
        debtsAfterPayingTotal,
        debtsAfterPaying,
        payedDebtsTotal,
        newDebtsTotal,
        payedDebts,
        newDebts,
        list,
      }
    });
  }


  private sortByAmount(a: DebtInterface, b: DebtInterface): number {
    if (a.amount! < b.amount!) return 1;
    if (a.amount! > b.amount!) return -1;

    return 0;
  }
}
