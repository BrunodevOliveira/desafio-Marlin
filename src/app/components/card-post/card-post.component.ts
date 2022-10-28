import { Component, OnInit } from "@angular/core";

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
  constructor() {}

  posts: IPost[];

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: IPost[]) => (this.posts = data));
  }
}
