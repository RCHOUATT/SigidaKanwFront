import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import {
  CrudServiceWithoutImageService
} from "../../../services/CrudServiceWithoutImage/crud-service-without-image.service";
import { CrudServiceWithImageService } from "../../../services/CrudServiceWithImage/crud-service-with-image.service";
import { shareService } from "../../../services/shareService";
import { forkJoin } from 'rxjs';
import {Chapitre} from "../../../models/Chapitre";

@Component({
  selector: 'app-langue',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss'],  // Correction ici
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LangueComponent implements OnInit {

  constructor(
    private service: CrudServiceWithoutImageService,
    private service2: CrudServiceWithImageService,
    private service1: shareService
  ) { }

  activeLessonNom: string = "chapitre 1";
  activeCoursNom: string = "Cours 1";

  activeChapitre: Chapitre = {
    id: 0,
    titre: "",
    resume: "",
    cours: {},
  };

  activeContenu: any;
  activeQuestion: any;
  cours: any[] = [];
  chapitre: any[] = [];
  contenu: any[] = [];
  niveau: any[] = [];
  test: any[] = [];
  question: any[] = [];
  reponsePossible: any[] = [];
  coursPerLevel: any[] = [];
  chapitrePerCours: any[] = [];
  contenuPerChapitre: any[] = [];
  testPerChapitre: any[] = [];
  questionPerTest: any[] = [];
  reponsePossiblePerQuestion: any[] = [];


   ngOnInit() {
    // Option avec forkJoin pour appeler tous les services en parallèle
    /*forkJoin({
      niveau: this.service.get("niveauEtudes"),
      cours: this.service.get("cours"),
      chapitre: this.service.get("chapitre"),
      contenu: this.service.get("contenu"),
      test: this.service.get("test"),
      question: this.service.get("question"),
      reponsePossible: this.service.get("reponsePossible")
    }).subscribe({
      next: ({ niveau, cours, chapitre, contenu, test, question, reponsePossible }) => {
        this.niveau = niveau;
        this.cours = cours;
        this.chapitre = chapitre;
        this.contenu = contenu;
        this.test = test;
        this.question = question;
        this.reponsePossible = reponsePossible;
        console.log(this.reponsePossible);
        console.log(this.question);
        console.log(this.test);
        console.log(this.contenu);
        console.log(this.chapitre);
        console.log("this.cours1 :",this.cours);
        console.log(this.niveau);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des données:', err);
      }
    });*/
     this.loadNiveauEtudes();
     this.loadCours();
     this.loadChapitre();
     this.loadTest();
     this.loadQuestion();
     this.loadReponsePossible();
     this.loadContenu();
     console.log("this.cours2 :",this.cours);
     this.findCoursByLevel("DEBUTANT", "LINGUSTIQUE");
     //this.findChapitreByCours(this.coursPerLevel[0].id);
     //this.findcContenuByChapitre(this.chapitrePerCours[0].id);
     this.openDropdown()
  }

  isDropdownOpen = true;
  activeCours: string = 'Cours 1';  // Par défaut
  activeLesson: string = 'Lesson 1';
  activeNiveau: string = 'Debutant';

   loadNiveauEtudes() {
     this.service.get("niveauEtudes").subscribe({
      next: (data) => {
        this.niveau = data;
        console.log(this.niveau);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des niveaux:', err);
      }
    });
  }

   loadCours() {
     this.service.get("cours").subscribe({
      next: (data) => {
        data.forEach((c: any)=>{
          this.cours.push(c);
        })
        console.log("cours from backend : ",this.cours);
        this.findCoursByLevel("DEBUTANT", "LINGUSTIQUE");
      },
      error: (err) => {
        console.error('Erreur lors du chargement des cours:', err);
      }
    });
  }

   loadChapitre() {
     this.service.get("chapitre").subscribe({
      next: (data) => {
        this.chapitre = data;
        console.log("chapitre from back : ",this.chapitre);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des chapitres:', err);
      }
    });
  }

   loadContenu() {
     this.service.get("contenu").subscribe({
      next: (data) => {
        this.contenu = data;
        console.log("contenu : ",this.contenu);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des contenus:', err);
      }
    });
  }

   loadTest() {
     this.service.get("test").subscribe({
      next: (data) => {
        this.test = data;
        console.log(this.test);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des tests:', err);
      }
    });
  }

   loadQuestion() {
     this.service.get("question").subscribe({
      next: (data) => {
        this.question = data;
        console.log(this.question);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des questions:', err);
      }
    });
  }

   loadReponsePossible() {
     this.service.get("reponsePossible").subscribe({
      next: (data) => {
        this.reponsePossible = data;
        console.log(this.reponsePossible);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des réponses possibles:', err);
      }
    });
  }

  /*findCoursByLevel(niveau: String, type: String) {
    this.coursPerLevel = this.cours.filter(data => {
      return data.niveauEtudes.niveau === niveau && data.niveauEtudes.typeCours.type === type;
    });
    console.log("coursPerLevel : ", this.coursPerLevel);
  }*/

   findCoursByLevel(niveau: string, typeCours: string) {
    console.log("this.cours: " + `${this.cours}`);
    this.coursPerLevel = this.cours.filter(cours => {
      //console.log("niveau + type :",cours.niveauEtudes.niveau, cours.typeCours.type);
      return cours.niveauEtudes.niveau === niveau &&
        cours.typeCours.type === typeCours;
    });
    console.log("this.coursPerLevel: ", this.coursPerLevel);
  }

   findChapitreByCours(cours: any) {
    console.log("this.chapitre: " + this.chapitre);
    console.log("this.chapitre et cours: " + cours);
    this.chapitrePerCours = this.chapitre.filter(chapitre => {
      if (chapitre.cours.id === cours){
        console.log("niveau + type :",chapitre.cours.id);
      }
      return chapitre.cours.id === cours;
    });
     this.activeChapitre = this.chapitrePerCours[0];
     console.log("this.chapitre par cours: ",  this.chapitrePerCours);
   }

  findcContenuByChapitre(contenu: any) {
    console.log("this.contenuAchercher: ", contenu);
    console.log("this.chapitre: ", this.chapitre);
    console.log("this.contenuFromBack: ", this.contenu);
    /*this.contenuPerChapitre = this.contenu.filter(contenu => {
      if (contenu.cours.id === contenu){
        console.log("contenu.cours.id :",contenu.cours.id);
      }
      return contenu.chapitre.id == contenu;
    });*/
    this.contenuPerChapitre = []
    this.contenu.forEach(c=>{
      if(c.chapitre.id == contenu){
        this.contenuPerChapitre.push(c);
        console.log("c : ",c )
      }
    })
    console.log("this.contenuperchapitre: ", this.contenuPerChapitre);

  }

   hideDropdown() {
    this.isDropdownOpen = false;
  }

   openDropdown() {
    this.isDropdownOpen = true;
  }

   setActive(menuItem: string) {
    this.activeCours = menuItem;
    console.log("cours active :", this.activeCours);
  }

   setActiveCoursNom(menuItem: string) {
    this.activeCoursNom = menuItem;
    console.log(this.activeCoursNom);
  }

   setActiveLessonNom(menuItem: string) {
    this.activeLessonNom = menuItem;
    console.log(this.activeLessonNom);
  }
   setActiveNiveau(menuItem: string) {
    this.activeNiveau = menuItem;
    console.log(this.activeNiveau);
  }

   setActiveLesson(lesson: string, chapitre: any) {
    this.activeLesson = lesson;
    this.activeChapitre = chapitre
    console.log("active lesson : ", this.activeLesson)
    console.log("active chapitre objet : ", this.activeChapitre)
  }

}
