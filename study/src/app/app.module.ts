import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatrielModule} from './matriel';
import { RegisterComponent } from './register/register.component'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UnivercityComponent } from './admin/univercity/univercity.component';
import { CourseComponent } from './admin/course/course.component';
import { SylabusComponent } from './admin/sylabus/sylabus.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './admin/users/users.component';
import { MatPaginatorModule } from '@angular/material';
import {MatSortModule} from '@angular/material';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { HttpClientModule } from '@angular/common/http';
import { AddunivercityComponent } from './admin/univercity/addunivercity/addunivercity.component'; 
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { AddcourseComponent } from './admin/course/addcourse/addcourse.component';
import { SubjectComponent } from './admin/subject/subject.component';
import { AddsubjectComponent } from './admin/subject/addsubject/addsubject.component';
import { AddsylabusComponent } from './admin/sylabus/addsylabus/addsylabus.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserLayoutComponent } from './user/user-layout/user-layout.component';
import { UserMenuComponent } from './user/user-menu/user-menu.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { UserCourseComponent } from './user/user-course/user-course.component';
import { DynamicDataSource, DynamicDatabase } from './user/tree/DynamicDataSource';
import { ContentComponent } from './user/content/content.component';
import { LogoutComponent } from './logout/logout/logout.component';
import { StaffLayoutComponent } from './staff/staff-layout/staff-layout.component';
import { StaffHomeComponent } from './staff/staff-home/staff-home.component';
import { StaffMenuComponent } from './staff/staff-menu/staff-menu.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogWriterComponent } from './blogs/blog-writer/blog-writer.component';
import { AngularMarkdownEditorModule } from 'angular-markdown-editor';

import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
import { BlogReaderComponent } from './blogs/blog-reader/blog-reader.component';
import { RoleComponent } from './admin/role/role.component';
import { AddroleComponent } from './admin/role/addrole/addrole.component';
import { FileuploadComponent } from './admin/fileupload/fileupload.component';
import { AddfileComponent } from './admin/fileupload/addfile/addfile.component';
import { CreatecsylabusComponent } from './admin/sylabus/createcsylabus/createcsylabus.component';
import { PasswordComponent } from './admin/password/password.component';
import { EditpasswordComponent } from './admin/password/editpassword/editpassword.component';
import { RestpasswordComponent } from './restpassword/restpassword.component';
import { MyblogsComponent } from './blogs/myblogs/myblogs.component';

@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    UnivercityComponent,
    SidenavComponent,
    LoginlayoutComponent,
    HomeLayoutComponent,
    DashboardComponent,
    CourseComponent,
    SylabusComponent,
    ProfileComponent,
    UsersComponent,
    AdduserComponent,
    AddunivercityComponent,
    AddcourseComponent,
    SubjectComponent,
    AddsubjectComponent,
    AddsylabusComponent,
    UserHomeComponent,
    UserLayoutComponent,
    UserMenuComponent,
    UserCourseComponent,
    ContentComponent,
    LogoutComponent,
    StaffLayoutComponent,
    StaffHomeComponent,
    StaffMenuComponent,
    BlogsComponent,
    BlogWriterComponent,
    BlogReaderComponent,
    RoleComponent,
    AddroleComponent,
    FileuploadComponent,
    AddfileComponent,
    CreatecsylabusComponent,
    PasswordComponent,
    EditpasswordComponent,
    RestpasswordComponent,
    MyblogsComponent
   
    
  ],
  entryComponents: [AdduserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule ,
    MatrielModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ,ReactiveFormsModule,
   HttpClientModule 
    ,JwtModule,NgxExtendedPdfViewerModule,MatProgressBarModule,AngularMarkdownEditorModule.forRoot({
      iconlibrary: 'glyph'
    }),
   
    MarkdownModule.forRoot({      
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          sanitize: true,
          renderer: new MarkedRenderer(),
          gfm: true,
          tables: true,
          breaks: true,
          pedantic: false,
          smartLists: true,
          smartypants: false,
        },
      },
    }),
   
  ],
  providers: [  { provide: JWT_OPTIONS, useValue: JWT_OPTIONS,  },
    JwtHelperService,DynamicDataSource,DynamicDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
