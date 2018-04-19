import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegisterNowComponent } from './register-now/register-now.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmEqualValidatorDirective } from './directive/confirm-password.directive';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/comm-component/header/header.component';
import { SidenavComponent } from './layout/comm-component/sidenav/sidenav.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { createUserService } from './services/createUser.service';
import { logInUserService } from './services/logInUser.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

const appRoutes: Routes = [
  { path: '', component: RegisterNowComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'login', component: LogInComponent},
  { path: 'forgotPassword', component: ForgotPasswordComponent},
  { path: 'resetPassword', component: ResetPasswordComponent},
  { path: 'layout', component: LayoutComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'dashboard', component: DashboardComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    RegisterNowComponent,
    SignUpComponent,
    LogInComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ConfirmEqualValidatorDirective,
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
    FormsModule,
    AngularFontAwesomeModule,
    HttpModule
  ],
  providers: [createUserService,logInUserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
