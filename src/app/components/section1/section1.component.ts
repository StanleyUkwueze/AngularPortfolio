import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css'],
})
export class Section1Component implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openForm() {
    this.dialog.open(FormComponent);
    const dialogConfig = new MatDialogConfig<FormComponent>();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
  }
}
