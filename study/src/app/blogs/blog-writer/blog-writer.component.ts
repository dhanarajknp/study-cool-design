import { Component, OnInit } from '@angular/core';
import { EditorInstance, EditorOption, EditorLocale } from 'angular-markdown-editor';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MarkdownService } from 'ngx-markdown';
import { BlogsService } from '../service/blogs.service';
import { Blogs } from '../model/blogs';
import { Url } from 'src/app/URL/url';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-writer',
  templateUrl: './blog-writer.component.html',
  styleUrls: ['./blog-writer.component.css']
})
export class BlogWriterComponent implements OnInit {

  blogs:Blogs;

  bsEditorInstance: EditorInstance;
  markdownText: string;
  showEditor = true;
  templateForm: FormGroup;
  editorOptions: EditorOption;
  locale: EditorLocale = {
    language: 'fr',
    dictionary: {
      'Bold': 'Gras',
      'Italic': 'Italique',
      'Heading': 'Titre',
      'URL/Link': 'Insérer un lien HTTP',
      'Image': 'Insérer une image',
      'List': 'Liste à puces',
      'Ordered List': 'Liste ordonnée',
      'Unordered List': 'Liste non-ordonnée',
      'Code': 'Code',
      'Quote': 'Citation',
      'Preview': 'Prévisualiser',
      'Strikethrough': 'Caractères barrés',
      'Table': 'Table',
      'strong text': 'texte important',
      'emphasized text': 'texte souligné',
      'heading text': 'texte d\'entête',
      'enter link description here': 'entrez la description du lien ici',
      'Insert Hyperlink': 'Insérez le lien hypertexte',
      'enter image description here': 'entrez la description de l\'image ici',
      'Insert Image Hyperlink': 'Insérez le lien hypertexte de l\'image',
      'enter image title here': 'entrez le titre de l\'image ici',
      'list text here': 'texte à puce ici'
    }
  };

  constructor(
    private fb: FormBuilder,
    private markdownService: MarkdownService,
    private servcie:BlogsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)
    };

    // put the text completely on the left to avoid extra white spaces
    this.markdownText =
  `### Markdown example
  ---
  This is an **example** where we bind a variable to the \`markdown\` component that is also bind to a textarea.
  #### example.component.ts
  \`\`\`javascript
  function hello() {
    alert('Hello World');
  }
  \`\`\`
  #### example.component.css
  \`\`\`css
  .bold {
    font-weight: bold;
  }
  \`\`\``;

    this.buildForm(this.markdownText);
  }


  buildForm(markdownText:any) {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true]
    });
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  hidePreview() {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  showFullScreen(isFullScreen: boolean) {
    if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
      this.bsEditorInstance.showPreview();
      this.bsEditorInstance.setFullscreen(isFullScreen);
    }
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();

    return markedOutput;
  }


  postValues(title:any,tags:any){  
    this.blogs=new Blogs;
    this.blogs.tittle=title;
    this.blogs.tags=tags;
    this.blogs.username=Url.username;
    this.blogs.content=this.markdownText;
    this.servcie.createBlogs(this.blogs).pipe(first()) .subscribe(
      data => {  alert(data); 
         },
      error => {
        console.log(error);         
        alert(error.error.text);
        this.redriect();
      });
    
    
  }


  newBlog(){      
    this.markdownText='';
    this.buildForm(this.markdownText);
    alert(this.markdownText)
  }



  redriect(){
    if(Url.userRole=="ROLE_ADMIN"){
        this.router.navigate(['/admin/myblogs']);
      }else if(Url.userRole=="ROLE_STUDENT"){
        this.router.navigate(['/user/myblogs']);
      } else if(Url.userRole=="ROLE_STAFF"){            
        this.router.navigate(['/staff/myblogs']);
      }  
}

}


