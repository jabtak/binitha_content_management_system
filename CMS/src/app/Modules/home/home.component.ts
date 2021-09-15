import { Component, OnInit } from '@angular/core';
import {Post} from '../Admin/model/admin.model';
import {AdminService} from '../../Modules/shared/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Post[];
  constructor(private service: AdminService) {
    this.blogs = [new Post()];
   }

  ngOnInit(): void {
    this.getAllBlogs();
  }
  
  getAllBlogs(){
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    this.service.getAllBlogs().subscribe((result:any)=>{
    this.blogs = result;
  for(var i=0; i< this.blogs.length;i++)
  {
   this.blogs[i].main =this.blogs[i].main.substring(0,210);
   var dt = new Date(this.blogs[i].createdDate);
   this.blogs[i].monthCreated = month[dt.getMonth()];
   this.blogs[i].dateCreated = dt.getDate();
   debugger;
    if(i==0){
      this.blogs[i].first = true;
    }
    else if((i%3)==0){
      this.blogs[i].first = true;
    }
    else{
      this.blogs[i].first = false;
    }
  }
    console.log(this.blogs);
    });
  }

}
