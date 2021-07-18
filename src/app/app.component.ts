import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PANCARD';

  constructor(private router:Router){

  }

  newPanCard(){
      this.router.navigate(['pan-register']);
  }

  checkPanCardStatus(){
    this.router.navigate(['pan-status']);
  }
}
