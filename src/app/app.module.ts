import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink, createHttpLink } from '@apollo/client/link/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { GuestModule } from './guest/guest.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    GuestModule,
    SharedModule,
    BrowserAnimationsModule,
    
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.concat(createHttpLink({ uri: 'http://localhost:8000/graphql' })) // Replace with your GraphQL endpoint
        };
      },
      deps: [HttpLink]
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }



















// import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AdminModule } from './admin/admin.module';
// import { GuestModule } from './guest/guest.module';
// import { SharedModule } from './shared/shared.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';



// @NgModule({
//   declarations: [
//     AppComponent,
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     AdminModule,
//     GuestModule,
//     SharedModule,
//     BrowserAnimationsModule,
//     ReactiveFormsModule,
//     FormsModule,
//     ToastrModule.forRoot(),
//   ],
//   providers: [
//     provideClientHydration(),
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule { }
