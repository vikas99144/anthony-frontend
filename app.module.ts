import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
/* import { HttpModule } from '@angular/http'; */
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserService } from './services/user.service';
import { GlobalService } from './services/global.service';
import { AuthguardService } from './services/authguard.service';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { JasperoAlertsModule } from '@jaspero/ng2-alerts';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotComponent,
    HomeComponent,
    HeaderComponent,
    FriendsComponent,
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    JasperoAlertsModule,
    NgxCarouselModule
  ],
  providers: [UserService, GlobalService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
