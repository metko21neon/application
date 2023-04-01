import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StateInterface } from './interfaces/state.interface';
import { Observable } from 'rxjs';
import { FinancesService } from './finances.service';

export interface DebtInterface {
  source: string;
  amount: number;
  payed?: boolean;
  description?: string;
}

export interface IncomeInterface {
  source: string;
  amount: number;
}

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinancesComponent implements OnInit {

  finances$!: Observable<StateInterface[]>;

  constructor(private financesService: FinancesService) {
    this.finances$ = this.financesService.state$;
  }

  ngOnInit(): void {
  }
}
