import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AdminHeaderComponent } from './shared/admin-header/admin-header.component';
import { AdminSidebarComponent } from './shared/admin-sidebar/admin-sidebar.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {
    path: "app",
    component: HeaderComponent,
    loadChildren: () =>
    import('./shared/shared.module').then((m)=> m.SharedModule)
  },
  {
    path: "app",
    component: FooterComponent,
    loadChildren: ()=>
    import('./shared/shared.module').then((m)=>m.SharedModule)
  },
  {
    path: "app",
    component: AdminHeaderComponent,
    loadChildren: ()=>
    import('./shared/shared.module').then((m)=>m.SharedModule)
  },
  {
    path: "app",
    component: AdminSidebarComponent,
    loadChildren: ()=>
    import('./shared/shared.module').then((m)=>m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
