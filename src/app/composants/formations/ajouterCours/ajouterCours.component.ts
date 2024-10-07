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

@Component({
  selector: 'app-ajouterCours',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass,
    FormsModule,
  ],
  templateUrl: './ajouterCours.component.html',
  styleUrl: './ajouterCours.component.scss'
})
export class AjouterCoursComponent implements OnInit {

  constructor(private service: CrudServiceWithoutImageService) {
  }

  cours = {
    titre: "",
    type: {},
    niveau: {},
    description: "",
  };
  etat: number = 1;
  largeur: string = `width: calc((${this.etat} - 1) * 50%) ; transition: width 0.3s linear;`;
  typeCours: any[]= [];
  type: any;
  niveauEtudes: any[]= [];
  niveau: any;
  authToken: any;

  stockerType(t:any){
    this.cours.type = this.typeCours.find(data => data.type === t.value);
    console.log(this.cours.type)
  }
  stockerNiveau(n:any){
    this.cours.niveau = this.niveauEtudes.find(data => data.niveau === n.value);
    console.log(this.cours.niveau)
  }

  ngOnInit() {
    this.loadTypeCours();
    this.loadNiveauEtudes();
    this.authToken = sessionStorage.getItem("authToken")
  }

  loadTypeCours() {
    this.service.get("typeCours").subscribe({
      next: (data) => {
        this.typeCours = data; // Remplit la liste des utilisateurs
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
        this.niveauEtudes = data; // Remplit la liste des utilisateurs
        console.log(this.niveauEtudes);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des niveaux:', err);
      }
    });
  };

  changeEtatspositif(){
    console.log("avant :" + this.etat)
    if(this.etat >= 1 && this.etat <= 3) {
      this.etat++;
    }
    console.log(this.etat)
    this.largeur = `width: calc((${this.etat} - 1) * 50%) ; transition: width 0.3s linear;`;

  }
  changeEtatsnegatif(){
    console.log("avant :" + this.etat)
    if(this.etat > 1 && this.etat) {
      this.etat--;
    }
    console.log(this.etat)
    this.largeur = `width: calc((${this.etat} - 1) * 50%) ; transition: width 0.3s linear;`;
  }

  back(){

  }

  async AjouterCours() {
    console.log(this.cours);
    this.service.post("cours", this.cours, this.authToken).subscribe((data)=>{
      this.cours = data;
      console.log(this.cours);
    })
  }
}
