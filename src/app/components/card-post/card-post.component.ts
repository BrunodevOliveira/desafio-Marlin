import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {}

  posts: IPost[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: IPost[]) => (this.posts = data));
  }

  goToPostDetails(post: IPost, id: string) {
    this.router.navigateByUrl(`/detail/${{ id }}`, { state: post });
  }
}
