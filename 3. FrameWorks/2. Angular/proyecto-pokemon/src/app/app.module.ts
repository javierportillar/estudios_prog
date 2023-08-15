import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonesComponent } from './components/pokemones/pokemones.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'my-xsrf-cookie',
      headerName: 'my-xsrf-header',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
