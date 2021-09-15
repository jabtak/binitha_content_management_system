import { Component, OnInit } from '@angular/core';
import { Post} from '../../Admin/model/admin.model';
import { AdminService} from '../../shared/admin.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: Post[];
  blogsTemp: Post[];
  searchValue: any="";
  constructor(private service: AdminService) {
    this.blogs = [new Post()];
    this.blogsTemp = [new Post()];
   
   }

  ngOnInit(): void {
    this.getAllBlogs();
  }
  
  search(){
    this.blogs = this.blogsTemp.filter((b)=>{
      return b.title.toLowerCase().includes(this.searchValue.toLowerCase());
    })
  }
  
  getAllBlogs(){
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    this.service.getAllBlogs().subscribe((result:any)=>{
    this.blogs = result;
  for(var i=0; i< this.blogs.length;i++)
  {
    if(this.blogs[i].image != null && this.blogs[i].image != "null"){
      var img = this.blogs[i].image.split('\\');
      this.blogs[i].image = "http://localhost:3000/" + img[img.length - 1];
    }
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
    this.blogsTemp = this.blogs;
    });
  }

}