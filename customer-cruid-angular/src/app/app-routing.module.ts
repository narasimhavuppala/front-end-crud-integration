import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './customer/customer-dashboard/customer-dashboard.component';

const routes: Routes = [

  { path: 'customer', component: CustomerDashboardComponent },
  {
    path: '*', redirectTo: '/'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
