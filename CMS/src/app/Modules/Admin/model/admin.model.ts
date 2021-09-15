export class Admin {
}

export class Category{
    _id : any;
    name: any;
    description: any
}

export class Post{
    _id: any;
    title: any;
    main: any;
    details: any;
    category: any;
    image: any;
    createdDate: any;
    createdBy: any;
    first: any;
    monthCreated: any;
    dateCreated: any;
    }

export class Comment{
    _id: any;
    blogID: any;
    createdBy: any;
    comment: any;
    createdById: any;
    createdDate: any;
}