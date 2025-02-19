// src/app/app.module.server.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';  // Import the main AppModule
import { AppComponent } from './app.component'; // Import the root component

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent], // Bootstrap the main app component
})
export class AppServerModule {}










// import { NgModule } from '@angular/core';
// import { ServerModule } from '@angular/platform-server';

// import { AppModule } from './app.module';
// import { AppComponent } from './app.component';

// @NgModule({
//   imports: [
//     AppModule,
//     ServerModule,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppServerModule {}
