import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openForm() {
    this.dialog.open(FormComponent);
    const dialogConfig = new MatDialogConfig<FormComponent>();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
  }
}
