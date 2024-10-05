import {Cours} from "./Cours";

export interface Chapitre {
  id?: number;           // Identifiant unique du chapitre (optionnel lors de la création)
  titre: string;         // Titre du chapitre
  resume: string;        // Résumé du chapitre
  cours: Cours;         // Cours associé à ce chapitre
}
