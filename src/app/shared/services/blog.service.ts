import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogsUrl = 'https://restedblog.herokuapp.com/pshah/api';

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get(this.blogsUrl);
  }

  createBlog(blogData) {
    return this.http.post(this.blogsUrl, blogData);
  }

  editBlog(blogData) {
    return this.http.post(this.blogsUrl + '/' + blogData.id, blogData);
  }

  deleteBlog(blogData) {
    return this.http.delete(this.blogsUrl + '/' + blogData.id, {
      responseType: 'text',
    });
  }
}
