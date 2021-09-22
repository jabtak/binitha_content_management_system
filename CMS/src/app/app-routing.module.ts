import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent} from '../app/Modules/Users/sign-up/sign-up.component';
import {SignInComponent} from '../app/Modules/Users/sign-in/sign-in.component';
import { HomeComponent} from '../app/Modules/home/home.component';
import {PostCategoryComponent} from '../app/Modules/Admin/post-category/post-category.component';
import {ViewBlogComponent } from '../app/Modules/Admin/view-blog/view-blog.component';
import { BlogPostComponent } from '../app/Modules/Admin/blog-post/blog-post.component';
import {BlogsComponent } from '../app/Modules/Users/blogs/blogs.component';
import {MyBlogsComponent} from '../app/Modules/Users/my-blogs/my-blogs.component';
import {UserProfileComponent} from '../app/Modules/Users/user-profile/user-profile.component';
import {ChangePasswordComponent} from '../app/Modules/Users/change-password/change-password.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'post-category', component: PostCategoryComponent},
    {path: 'blog-post', component:BlogPostComponent},
    {path: 'view-blog/:id', component:ViewBlogComponent},
    {path: 'blogs', component:BlogsComponent},
    {path: 'my-blogs', component:MyBlogsComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
