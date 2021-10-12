import { JournalEdition } from './journal-edition';

export class HistoriqueEditionParAn {
    public annee: number;
    public journalEditions: JournalEdition[];
    
  constructor(annee: number, journalEditions: JournalEdition[]) {
    this.annee = annee;
    this.journalEditions = journalEditions;
   }
}