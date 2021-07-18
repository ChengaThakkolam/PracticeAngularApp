import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pan-register',
  templateUrl: './pan-register.component.html',
  styleUrls: ['./pan-register.component.css']
})
export class PanRegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  usingAdharDetails(){
    this.router.navigate(['enter-adhar-no']);
  }
  

}
