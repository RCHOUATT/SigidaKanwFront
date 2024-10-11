export class Question { // Identifiant unique de la question (optionnel lors de la création)
  constructor(
    public test: {
      id: number
    },
    public question?: string,     // Le texte de la question
    public reponseCorrecte?: string, // La réponse correcte à la question
    public files?: [],) {};
}
