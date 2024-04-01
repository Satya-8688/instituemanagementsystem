import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AllstudentsComponent } from './allstudents/allstudents.component';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent ,  canActivate:[AuthenticationGuard],children:[
    {path:'allstudents', component:AllstudentsComponent},
    {path:'createstudent',component:CreatestudentComponent}
  ]},
  { path: '', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
