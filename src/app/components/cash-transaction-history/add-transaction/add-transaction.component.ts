import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {

  form: FormGroup = this.formBuilder.group({
    month: '',
    deposit: this.formBuilder.group({
      UAH: 0,
      USD: 0
    }),
    withdraw: 0
  });

  constructor(
    private dialogRef: MatDialogRef<AddTransactionComponent>,
    private formBuilder: FormBuilder
  ) { }

  save(): void {
    this.dialogRef.close(this.form.value);
  }
}
