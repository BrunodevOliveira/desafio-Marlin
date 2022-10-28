import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CardPostComponent } from "./components/card-post/card-post.component";
import { DetailsPostComponent } from "./components/details-post/details-post.component";

const routes: Routes = [
  { path: "noticias", component: CardPostComponent },
  { path: "detail/:id", component: DetailsPostComponent },
  { path: "**", redirectTo: "noticias", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
