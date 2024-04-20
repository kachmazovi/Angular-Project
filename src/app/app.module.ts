import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestViewComponent } from './test-view/test-view.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangeColorDirective } from './change-color.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { LoginService } from './services/login.service';
@NgModule({
  declarations: [
    AppComponent,
    TestViewComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ChangeColorDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
