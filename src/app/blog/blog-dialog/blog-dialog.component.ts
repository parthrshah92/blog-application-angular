import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BlogService } from 'src/app/shared/services/blog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Blog } from 'src/app/shared/models/blog.model';

@Component({
  selector: 'app-blog-edit-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.scss'],
})
export class BlogDialogComponent {
  blog: Blog;
  isDelete: boolean;
  isEdit: boolean;

  constructor(
    private blogService: BlogService,
    public dialogRef: MatDialogRef<BlogDialogComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data?: any
  ) {}

  onCancel() {
    this.dialogRef.close();
  }

  onCreate() {
    // creates the blog and shows a snackbar on succesfull creation
    this.data.blog.title &&
      this.data.blog.text &&
      this.blogService.createBlog(this.data.blog).subscribe(
        (response) => {
          this.dialogRef.close(true);
          this.openSnackBar('Create succesfull');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onSave() {
    // edit the blog and shows a snackbar on succesfull edit
    this.blogService.editBlog(this.data.blog).subscribe(
      (response) => {
        this.dialogRef.close();
        this.openSnackBar('Edit succesfull');
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onDelete(blog) {
    // delete the blog
    this.blogService.deleteBlog(blog).subscribe(
      () => {
        this.dialogRef.close();
        this.openSnackBar('Delete succesfull');
        location.reload();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, '', {
      duration: 2500,
    });
  }
}
