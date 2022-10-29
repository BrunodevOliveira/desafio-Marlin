import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { CardPostComponent } from "./components/card-post/card-post.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DetailsPostComponent } from "./components/details-post/details-post.component";
import { AddPostComponent } from "./components/add-post/add-post.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardPostComponent,
    SidebarComponent,
    DetailsPostComponent,
    AddPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
