export class Cours {
  id?: number;
  titre?: string;
  description?: string;
  niveauEtudes?: {};
  typeCours?: {};
  utilisateur?: {};

  constructor(
    id?: number,
    titre?: string,
    description?: string,
    niveauEtudes?: {},
    typeCours?: {},
    utilisateur?: {}
  ) {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.niveauEtudes = niveauEtudes;
    this.typeCours = typeCours;
    this.utilisateur = utilisateur;
  }
}
