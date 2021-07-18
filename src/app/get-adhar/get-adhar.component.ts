import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { AdhargettingService } from '../adhargetting.service';

@Component({
  selector: 'app-get-adhar',
  templateUrl: './get-adhar.component.html',
  styleUrls: ['./get-adhar.component.css']
})
export class GetAdharComponent implements OnInit {

  constructor(private router:Router, private adharListService:AdhargettingService, private activeRoute:ActivatedRoute) { }

  adharDetailsList:any=[];
  Normal:any=[];
  activatedId:number=0;
  ngOnInit(): void {
    this.activatedId=this.activeRoute.snapshot.params['id'];
     
    this.getAdharDetails(this.activatedId);

      
  }

  getAdharDetails(id:number){
    this.adharListService.getAdharList(id).subscribe(
      (result)=>{
        console.log('simple');
          console.log(result);
          this.adharDetailsList=result;
      }
      
    );

   
  }


  proceedDetails(){
    this.router.navigate(['pan-confirm']);
  }
  
}
