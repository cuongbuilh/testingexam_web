import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { HomeComponent } from './component/pages/home/home.component';
import { RegisterComponent } from './component/pages/register/register.component';
import { LoginComponent } from './component/pages/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './component/dashboard/footer/footer.component';
import { MenuComponent } from './component/dashboard/menu/menu.component';
import { MarkListComponent } from './component/pages/mark/mark-list/mark-list.component';
import { ExamTopComponent } from './component/pages/exam/exam-top/exam-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table';
import { MarkTopListComponent } from './component/pages/top-mark/mark-top-list/mark-top-list.component';
import { QuestionTopListComponent } from './component/pages/question/question-top-list/question-top-list.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    MenuComponent,
    MarkListComponent,
    ExamTopComponent,
    MarkTopListComponent,
    QuestionTopListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
