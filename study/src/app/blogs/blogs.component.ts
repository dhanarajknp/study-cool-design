import { Component, OnInit } from '@angular/core';
import { BlogsService } from './service/blogs.service';
import { Blogs } from './model/blogs';
import { ActivatedRoute, Router } from '@angular/router';
import { Url } from '../URL/url';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  role:string=Url.userRole;
  blogs:any[];
  constructor(private service:BlogsService,private router:Router) { }

  ngOnInit() {
    
    this.setDash(10);
  }

  setDash(limt:any){
          this.service.getBlogsListByDash().subscribe(blogs => {  
            this.blogs=blogs; 
          });
  }


  newBlog(){
        if(this.role=="ROLE_ADMIN"){
            this.router.navigate(['/admin/blog/writer']);
          }else if(this.role=="ROLE_STUDENT"){
            this.router.navigate(['/user/blog/writer']);
          } else if(this.role=="ROLE_STAFF"){            
            this.router.navigate(['/staff/blog/writer']);
          }  
  }


  blogReader(id:number){   
    if(this.role=="ROLE_ADMIN"){
        this.router.navigate(['/admin/blog/'+id]);
      }else if(this.role=="ROLE_STUDENT"){
        this.router.navigate(['/user/blog/'+id]);
      } else if(this.role=="ROLE_STAFF"){            
        this.router.navigate(['/staff/blog/'+id]);
      }  
  }
}
