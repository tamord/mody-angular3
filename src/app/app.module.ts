import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { MydirDirective } from './mydir.directive';
import { ModyComponent } from './mody/mody.component';

@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    MydirDirective,
    ModyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
