import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FetchQuestionService } from './fetch-question.service';
import { RandomNumberService } from './random-number.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchQuestionService, Title, RandomNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
