import { Component, OnInit } from '@angular/core';
import {Category} from '../model/admin.model';
import{ AdminService} from '../../shared/admin.service';
@Component({
  selector: 'app-post-category',
  templateUrl: './post-category.component.html',
  styleUrls: ['./post-category.component.css']
})
export class PostCategoryComponent implements OnInit {
  category: Category;
  submitted: any = false;
  categoryDetails: Category[];
  isEdit: any=false;
  showGrid: any=true;
  constructor( private service: AdminService) { 
    this.category = new Category();
    this.categoryDetails = [new Category()];
  }

  ngOnInit(): void {
    this.getcategories();
  
  }
 
  addNewClick(){
    this.isEdit = false;
    this.showGrid=false;
  }

  edit(id:any, cat: Category){
    this.showGrid=false;
    this.category = cat;
    console.log(id);
    this.isEdit = true;
  }

  delete(id:any){
    this.service.deleteCategory(id).subscribe((result)=>{
      //this.category = new Category();
      this.getcategories();
      //this.isEdit=false;
      this.showGrid=true;
    });
  }

  getcategories(){
    this.service.getCategories().subscribe((result:any)=>{
      this.categoryDetails = result;
      
      console.log(this.categoryDetails);
    });
  }
  addNew(){
    console.log(this.category);
    this.service.addCategory(this.category).subscribe((result)=>{
      this.category = new Category();
      this.showGrid = true;
    });
  }
  update(){
    this.service.updateCategory(this.category, this.category._id).subscribe((result)=>{
      this.category = new Category();
      this.getcategories();
      this.isEdit=false;
      this.showGrid=true;
    });
  }
}
