import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTableModule} from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { ExamTopComponent } from './pages/exam/exam-top/exam-top.component';
import { MarkListComponent } from './pages/mark/mark-list/mark-list.component';
import { QuestionTopListComponent } from './pages/question/question-top-list/question-top-list.component';
import { MarkTopListComponent } from './pages/top-mark/mark-top-list/mark-top-list.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { TableComponent } from './component/mat-table/table.component';
import { MatDialogComponent } from './component/mat-dialog/mat-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ComDetailComponent } from './component/com-detail/com-detail.component';

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
    QuestionTopListComponent,
    HeaderComponent,
    TableComponent,
    MatDialogComponent,
    ComDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    NgChartsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
