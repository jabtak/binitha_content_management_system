import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Modules/Users/sign-up/sign-up.component';
import { HeaderComponent } from './Modules/header/header.component';
import { FooterComponent } from './Modules/footer/footer.component';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './Modules/shared/signup.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './Modules/Users/sign-in/sign-in.component';
import { HomeComponent } from './Modules/home/home.component';
import { PostCategoryComponent } from './Modules/Admin/post-category/post-category.component';
import {AdminService} from './Modules/shared/admin.service';
import { BlogPostComponent } from './Modules/Admin/blog-post/blog-post.component';
import { ViewBlogComponent } from './Modules/Admin/view-blog/view-blog.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { BlogsComponent } from './Modules/Users/blogs/blogs.component';
import { MyBlogsComponent } from './Modules/Users/my-blogs/my-blogs.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    HomeComponent,
    PostCategoryComponent,
    BlogPostComponent,
    ViewBlogComponent,
    BlogsComponent,
    MyBlogsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSummernoteModule
  ],
  providers: [ SignupService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
