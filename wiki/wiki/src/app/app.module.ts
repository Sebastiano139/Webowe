import { UserService } from './services/user.service';
import { RegisterLayoutComponent } from './layouts/register-layout.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      HomeLayoutComponent,
      LoginLayoutComponent,
      LoginComponent,
      RegisterLayoutComponent,
      RegisterComponent,
      HomeComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      NgbModule,
      HttpClientModule
   ],
   providers: [
      AuthService,
      AuthGuard,
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
