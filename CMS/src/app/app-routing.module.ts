import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent} from '../app/Modules/Users/sign-up/sign-up.component';
import {SignInComponent} from '../app/Modules/Users/sign-in/sign-in.component';
import { HomeComponent} from '../app/Modules/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
