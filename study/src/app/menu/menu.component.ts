import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Menu } from './modal/menu';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  ngOnInit() {
    
  }
  mobileQuery: MediaQueryList;

  headerNav:Menu[]=[
    {name:"Profile",link:"/admin/profile",icon_name:"person_add"},
    {name:"Logout",link:"/admin/logout",icon_name:"exit_to_app"}
  ];

  adminNav:Menu[]=[     
    {name:"Dashboard",link:"/admin/dashboard",icon_name:"home"},
    {name:"UserPassword",link:"/admin/password",icon_name:"account_box"},
    {name:"Users",link:"/admin/users",icon_name:"account_box"},
    {name:"Roles",link:"/admin/role",icon_name:"account_box"},
    {name:"MyBlogs",link:"/admin/myblogs",icon_name:"account_box"},
    {name:"Stories ",link:"/staff/blogs",icon_name:"file_copy"},
    {name:"Univercity",link:"/admin/univercity",icon_name:"markunread_mailbox"},
    {name:"Course",link:"/admin/course",icon_name:"file_copy"},
    {name:"Subject",link:"/admin/subject/0",icon_name:"collections_bookmark "},
    {name:"Sylabus",link:"/admin/sylabus",icon_name:"note_add"},
    {name:"File",link:"/admin/file",icon_name:"account_box"},
    {name:"Logout",link:"/admin/logout",icon_name:"note_add"}


  ];

  

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
 

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
