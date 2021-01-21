import { Component } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-authors',
  template: `
  <h2>{{ title }}</h2>
  <ul>
      <li *ngFor="let author of authors">
          {{author}}
      </li>
  </ul>
  `,
})
export class AuthorsComponent{

  title;
  authors;
  constructor(service:AuthorService) { 
    this.authors = service.getAuthors();
    this.title = `${this.authors.length} Authors`
  } 



}
