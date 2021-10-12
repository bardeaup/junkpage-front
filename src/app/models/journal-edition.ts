export class JournalEdition {
  public id: number;
  public titre: string;
  public annee: string;
  public mois: string;
  public numeroEdition: string;
  public dateEdition: Date;

   constructor(id: number, titre: string, annee: string, mois: string,  numeroEdition: string, dateEdition: Date) {
    this.id = id;
    this.titre = titre;
    this.annee = annee;
    this.mois = mois;
    this.numeroEdition = numeroEdition;
    this.dateEdition = dateEdition;
   }
}