import { Component } from '@angular/core';
import * as Editor from './../../../../ckeditor5-custom-light/build/ckeditor.js';

@Component({
  selector: 'app-articles-editor',
  templateUrl: './articles-editor.component.html',
  styleUrls: ['./articles-editor.component.css']
})
export class ArticlesEditorComponent {
  public Editor = Editor;
  config = {
    toolbar: ['heading', '|', 'fontColor', 'fontFamily', 'fontColor', 'bold', 'italic', '|', 'link', 'bulletedList', 'numberedList', '|', 'blockQuote'],
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    },
    simpleUpload: {
      uploadUrl: 'http://localhost:8080/api/journal/image',
      withCredentials: true,
      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>',
      }
    },
  }

}
