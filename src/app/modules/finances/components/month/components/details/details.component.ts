import { Component, Input, OnInit } from '@angular/core';

import { FinancesService } from '../../../../finances.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() period = '';

  constructor(private financesService: FinancesService) { }

  ngOnInit(): void {
    console.log('period:', this.period);
  }

}
