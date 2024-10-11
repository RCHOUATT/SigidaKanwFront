export class contenus {
  constructor(
    public chapitre: {
      id: number,
    },
    public titre?: string,
    public description?: string,
    public files?: []) {
  }
}
