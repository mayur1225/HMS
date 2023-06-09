// angular import
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Project import
import { AdminComponent } from './components/layouts/admin/admin.component';
import { GuestComponent } from './components/layouts/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard/default',
        loadComponent: () => import('./pages/default/dashboard/dashboard.component')
      },
      {
        path: 'typography',
        loadComponent: () => import('./pages/ui-component/typography/typography.component')
      },
      {
        path: 'color',
        loadComponent: () => import('./pages/ui-component/ui-color/ui-color.component')
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./pages/other/sample-page/sample-page.component')
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/authentication/login/login.component')
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/authentication/register/register.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
