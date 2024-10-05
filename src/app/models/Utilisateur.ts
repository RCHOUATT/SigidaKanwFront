import {Files} from "./Files";
import {RoleUser} from "./RoleUser";

export interface Utilisateur {
  id?: number;              // Identifiant unique de l'utilisateur (optionnel lors de la création)
  nom: string;              // Nom de l'utilisateur
  email: string;            // Email de l'utilisateur, unique et requis
  telephone?: string;       // Numéro de téléphone de l'utilisateur (optionnel)
  mdp: string;              // Mot de passe de l'utilisateur, requis
  role: RoleUser;           // Rôle associé à l'utilisateur
  files?: Files;            // Fichier associé à l'utilisateur (optionnel)
}