import { MaterialModule } from './shared/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ResComponent } from './res/res.component';
import { DateNowPipe } from './date-now.pipe';
import { DebounceClickDirective } from './modules/directives/debounce-time';
@NgModule({
  declarations: [AppComponent, SearchBarComponent, ResComponent, DateNowPipe, DebounceClickDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [DebounceClickDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
