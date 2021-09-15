import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { Post,Category } from '../model/admin.model';

import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpRequest,
} from "@angular/common/http";

declare const socket: any;

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  post: Post;
  submitted: any = false;
  categories: Category[];
  blogs: Post[];
  isEdit: any=false;
  showGrid: any=true;
  selectedFile: any;
  fReader: any;
  name = "";
  uploadPercent: any;
  
  constructor(private http: HttpClient,private service: AdminService) { 
    this.post= new Post();
    this.categories = [new Category()];
    this.blogs=[new Post()];
  }

  ngOnInit(): void {
    this.getcategories();
    this.getAllBlogs();
    
  }

  getcategories(){
    this.service.getCategories().subscribe((result:any)=>{
      this.categories = result;
      console.log(this.categories);
    });
  }
  

  addPost(){
    var date = new Date();
    console.log(this.post);
    this.post.createdBy="534543534";
    this.post.createdDate = date;
    this.service.addPost(this.post).subscribe((result)=>{
      this.post = new Post();
      this.showGrid=true;
      this.resumableUpload();
      
    });
  }

  
  addNewClick(){
    this.isEdit = false;
    this.showGrid=false;
  }

  edit(id:any, post: Post){
    this.showGrid=false;
    this.post = post;
    this.post.image=null;
    console.log(id);
    this.isEdit = true;
  }

  delete(id:any){
    this.service.deleteBlog(id).subscribe((result)=>{
      //this.category = new Category();
      this.getAllBlogs();
      //this.isEdit=false;
      this.showGrid=true;
    });
  }
  
  update(){
    this.service.updateBlog(this.post, this.post._id).subscribe((result)=>{
      this.post = new Post();
      this.getAllBlogs();
      this.resumableUpload();

      this.isEdit=false;
      this.showGrid=true;
    });
  }


    getAllBlogs(){
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    this.service.getAllBlogs().subscribe((result:any)=>{
    this.blogs = result;
    });
  }



  //upload start
  onFileSelect(event:any) {
    debugger;
    this.selectedFile = event.target.files[0];
    this.name = this.selectedFile.name;
    console.log(this.selectedFile);
  }
  
  resumableUpload() {
    debugger;
    let fileId = `${this.selectedFile.name}-${this.selectedFile.lastModified}`;
    let headers = new HttpHeaders({
      size: this.selectedFile.size.toString(),
      "x-file-id": fileId,
      name: this.name,
    });
  
    this.http.get("http://localhost:3000/status", { headers: headers })
      .subscribe((res: any) => {
        console.log(JSON.stringify(res));
        if (res.status === "file is present") {
          alert(res.status);
          return;
        }
        let uploadedBytes = res.uploaded;
        console.log(uploadedBytes);
        let headers2 = new HttpHeaders({
          size: this.selectedFile.size.toString(),
          "x-file-id": fileId,
          "x-start-byte": uploadedBytes.toString(),
          name: this.name,
        });
        
        const req = new HttpRequest(
          "POST",
          "http://localhost:3000/upload",
          this.selectedFile.slice(uploadedBytes, this.selectedFile.size + 1),
          {
            headers: headers2,
            reportProgress: true,
          }
        );
        this.http.request(req).subscribe(
          (res: any) => {
            if (res.type === HttpEventType.UploadProgress) {
              this.uploadPercent = Math.round(
                100 * ((res.loaded + uploadedBytes) / this.selectedFile.size)
              );
              if (this.uploadPercent >= 100) {
                //this.resumeName = this.name;
                this.name = "";
                this.selectedFile = null;
              }
            } else {
              console.log(JSON.stringify(res));
              if (this.uploadPercent >= 100) {
                this.name = "";
                this.selectedFile = null;
              }
            }
          },
          (err: any) => {}
        );
      });
  }
  //start

}
