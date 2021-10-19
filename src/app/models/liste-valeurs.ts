import { Valeur } from './valeur';

export class ListeValeurs {
    public codeListeValeurs: string;
    public libelleListeValeurs: string;
    public valeurs: Valeur[];

    constructor(codeListeValeurs: string, libelleListeValeurs: string, valeurs: Valeur[]){
        this.codeListeValeurs = codeListeValeurs;
        this.libelleListeValeurs = libelleListeValeurs;
        this.valeurs = valeurs;
    }
}