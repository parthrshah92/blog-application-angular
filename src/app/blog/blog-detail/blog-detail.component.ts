import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/shared/models/blog.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlogDialogComponent } from '../blog-dialog/blog-dialog.component';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  @Input() blog: Blog;
  dialogTitle = 'Update Post';

  constructor(public dialog: MatDialog, private blogService: BlogService) {}

  ngOnInit(): void {}

  editBlog(blog) {
    this.dialog.open(BlogDialogComponent, {
      data: {
        blog: blog,
        isEdit: true,
        dialogTitle: this.dialogTitle,
      },
      width: '600px',
    });
  }

  deleteBlog(blog) {
    this.dialog.open(BlogDialogComponent, {
      data: {
        blog: blog,
        isDelete: true,
      },
      width: '600px',
    });
  }
}
