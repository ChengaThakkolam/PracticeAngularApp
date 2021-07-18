import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdharDetailsComponent } from './adhar-details/adhar-details.component';
import { AppComponent } from './app.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { EnterAdharComponent } from './enter-adhar/enter-adhar.component';
import { GetAdharComponent } from './get-adhar/get-adhar.component';
import { OtpComponent } from './otp/otp.component';
import { PanRegisterConfirmComponent } from './pan-register-confirm/pan-register-confirm.component';
import { PanRegisterComponent } from './pan-register/pan-register.component';
import { PanStatusComponent } from './pan-status/pan-status.component';

const routes: Routes = [
  {path:'home', component:AppComponent} // home component
  ,
  {path:'get-adhar', component:AdharDetailsComponent} // get adhar details component
  ,
  {path:'pan-register', component:PanRegisterComponent} // pan register component
  ,
  {path:'enter-adhar-no', component:EnterAdharComponent},
  {path:'otp', component:OtpComponent},
  {path:'get-adhar/:id', component:GetAdharComponent},
  {path:'pan-confirm', component:PanRegisterConfirmComponent},
  {path:'pan-status', component:PanStatusComponent},
  {path:'dialog', component:DialogExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
