import { Component, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-fill-coin-data-dialog',
  templateUrl: './fill-coin-data-dialog.component.html',
  styleUrls: ['./fill-coin-data-dialog.component.scss']
})
export class FillCoinDataDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public symbol: string,
    private dialogRef: MatDialogRef<FillCoinDataDialogComponent>,
  ) { }

  onNoClick(): void {
    // this.dialogRef.close({
    //   name: 'Mdex',
    //   symbol: this.symbol,
    //   wallets: []
    // });
  }
}
