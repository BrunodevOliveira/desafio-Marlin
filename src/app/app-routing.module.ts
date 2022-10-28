import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddPostComponent } from "./components/add-post/add-post.component";
import { CardPostComponent } from "./components/card-post/card-post.component";
import { DetailsPostComponent } from "./components/details-post/details-post.component";

const routes: Routes = [
  { path: "noticias", component: CardPostComponent },
  { path: "detail/:id", component: DetailsPostComponent },
  { path: "criar-post", component: AddPostComponent },
  { path: "**", redirectTo: "noticias", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
