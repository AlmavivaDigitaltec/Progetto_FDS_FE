import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { UserViewComponent } from './admin-home/user-view/user-view.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'userHome', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'adminHome', component: AdminHomeComponent, canActivate: [AuthGuard] },
    { path: 'adminHome/updateUtente/:matricola', component: UserViewComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
  //  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);