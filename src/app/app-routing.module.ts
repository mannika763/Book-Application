import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomehomeComponent } from './components/homehome/homehome.component';


const routes: Routes = [
  {
    path: '',
    component: HomehomeComponent
  },


      {
        path: 'signup',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
