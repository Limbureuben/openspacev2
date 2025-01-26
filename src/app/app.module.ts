import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './common/homepage/homepage.component';
import { AboutComponent } from './common/about/about.component';
import { ContactComponent } from './common/contact/contact.component';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from './common/common.module';
import { GuestModule } from './guest/guest.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    CommonModule,
    GuestModule,
    SharedModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
