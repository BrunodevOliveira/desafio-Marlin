import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface IForm {
  title: string;
  message: string;
}

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  constructor(private router: Router) {}

  data: IForm = {
    title: "",
    message: "",
  };

  postCreated: IPost;

  openModal() {
    const modal = document.querySelector("dialog");
    modal.showModal();
  }

  createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: this.data.title,
        body: this.data.message,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((post: IPost) => (this.postCreated = post));
    this.openModal();
  }

  ngOnInit() {}
}
