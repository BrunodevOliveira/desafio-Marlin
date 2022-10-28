import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPostComponent } from './components/card-post/card-post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DetailsPostComponent } from './components/details-post/details-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPostComponent,
    SidebarComponent,
    DetailsPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
