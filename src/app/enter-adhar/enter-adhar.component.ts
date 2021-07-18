import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-adhar',
  templateUrl: './enter-adhar.component.html',
  styleUrls: ['./enter-adhar.component.css']
})
export class EnterAdharComponent implements OnInit {

  constructor(private router:Router) { }

  adharNO:number=0;

  ngOnInit(): void {
  }

  sendRequest(a:number){
    
    this.router.navigate(['get-adhar',this.adharNO]);
  }
}
