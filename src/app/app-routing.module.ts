import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthenGuard } from './guards/authen.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PassbookComponent } from './passbook/passbook.component';
import { RegisterComponent } from './register/register.component';
import { RegistrationComponent } from './registration/registration.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,canActivate:[AuthenGuard]},
  {path:'account',component:AccountComponent,canActivate:[AuthenGuard]},
  {path:'transfers',component:TransfersComponent,canActivate:[AuthenGuard]},
  {path:'passbook',component:PassbookComponent,canActivate:[AuthenGuard]},
  {path:'customers',component:RegisterComponent},
  {path:'registrationdone', component:RegistrationComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

