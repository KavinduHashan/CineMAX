import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [
  {path : "home", component:HomeComponent},
  {path : "register", component:RegisterComponent},
  {path : "login", component:LoginComponent},
  {path : "showRegister", component:ShowRegisterComponent},
  {path : "feedback", component:FeedbackComponent},
  {path : "movie", component:MovieComponent},
  {path : "offer", component:OfferComponent},
  {path : "contactus", component:ContactusComponent},
  {path : "logout", component:LogoutComponent},
  {path : "homeAdmin", component:HomeAdminComponent},
  {path : "adminLogin", component:AdminLoginComponent},
  {path : "showFeedback", component:ShowFeedbackComponent},
  {path : "addoffer", component:AddofferComponent},
  {path : "addmovie", component:AddmovieComponent},
  {path : "booking", component:BookingComponent},
  {path : "showbooking", component:ShowbookingComponent},
  {path : "loginAdmin", component:LoginAdminComponent},
  {path : "", component:WelcomeComponent},
  {path : "chatApp", component:ChatAppComponent},
  {path : "chatAppUser", component:ChatAppUserComponent},
  {path : "chatAppAdmin", component:ChatAppAdminComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
