import {Utilisateur} from "./Utilisateur";
import {NiveauEtudes} from "./NiveauEtudes";
import {TypeCours} from "./TypeCours";

export interface Cours {
  id?: number;                     // Identifiant unique du cours (optionnel lors de la création)
  titre: string;                   // Titre du cours
  description: string;             // Description du cours
  utilisateur: Utilisateur;        // Utilisateur (enseignant) associé au cours
  niveauEtudes: NiveauEtudes;      // Niveau d'études associé au cours
  typeCours: TypeCours;            // Type de cours associé
}
