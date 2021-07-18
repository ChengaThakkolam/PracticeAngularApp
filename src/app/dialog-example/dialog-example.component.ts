import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ExampleComponent } from '../example/example.component';


@Component({
  selector: 'dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    console.log('this function is working');
    this.dialog.open(ExampleComponent,{
      width: '250px'
    }
    
    );
  }

}
