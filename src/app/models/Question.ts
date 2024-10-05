export interface Question { // Identifiant unique de la question (optionnel lors de la création)
  question: string;         // Le texte de la question
  reponseCorrecte: string;  // La réponse correcte à la question
  testId: number;
}
