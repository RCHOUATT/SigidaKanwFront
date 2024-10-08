import {Component, OnInit} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {NgClass} from "@angular/common";
import {
  CrudServiceWithoutImageService
} from "../../../services/CrudServiceWithoutImage/crud-service-without-image.service";
import {Cours} from "../../../models/Cours";
import {NiveauEtudes} from "../../../models/NiveauEtudes";
import {TypeCours} from "../../../models/TypeCours";
import {FormsModule} from "@angular/forms";
import {of} from "rxjs";
import {FilesComponent} from "../../files/files.component";
import {shareService} from "../../../services/shareService";

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

  constructor(private service: CrudServiceWithoutImageService, private service1: shareService) {
  }

  ngOnInit() {
    this.loadTypeCours();
    this.loadNiveauEtudes();
    this.authToken = sessionStorage.getItem("authToken")
    this.service1.currentFiles.subscribe(files => {
      this.files = files;
    });
  }

  cours = {
    titre: "",
    typeCours: {},
    niveauEtudes: {},
    description: "",
  };

  newcours :any


  chapitre = {
    titre: "",
    cours: this.cours,
    resume: "",
  };

  contenus = {
    titre: "",
    description: "",
    chapitre: this.chapitre,
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
  question : number[] = [0];
  nbreReponsePossible = 1;//le nombre d'élement(comme question pour les test ou contenu pour les chapitres) qui doit être ajouter à la page.
  reponsePossible : number[] = [0];//Liste d'element. Elle n'est utilisé que pour la boucle
  q={
    nbreReponse: 1,
  }
  questions : any[] = [this.q];

  incrementNbreElment(){
      if (this.nbreContenu<10 && this.etat == 2){
        this.nbreContenu++;
        this.contenu = Array(this.nbreContenu).fill(0).map((idx, i) => i);
        console.log(this.contenu);
      }else if (this.nbreQuestion<10 && this.etat == 3){
        this.nbreQuestion++;
        this.question = Array(this.nbreQuestion).fill(0).map((idx, i) => i);
        console.log(this.question);
    }
  }


  incrementNbreReponse(question: any){
    console.log(this.question[this.nbreQuestion -1])
    console.log(question)
    if (this.nbreReponsePossible<10 && this.question[this.nbreQuestion -1] == question) {
      this.nbreReponsePossible++;
      this.reponsePossible = Array(this.nbreReponsePossible).fill(0).map((idx, i) => i);
      console.log(this.reponsePossible);
    }
  }
  decrementNbreElment(){
      if (this.nbreContenu<=10 && this.nbreContenu>1 && this.etat == 2){
        this.nbreContenu--;
        this.contenu = Array(this.nbreContenu).fill(0).map((idx, i) => i);
        console.log(this.contenu);
      }else if (this.nbreQuestion<=10 && this.nbreQuestion>1 && this.etat == 3){
        this.nbreQuestion--;
        this.question = Array(this.nbreQuestion).fill(0).map((idx, i) => i);
        console.log(this.question);
      }
  }
  decrementNbreReponse(){
      if (this.nbreReponsePossible<=10 && this.nbreReponsePossible>1){
        this.nbreReponsePossible--;
        this.reponsePossible = Array(this.nbreReponsePossible).fill(0).map((idx, i) => i);
        console.log(this.reponsePossible);
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

  async AjouterCours() {
    if(this.etat == 1){
      console.log(this.cours);
      /*this.service.post("cours", this.cours, this.authToken).subscribe((data)=>{
        this.cours = data;
        console.log(this.cours);
      });*/
    }else if (this.etat == 2){

    }else{

    }
  }

  async AjouterChapitre() {
    if(this.etat == 1){
      console.log(this.cours);
      /*this.service.post("cours", this.cours, this.authToken).subscribe((data)=>{
        this.cours = data;
        console.log(this.cours);
      });*/
    }else if (this.etat == 2){

    }else{

    }
  }
}
