import {Utilisateur} from "./Utilisateur";
import {NiveauEtudes} from "./NiveauEtudes";
import {TypeCours} from "./TypeCours";

export class Cours {
  id?: number;                     // Identifiant unique du cours (optionnel lors de la création)
  titre: string;                   // Titre du cours
  description: string   // Utilisateur (enseignant) associé au cours
  niveauEtudes: NiveauEtudes;      // Niveau d'études associé au cours
  typeCours: TypeCours;            // Type de cours associé

  constructor(                   // Identifiant unique du cours (optionnel lors de la création)
    titre: string,                  // Titre du cours
    description: string,   // Utilisateur (enseignant) associé au cours
    niveauEtudes: NiveauEtudes,      // Niveau d'études associé au cours
    typeCours: TypeCours,) {
    this.titre = titre;
    this.description = description;
    this.niveauEtudes = niveauEtudes;
    this.typeCours = typeCours;
  }

}
