import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  post: any | IPost;

  constructor(private router: Router) {
    const { extras } = this.router.getCurrentNavigation();
    this.post = extras.state;
  }

  ngOnInit() {}
}
