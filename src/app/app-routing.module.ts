import { HomeComponent } from './home/home.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ListUsersComponent } from './list-users/list-users.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { EdittaskComponent } from './edittask/edittask.component';



const routes: Routes = [

  {path:'home', component:HomeComponent},

  {path:'register', component:RegisterComponent},

  {path:'login', component:LoginComponent},

  {path:'listuser', component:ListUsersComponent},
  {path:'addtask', component:AddTaskComponent},
  {path:'edittask', component:EdittaskComponent},

  {path:'', redirectTo:'home' ,pathMatch:'full'}
  

];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }