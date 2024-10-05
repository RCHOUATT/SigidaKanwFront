import {TypeTest} from "./TypeTest";
import {Chapitre} from "./Chapitre";
import {Utilisateur} from "./Utilisateur";

export interface Test {
  id?: number;             // Identifiant unique du test (optionnel lors de la création)
  titre: string;           // Titre du test
  description: string;     // Description du test
  nbrePoint: number;       // Nombre de points pour le test
  utilisateur: Utilisateur; // Utilisateur (enseignant) associé au test
  chapitre: Chapitre;      // Chapitre associé au test
  typeTest: TypeTest;      // Type de test associé
}
