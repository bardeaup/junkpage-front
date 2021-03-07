import { Component, OnInit } from '@angular/core';
import { JournalService } from '../service/journal.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  
  di: string;
  constructor(private journalService: JournalService) { }

  ngOnInit(): void {
    this.journalService.getJournalArticles().subscribe(
      x => console.log('Test appel WS : ', x.username)
    )
  }

}
