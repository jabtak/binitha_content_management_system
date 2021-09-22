import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AdminService} from '../../shared/admin.service';
import {Post,Comment} from '../model/admin.model';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
 sub: any ="";
 id: any="";
 blog: Post;
 comment: Comment;
 comments: Comment[];
  constructor(private route: ActivatedRoute, private service: AdminService) {
    this.blog = new Post();
    this.comment = new Comment();
    this.comments = [new Comment()];
   }
   
   getComments(){
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
       this.service.getComments(this.id).subscribe((result: any)=>{
      console.log(result);
      this.comments = result;
  for(var i=0; i< this.comments.length;i++)
   {
    var dt = new Date(this.comments[i].createdDate);
    this.comments[i].createdDate = dt.getDate() + " " + month[dt.getMonth()] + " " + dt.getFullYear() 
    +" " + dt.getHours() + ":" + dt.getMinutes();
  }
    });
  }

   addComment(){
     var date = new Date();
     this.comment.createdDate = date;
     this.comment.blogID = this.id;
     this.service.addComment(this.comment).subscribe((result:any)=>{
          this.getComments();
       console.log(this.comment);
     });
   }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      console.log(this.id);
      this.getBlogById();
      this.getComments();
  }

  getBlogById(){
    this.service.getBlogById(this.id).subscribe((result: any)=>{
      console.log(result);
      this.blog = result;
      debugger;
      if(this.blog.image != null && this.blog.image != "null"){
        var img = this.blog.image.split('\\');
        this.blog.image = "http://localhost:3000/" + img[img.length - 1];
      }
      
      //this.blog.image = this.blog.image.replace("C:\fakepath","http://localhost:3000");  
      console.log(this.blog.image);
    });
  }

}


