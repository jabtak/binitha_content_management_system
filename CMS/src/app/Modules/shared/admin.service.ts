import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Category } from './../Admin/model/admin.model';
import {Post,Comment} from './../Admin/model/admin.model';
import { User } from '../Users/model/user.model';

@Injectable()
export class AdminService {

  readonly baseURL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {

   }
  getCategories(){
    return this.http.get('http://localhost:3000/category');
  }
  getPosts(){
    return this.http.get('http://localhost:3000/post');
  }

  addCategory(cat: Category){
    return this.http.post('http://localhost:3000/category', cat);
  }

  updateCategory(cat: Category,id:any){
    return this.http.put('http://localhost:3000/category/'+ id, cat);
  }

  deleteCategory(id:any){
    return this.http.delete('http://localhost:3000/category/' + id);
  }
  
  updateBlog(blog: Post,id:any){
    return this.http.put('http://localhost:3000/post/'+ id, blog);
  }

  deleteBlog(id:any){
    return this.http.delete('http://localhost:3000/post/' + id);
  }

  getBlogById(id:any){
    return this.http.get('http://localhost:3000/post/' + id);
  }

  login(user: User){
    return this.http.post('http://localhost:3000/user/login', user);
  }

  getUserById(id: any){
    return this.http.get('http://localhost:3000/user/' + id);
  }

  updateUserProfile(id: any, usr: User){
    return this.http.put('http://localhost:3000/user/'+ id, usr);
  }

  addComment(comment: Comment){
    return this.http.post('http://localhost:3000/comment', comment);
  }

  getComments(id:any){
    return this.http.get('http://localhost:3000/comment/' + id);
  }
  
  addPost(pos: Post){
    return this.http.post('http://localhost:3000/post', pos);
  }
  getAllBlogs(){
    return this.http.get('http://localhost:3000/post');
  }
}