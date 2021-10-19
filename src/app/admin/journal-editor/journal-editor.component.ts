import { Component, OnInit, ɵɵtemplateRefExtractor } from '@angular/core';
import * as Editor from '../../../../ckeditor5-custom-light/build/ckeditor.js';
import * as moment from 'moment';
import 'moment/locale/fr';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JournalEditorService } from 'src/app/service/journal-editor.service';
import { JournalEdition } from 'src/app/models/journal-edition';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { JournalService } from 'src/app/service/journal.service';
import { HistoriqueEditionParAn } from 'src/app/models/historique-editions-par-an';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-journal-editor',
  templateUrl: './journal-editor.component.html',
  styleUrls: ['./journal-editor.component.css']
})
export class JournalEditorComponent implements OnInit {

  public Editor = Editor;
  config = {
    toolbar: ['heading', '|', 'fontColor', 'fontFamily', 'fontColor', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'blockQuote', 'link'],
    image: {}
  };
  journalEditionHistorique: HistoriqueEditionParAn[];
  journalEditionForm: FormGroup;
  monthsList: string[];
  years: number[] = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027];
  actualJournalEdition: JournalEdition;
  anneeEditionOuverte: string;

  constructor(private fb: FormBuilder, private modalService: NgbModal,
    private journalEditorService: JournalEditorService, private snackBarService: SnackbarService,
    private journalService: JournalService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHistorique();
    this.monthsList = moment.months();
    this.journalEditionForm = this.fb.group({
      titre : '',
      mois: [moment().month() + 1],
      annee: [moment().year()],
      numeroEdition: '',
    });
    this.anneeEditionOuverte = this.route.snapshot.paramMap.get('id');
  }

  getHistorique(){
    this.journalService.getJournalEditionHistorique().subscribe(
      h => {
        let editionUnAn: JournalEdition[] = [];
        this.journalEditionHistorique = [];
        let annee: number;
        let historiqueLength = h.length;
        let elementPresentListeAnnuelle: boolean;

        for(var i = 0;i < historiqueLength ;i++) {
          elementPresentListeAnnuelle = false;
          if(!annee) {
            annee = h[i].annee;
            editionUnAn.push(h[i]);
          } else if (annee == h[i].annee) {
            editionUnAn.push(h[i]);
          } else {
            this.journalEditionHistorique.push(new HistoriqueEditionParAn(annee, editionUnAn));
            editionUnAn = [];
            editionUnAn.push(h[i]);
            annee = h[i].annee;
            elementPresentListeAnnuelle = true;
          }
          if ((i + 1) == historiqueLength) {
            if(!elementPresentListeAnnuelle){
              editionUnAn.push(h[i]);
            }
            this.journalEditionHistorique.push(new HistoriqueEditionParAn(h[i].annee, editionUnAn));
          }
        }
      }
    )
  }
  onSubmit() {
    const journalEditionFormValue = this.journalEditionForm.value;
    const newJournalEdition = new JournalEdition(
      null,
      journalEditionFormValue['titre'],
      journalEditionFormValue['annee'],
      this.monthsList[journalEditionFormValue['mois']],
      journalEditionFormValue['numeroEdition'],
      new Date(journalEditionFormValue['annee'], journalEditionFormValue['mois'], 1)
    );
    console.log("Date de l'edition : ", newJournalEdition);
    this.journalEditorService.createJournalEdition(newJournalEdition).subscribe(
      j => {
        this.actualJournalEdition = new JournalEdition(j.id, j.titre, j.annee, j.mois, j.numeroEdition, j.dateEdition);
        this.getHistorique();
        this.snackBarService.openSnackBar("L'édition du journal a bien été créée.", null, 'snackbar-success');
      },
      err => {
        if (err.error.errorType === 'WARNING') {
          this.snackBarService.openSnackBar(err.error.message, null, 'snackbar-warning')
        }
      }
    )
  }

}
