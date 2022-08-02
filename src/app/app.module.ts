import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { HomeComponent } from './home/home.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { ViewUserComponent } from './view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUsersComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    AddTaskComponent,
    HomeComponent,
    EdittaskComponent,
    ListtaskComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
