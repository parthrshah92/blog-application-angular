import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog/blog-dialog/blog-dialog.component';
import { Blog } from './shared/models/blog.model';
import { BlogService } from './shared/services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public dialog: MatDialog, private blogService: BlogService) {}

  dialogTitle = 'Create Post';
  title = 'Angular-CRUD-Post';
  blogs: Blog;

  onAddPost() {
    this.dialog
      .open(BlogDialogComponent, {
        data: {
          blog: {
            title: '',
            text: '',
          },
          dialogTitle: this.dialogTitle,
        },
        width: '600px',
      })
      .afterClosed()
      .subscribe((result) => {
        this.getRefreshedBlogs(result);
      });
  }

  getRefreshedBlogs(result: any) {
    // gets the blogs list after the CRUD operation
    result &&
      this.blogService.getBlogs().subscribe(
        (resp: any) => {
          this.blogs = this.getSortedBlogs(resp);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getSortedBlogs(data: any) {
    // sorting the blogs based on timestamp
    return data.sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });
  }
}
