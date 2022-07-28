import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { LoginComponent } from './component/pages/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
