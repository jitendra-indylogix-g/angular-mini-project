import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full' },
  { path:'home', component:HomeComponent},
  { path:'about', component:AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'login', component: LogInComponent },
  { path:'register', component: RegisterComponent },
  { path:'**', component:PageNotFoundComponent} //always put in last

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ HomeComponent , AboutComponent , ContactComponent , PageNotFoundComponent , LogInComponent ,  RegisterComponent];