import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './common/auth.guard';
import { FormsModule }   from '@angular/forms';
import { UserService } from './common/services/user.service';
import { HttpModule } from '@angular/http';
import { HttpService } from './common/services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    UserService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
