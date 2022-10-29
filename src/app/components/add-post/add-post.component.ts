import { Component, OnInit } from "@angular/core";
import { PlaceholderApiService } from "src/app/services/placeholder-api.service";

interface IForm {
  title: string;
  message: string;
}

interface IPost {
  id: number;
  title: string;
  userId: number;
  message?: string;
}

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  constructor(private postsApi: PlaceholderApiService) {}

  data: IForm = {
    title: "",
    message: "",
  };

  postCreated: IPost = {
    id: 1,
    title: "",
    userId: 1,
    message: "",
  };

  openModal() {
    const modal = document.querySelector("dialog");
    modal.showModal();
  }

  createPost() {
    this.postsApi.addPost(this.data).subscribe((result: IPost) => {
      this.postCreated = result;
      this.openModal();
    });
  }

  ngOnInit() {}
}
