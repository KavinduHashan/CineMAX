import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MovieComponent } from './pages/movie/movie.component';
import { OfferComponent } from './pages/offer/offer.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowRegisterComponent } from './pages/show-register/show-register.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ShowFeedbackComponent } from './pages/show-feedback/show-feedback.component';
import { AddofferComponent } from './pages/addoffer/addoffer.component';
import { AddmovieComponent } from './pages/addmovie/addmovie.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ShowbookingComponent } from './pages/showbooking/showbooking.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ChatAppComponent } from './pages/chat-app/chat-app.component';
import { ChatAppAdminComponent } from './pages/chat-app-admin/chat-app-admin.component';
import { ChatAppUserComponent } from './pages/chat-app-user/chat-app-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    FeedbackComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MovieComponent,
    OfferComponent,
    RegisterComponent,
    ShowRegisterComponent,
    HomeAdminComponent,
    AdminLoginComponent,
    ShowFeedbackComponent,
    AddofferComponent,
    AddmovieComponent,
    BookingComponent,
    ShowbookingComponent,
    LoginAdminComponent,
    WelcomeComponent,
    ChatAppComponent,
    ChatAppAdminComponent,
    ChatAppUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
