import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogService } from './shared/services/blog.service';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatPipe } from './shared/date-format.pipe';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogDialogComponent } from './blog/blog-dialog/blog-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    DateFormatPipe,
    BlogDetailComponent,
    BlogDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [BlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
