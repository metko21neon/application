import { Component, Input, OnInit } from '@angular/core';

import { StateInterface } from '../../interfaces/state.interface';
import { CostsService } from './costs.service';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {

  @Input() state!: StateInterface[];

  displayedColumns = ['period', 'amount', 'costs'];

  constructor(public costsService: CostsService) { }

  ngOnInit(): void {
    this.costsService.setDataSource();
    this.costsService.calculateRest();
  }
}