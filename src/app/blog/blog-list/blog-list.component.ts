import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { Blog } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  @Input() blogs: Blog;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // gets the list of all the blogs and sorts by timestamp
    this.blogService.getBlogs().subscribe(
      (resp: any) => {
        if (resp) {
          this.blogs = resp.sort((a, b) => {
            return (
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            );
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
