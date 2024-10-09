import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {NgClass} from "@angular/common";
import {
  CrudServiceWithoutImageService
} from "../../../services/CrudServiceWithoutImage/crud-service-without-image.service";
import {Cours} from "../../../models/Cours";
import {FormsModule} from "@angular/forms";
import {FilesComponent} from "../../files/files.component";
import {shareService} from "../../../services/shareService";
import {CrudServiceWithImageService} from "../../../services/CrudServiceWithImage/crud-service-with-image.service";

@Component({
  selector: 'app-ajouterCours',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass,
    FormsModule,
    FilesComponent,
  ],
  templateUrl: './ajouterCours.component.html',
  styleUrl: './ajouterCours.component.scss'
})
export class AjouterCoursComponent implements OnInit {

  constructor(private service: CrudServiceWithoutImageService, private service2: CrudServiceWithImageService, private service1: shareService) {
  }

  ngOnInit() {
    this.loadTypeCours();
    this.loadNiveauEtudes();
    this.authToken = sessionStorage.getItem("authToken")
    this.service1.currentFiles.subscribe(files => {
      this.files = files;
    });
    this.questions.push({nbreReponsePossible: 1, reponsePossible: [this.reponsePossible], reponseCorrecte: "",})
  }

  cours: Cours = {
    titre: "",
    typeCours: {},
    niveauEtudes: {},
    description: "",
  };

  chapitre = {
    titre: "",
    cours: {
      id: 0
    },
    resume: "",
  };

  contenus : {
  titre: string,
  description: string,
  chapitre: any,
  files?: [],
  } = {
    titre: "",
    description: "",
    chapitre: {
      id: 0
    },
    files: []
  };

  files: any[] = [];

  etat: number = 1;
  largeur: string = `width: calc((${this.etat} - 1) * 50%); transition: width 0.3s linear;`;
  typeCours: any[]= [];
  type: any;
  niveauEtudes: any[]= [];
  niveau: any;
  authToken: any;
  nbreContenu = 1;//le nombre d'élement(comme question pour les test ou contenu pour les chapitres) qui doit être ajouter à la page.
  nbreQuestion = 1;//le nombre d'élement(comme question pour les test ou contenu pour les chapitres) qui doit être ajouter à la page.
  contenu : number[] = [0];//Liste d'element. Elle n'est utilisé que pour la boucle
  nbreReponsePossible = 1;//le nombre d'élement(comme question pour les test ou contenu pour les chapitres) qui doit être ajouter à la page.
  reponsePossible = "";//Liste d'element. Elle n'est utilisé que pour la boucle

  //question={nbreReponsePossible: 1, reponsePossible: [this.reponsePossible], reponseCorrecte: "",}
  questions : any[] = [];

  incrementNbreElment(){
      if (this.nbreContenu<10 && this.etat == 2){
        this.nbreContenu++;
        this.contenu = Array(this.nbreContenu).fill(0).map((idx, i) => i);
        console.log(this.contenu);
      }else if (this.nbreQuestion<10 && this.etat == 3){
        this.nbreQuestion++;
        this.questions.push({nbreReponsePossible: 1, reponsePossible: [this.reponsePossible], reponseCorrecte: "",}) ;
        console.log(this.questions);
    }
  }


  incrementNbreReponse(question: any){
    console.log("question : ", this.questions[question])
    //console.log("questionClasse : ", this.question)
    if (this.questions[question].nbreReponsePossible<10) {
      this.nbreReponsePossible++;
      this.questions[question].nbreReponsePossible++;
      console.log("question nbreRepo : ", this.questions[question].nbreReponsePossible)
      this.questions[question].reponsePossible.push(this.reponsePossible);
      console.log("question RepoPoss : ", this.questions[question].reponsePossible);
      console.log("question modifié : ", this.questions[question]);
      console.log("Liste questions : ", this.questions);
    }
  }

  decrementNbreElment(){
      if (this.nbreContenu<=10 && this.nbreContenu>1 && this.etat == 2){
        this.nbreContenu--;
        this.contenu = Array(this.nbreContenu).fill(0).map((idx, i) => i);
        console.log(this.contenu);
      }else if (this.nbreQuestion<=10 && this.nbreQuestion>1 && this.etat == 3){
        this.nbreQuestion--;
        this.questions.pop();
        console.log(this.questions);
      }
  }

  decrementNbreReponse(question: any){
      if (this.questions[question].nbreReponsePossible<=10 && this.questions[question].nbreReponsePossible>1){
        this.nbreReponsePossible--;
        this.questions[question].reponsePossible.pop();
        console.log(this.questions[question].reponsePossible);
      }
  }

  stockerType(t:any){
    this.cours.typeCours = this.typeCours.find(data => data.type === t.value);
    console.log(this.cours.niveauEtudes)
  }
  stockerNiveau(n:any){
    this.cours.niveauEtudes = this.niveauEtudes.find(data => data.niveau === n.value);
    console.log(this.cours.niveauEtudes)
  }

  loadTypeCours() {
    this.service.get("typeCours").subscribe({
      next: (data) => {
        this.typeCours = data; // Remplit la liste des utilisateurs
        this.cours.typeCours = this.typeCours[0];
        console.log(this.cours.typeCours);
        console.log(this.typeCours);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des types:', err);
      }
    });
  }

  loadNiveauEtudes() {
    this.service.get("niveauEtudes").subscribe({
      next: (data) => {
        console.log("Niveau_data : " + this.niveauEtudes);
        this.niveauEtudes = data; // Remplit la liste des utilisateurs
        this.cours.niveauEtudes = this.niveauEtudes[0];
        console.log(this.cours.niveauEtudes);
        console.log(this.niveauEtudes);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des niveaux:', err);
      }
    });
  };

  changeEtatspositif(){
    console.log("avant :" + this.etat)
    if(this.etat >= 1 && this.etat < 3) {
      ++this.etat;
    }
    console.log(this.etat)
    this.largeur = `width: calc((${this.etat} - 1) * 50%) ; transition: width 0.3s linear;`;

  }
  changeEtatsnegatif(){
    console.log("avant :" + this.etat)
    if(this.etat > 1) {
      this.etat--;
    }
    console.log(this.etat)
    this.largeur = `width: calc((${this.etat} - 1) * 50%) ; transition: width 0.3s linear;`;
  }

  back(){

  }

  async Ajouter() {
    if(this.etat == 1){
      console.log(this.cours);
      this.service.post("cours", this.cours, this.authToken).subscribe((data)=>{
        this.cours = data;
        this.chapitre.cours.id = data.id
        console.log(data);
        console.log(this.cours);
        console.log(this.chapitre.cours);
        this.changeEtatspositif()
      });
    }else if (this.etat == 2){
      console.log(this.chapitre);
      this.service.post("chapitre", this.chapitre, this.authToken).subscribe((data)=>{
        this.chapitre = data;
        this.contenus.chapitre.id = data.id
        //pour ajouter les fichiers
        this.service1.currentFiles.subscribe(files => {
          this.files = files;
        });
        this.service2.creer('contenu', this.contenus, this.files)
          .subscribe(response => {
            console.log('Réponse : ', response);
          });
        this.changeEtatspositif()
      });
    }else{

    }
  }

  async AjouterContenu() {
    if(this.etat == 1){
      console.log(this.cours);
      this.service.post("cours", this.cours, this.authToken).subscribe((data)=>{
        this.cours = data;
        console.log(this.cours);
      });
    }else if (this.etat == 2){

    }else{

    }
  }

}
