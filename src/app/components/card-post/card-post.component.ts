import { Component, OnInit } from "@angular/core";
import { PlaceholderApiService } from "src/app/services/placeholder-api.service";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: "app-card-post",
  templateUrl: "./card-post.component.html",
  styleUrls: ["./card-post.component.scss"],
})
export class CardPostComponent implements OnInit {
  constructor(private postsApi: PlaceholderApiService) {}

  posts: IPost[];

  ngOnInit() {
    this.postsApi.getAllPosts().subscribe((result: IPost[]) => {
      this.posts = result;
    });
  }
}
