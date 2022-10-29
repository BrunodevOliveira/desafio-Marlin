import { PlaceholderApiService } from "src/app/services/placeholder-api.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
@Component({
  selector: "app-details-post",
  templateUrl: "./details-post.component.html",
  styleUrls: ["./details-post.component.scss"],
})
export class DetailsPostComponent implements OnInit {
  post: unknown | IPost = {
    id: 1,
    title: "",
    body: "",
    userId: 1,
  };

  constructor(
    private activeRoute: ActivatedRoute,
    private postsApi: PlaceholderApiService
  ) {}

  ngOnInit() {
    const id = this.activeRoute.snapshot.paramMap.get("id");
    this.postsApi.getPostById(id).subscribe((result) => {
      this.post = result;
    });
  }
}
