import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { GetDetailsComponent } from './components/get-details/get-details.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'admin-home',component:AdminHomeComponent},
  {path:'update-user/:id',component:UpdateUserComponent},
  {path:'getdetails',component:GetDetailsComponent},
   {path:'login',loadChildren: ()=>import('./modules/login/login.module').then(m => m.LoginModule)},
  {path:'signup',loadChildren:()=>import('./modules/signup/signup.module').then(m=>m.SignupModule)},
  {path:'user-home',loadChildren:()=>import('./modules/user-home/user-home.module').then(m=>m.UserHomeModule)}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
