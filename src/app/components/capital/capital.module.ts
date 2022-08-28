import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

// Modules
import { CapitalRoutingModule } from './capital-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

// Components
import { CapitalComponent } from './capital.component';

@NgModule({
  declarations: [
    CapitalComponent
  ],
  imports: [
    CapitalRoutingModule,
    CommonModule,
    PipesModule,

    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
  ]
})
export class CapitalModule { }
