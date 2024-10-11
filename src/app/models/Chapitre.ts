export class Chapitre {
  id?: number;
  titre?: string;
  resume?: string;
  cours?: {};

  constructor(
    id?: number,
    titre?: string,
    resume?: string,
    cours?: {},
  ) {
    this.id = id;
    this.titre = titre;
    this.resume = resume;
    this.cours = cours;
  }
}
