import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChangeContentDirective } from './one.directive';
import { SquareDirective } from './square.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChangeContentDirective,
    SquareDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
