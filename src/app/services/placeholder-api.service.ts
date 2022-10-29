import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface IForm {
  title: string;
  message: string;
}

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=UTF-8",
  }),
};

@Injectable({
  providedIn: "root",
})
export class PlaceholderApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = "https://jsonplaceholder.typicode.com/posts";

  getAllPosts() {
    return this.http.get(this.baseUrl);
  }

  getPostById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addPost(post: IForm) {
    return this.http.post(this.baseUrl, post, httpOptions);
  }
}
