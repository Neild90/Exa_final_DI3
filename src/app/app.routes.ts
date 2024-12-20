import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MainComponent } from './main/main.component';
import { authGuardGuard } from './auth-guard.guard';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    {path: 'profile', component:ProfileComponent},
    { path: 'posts', component: PostsComponent, canActivate: [authGuardGuard] },
    { path: 'users', component: UsersComponent, canActivate: [authGuardGuard] },
    { 
        path: 'main', 
        component: MainComponent, 
        canActivate: [authGuardGuard], 
        children: [
          { path: 'posts', component: PostsComponent },
          { path: 'users', component: UsersComponent },
        ] 
      },
];
