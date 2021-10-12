import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JournalEdition } from 'src/app/models/journal-edition';
import { JournalService } from 'src/app/service/journal.service';
import * as Editor from '../../../../ckeditor5-custom-light/build/ckeditor';


@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {
  
  public Editor = Editor;
  config = {
    toolbar: ['heading', '|', 'fontColor', 'fontFamily', 'fontColor', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'blockQuote', 'link'],
    image: {}
  };
  actualJournalEdition: JournalEdition;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private journalService: JournalService) { }

  ngOnInit(): void {
    this.journalService.getJournalEditionById(this.route.snapshot.paramMap.get('id')).subscribe(
      j => {
        this.actualJournalEdition = new JournalEdition(j.id,j.titre,j.annee,j.mois,j.numeroEdition,j.dateEdition)}
    );
  }
  
  save() {
    console.log('youhou');
  }
}