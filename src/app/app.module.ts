import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdharDetailsComponent } from './adhar-details/adhar-details.component';
import { PanRegisterComponent } from './pan-register/pan-register.component';
import { EnterAdharComponent } from './enter-adhar/enter-adhar.component';
import { OtpComponent } from './otp/otp.component';
import { GetAdharComponent } from './get-adhar/get-adhar.component';
import { PanRegisterConfirmComponent } from './pan-register-confirm/pan-register-confirm.component';
import { PanStatusComponent } from './pan-status/pan-status.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AdhargettingService } from './adhargetting.service';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    AdharDetailsComponent,
    PanRegisterComponent,
    EnterAdharComponent,
    OtpComponent,
    GetAdharComponent,
    PanRegisterConfirmComponent,
    PanStatusComponent,
    DialogExampleComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AdhargettingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
