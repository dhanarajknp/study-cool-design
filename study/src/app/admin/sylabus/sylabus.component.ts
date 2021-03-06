import { Component, OnInit, ViewChild } from '@angular/core';
import { Sylabus } from './model/sylabus';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SylabusService } from './service/sylabus.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-sylabus',
  templateUrl: './sylabus.component.html',
  styleUrls: ['./sylabus.component.css']
})
export class SylabusComponent implements OnInit {

  title:string="All sylabus";
  s_id:number;
  sylabus:Sylabus;  //pass edit or delete user 
  sylabuses:Sylabus[];

 displayedColumns: string[] = ['id', 'topic','unit_number','content','edit','delete'];
  dataSource: MatTableDataSource<Sylabus>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private service:SylabusService,private router: Router,private route: ActivatedRoute) {
   
  
  }
  
  subjectList()
  {
  
    this.service.getSylabusList().pipe(first()).subscribe(sylabus => {      
      this.sylabuses=sylabus;        
      this.dataSource = new MatTableDataSource(this.sylabuses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
  });
     
  }

  subjectListByCourse(id:any)
  {
    this.service.getSylabusListBySubject(id).pipe(first()).subscribe(sylabus => {  
     this.sylabuses=sylabus;    
      this.dataSource = new MatTableDataSource(this.sylabuses);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
  });
  }
  ngOnInit() {
   

    //get param values
    this.route.params.subscribe(params => {
      this.s_id = params['sid'];
    });    
    
    if(this.s_id!=null && this.s_id > 0){
      this.title="Sylabus_"+this.s_id;
      this.subjectListByCourse(this.s_id);       
    }else{ this.subjectList(); }  
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  deleteSubject(sylabus:Sylabus)
  {
   
   let r = confirm("Press yes to delete!");
          if (r == true) {
            this.service.deleteSylabus(sylabus.id) .subscribe(
              data => {
                alert(data);     
              },
              error => {
               console.log(error);         
                alert(error.error.text);        
              }
              );
          } 
    }

    editSubject(sylabus:Sylabus)
  {  
   this.router.navigate(['/admin/createsylabus/'+this.s_id+'/'+sylabus[0]]);
  }



  addSylabus()
  {  
     this.router.navigate(['/admin/createsylabus/'+this.s_id+'/0']);
  }

}
