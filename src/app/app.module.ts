import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ApplicationComponent } from './application/application.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RepliesComponent } from './replies/replies.component';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'app-request',component: ApplicationComponent },
  { path: 'app-replies/:id',component: RepliesComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApplicationComponent,
    RepliesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
