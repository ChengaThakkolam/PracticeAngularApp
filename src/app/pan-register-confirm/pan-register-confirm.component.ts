import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pan-register-confirm',
  templateUrl: './pan-register-confirm.component.html',
  styleUrls: ['./pan-register-confirm.component.css']
})
export class PanRegisterConfirmComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  dialogOpen(){
    this.route.navigate(['dialog']);
  }

}
