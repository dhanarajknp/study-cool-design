import { Component, OnInit } from '@angular/core';
import { Univercity } from '../model/univercity';
import { FormControl, Validators } from '@angular/forms';
import { UnivercityService } from '../service/univercity.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-addunivercity',
  templateUrl: './addunivercity.component.html',
  styleUrls: ['./addunivercity.component.css']
})
export class AddunivercityComponent implements OnInit {

  
  univercityies:Univercity[]=[ {id:1,name:"anna",address:"chennai",location:"chennai"}  ];
  univercity:Univercity = new Univercity();
  buttonName:string="Create";
  // univercity:Univercity[];
  nameControl = new FormControl('', [Validators.required]);
  addressControl = new FormControl('', [Validators.required]);
  locationControl = new FormControl('', [Validators.required]);
  
  constructor(private service:UnivercityService,private router: Router) { }

  ngOnInit() {
    let UnivercityId = localStorage.getItem("UnivercityId");

    if(UnivercityId!=null) {
      this.buttonName="Update";
       this.service.getUnivercity(+ UnivercityId).pipe(first()).subscribe(univercity => {   
           this.univercity=univercity; });
          localStorage.removeItem("UnivercityId");
    }
    
  }
  save() {
    this.service.createUnivercity(this.univercity)  
      .subscribe(
        data => {
          alert(data);     
        },
        error => {
          console.log(error);         
          alert(error.error.text);
          
        }
        );
    this.univercity = new Univercity();
    this.router.navigate(['/admin/univercity']);
  }

  update()
  {
    alert("update");
    this.service.updateUnivericty(this.univercity)  
    .subscribe(
      data => {
        alert(data);     
      },
      error => {
       console.log(error);         
        alert(error.error.text);        
      }
      );
  this.univercity = new Univercity();
  this.router.navigate(['/admin/univercity']);
  }
  onSubmit() {

    if(localStorage.removeItem("UnivercityId")!=null) { this.update();}
    if(localStorage.removeItem("UnivercityId")==null){ this.save();}
    localStorage.removeItem("UnivercityId");  
  
  }

}
