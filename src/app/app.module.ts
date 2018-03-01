import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';
import { AssistantListComponent } from './assistant-list/assistant-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAssistantComponent,
    AssistantListComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
