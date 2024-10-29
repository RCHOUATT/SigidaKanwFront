import {Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import { ButtonComponent } from "../../button/button.component";
import { RouterLink } from "@angular/router";
import {Location, NgClass} from "@angular/common";
import {
  CrudServiceWithoutImageService
} from "../../../services/CrudServiceWithoutImage/crud-service-without-image.service";
import { FilesService } from "../../../services/CrudServiceWithImage/Files.service";
import { shareService } from "../../../services/shareService";
import { forkJoin } from 'rxjs';
import {Chapitre} from "../../../models/Chapitre";
import {AjouterCoursComponent} from "../ajouterCours/ajouterCours.component";
import {LoginService} from "../../../services/login/login.service";
import {langue} from "../../../models/langue";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CrudServiceWithImageService} from "../../../services/CrudServiceWithImage/crud-service-with-image.service";
import {AjouterContenuComponent} from "../ajouter-contenu/ajouter-contenu.component";
import {AjouterChapitreComponent} from "../ajouter-chapitre/ajouter-chapitre.component";
import {AjouterQuestionComponent} from "../ajouter-question/ajouter-question.component";

@Component({
  selector: 'app-langue',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
    FormsModule,
    AjouterContenuComponent,
    AjouterChapitreComponent,
    AjouterQuestionComponent
  ],
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss'],  // Correction ici
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class LangueComponent implements OnInit {
  activeTest: boolean = false;

  constructor(
    private location: Location,
    private service: CrudServiceWithoutImageService,
    private service2: CrudServiceWithImageService,
    private service1: shareService,
    public loginService : LoginService,
  ) { }

  activeLessonNom: string = "chapitre 1";
  activeCoursNom: string = "Cours 1";
  activeLangueNom: string = "Senoufo";
  audio = new Audio;

  activeChapitre: Chapitre = {
    id: 0,
    titre: "",
    resume: "",
    cours: {},
  };

  langueToBd: langue = new langue();

  activeContenu: any;
  activeQuestion: any;
  cours: any[] = [];
  chapitre: any[] = [];
  contenu: any
  niveau: any[] = [];
  test: any[] = [];
  question: any[] = [];
  reponsePossible: any[] = [];
  reponsePossiblePerQuestio: any[] = [];
  coursPerLevelAndLanguage: any[] = [];
  chapitrePerCours: any[] = [];
  contenuPerChapitre: any[] = [];
  testPerChapitre: any[] = [];
  questionPerTest: any[] = [];
  reponsePossiblePerQuestion: any[] = [];
  isDropdownOpen1 = false;
  pageActuelle: String = "Accueil";
  addCours = false;
  CoursOption = false;
  ContentOption = false;
  ChapitreOption: boolean = false;
  langue: any;
  addlangue= false;
  addChapitre = false;
  addContenu = false;
  addQuestion = false;
  authToken = false;


  /*langue: langue = {
    id: 0,      // Identifiant unique de la langue (optionnel lors de la création)
    nom: "",     // Nom du niveau d'études (ex. "Licence", "Master")
    apropos: "string", // apropos de la langue(ex. "Licence", "Master")
    utilisateur: {
      id: 0,
    }
  };*/



  ngOnInit() {
    // Option avec forkJoin pour appeler tous les services en parallèle
    this.loadLangue();
    this.loadNiveauEtudes();
    this.loadCours();
    this.loadChapitre();
    this.loadTest();
    this.loadQuestion();
    this.loadReponsePossible();
    this.loadContenu();
    console.log("this.cours2 :",this.cours);
    this.findCoursByLevelAndlangue("DEBUTANT", "LINGUISTIQUE", "SENOUFO");
    //this.findChapitreByCours(this.coursPerLevel[0].id);
    //this.findcContenuByChapitre(this.chapitrePerCours[0].id);
    this.openDropdown()
  }

  isDropdownOpen = true;
  activeCours: string = 'Cours 1';  // Par défaut
  activeCoursId: number = 0; // Par défaut
  TestIdAchercher = 0
  activeLesson: string = 'Lesson 1';
  activeNiveau: string = 'Debutant';
  activelangue = 'SENOUFO';

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
  loadLangue() {
     this.service.get("langue").subscribe({
      next: (data) => {
        this.langue = data;
        console.log("this.langue : ", this.langue);
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
        this.findCoursByLevelAndlangue("DEBUTANT", "LINGUISTIQUE", "SENOUFO");
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
        console.log("reponsePossible",this.reponsePossible);
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

   findCoursByLevelAndlangue(niveau: string, typeCours: string, langue: string) {
    console.log("this.cours: " , this.cours);
     console.log("this.coursPerLevel1: ", this.coursPerLevelAndLanguage);
     this.coursPerLevelAndLanguage = []
     this.cours.forEach(cours=>{
       console.log(`COURSFOREACH ${cours.id} `, cours);
       if(cours.niveauEtudes.niveau === niveau &&
         cours.typeCours.type === typeCours && cours.langue.nom === langue){
         this.coursPerLevelAndLanguage.push(cours);
         console.log("c--- : ",cours )
       }
     })
     console.log("this.coursPerLevel: ", this.coursPerLevelAndLanguage);
     this.findChapitreByCours(this.coursPerLevelAndLanguage[0].id);
  }

   findChapitreByCours(cours: any) {
    console.log("this.chapitre: ", this.chapitre);
    console.log("this.chapitre et cours: " + cours);
     this.chapitrePerCours =[]
     this.chapitre.forEach(c=>{
       if(c.cours.id === cours){
         this.chapitrePerCours.push(c);
         console.log("c---chapitrePerCours : ",c )
       }
     })
     this.activeChapitre = this.chapitrePerCours[0];
     console.log("this.chapitre par cours: ",  this.chapitrePerCours);
   }

  findContenuByChapitre(contenu: any) {
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
    this.contenu.forEach( (c: any)=>{
      if(c.chapitre.id == contenu){
        this.contenuPerChapitre.push(c);
        console.log("c : ",c )
      }
    })
    console.log("this.contenuperchapitre: ", this.contenuPerChapitre);

  }

  findTestByChapitre(chapitreId: any) {
    console.log("this.ChapitreIdAchercher: ", chapitreId);
    console.log("this.chapitre: ", this.chapitre);
    console.log("this.testFromBack: ", this.test);
    /*this.contenuPerChapitre = this.contenu.filter(contenu => {
      if (contenu.cours.id === contenu){
        console.log("contenu.cours.id :",contenu.cours.id);
      }
      return contenu.chapitre.id == contenu;
    });*/
    this.testPerChapitre = []
    this.test.forEach(t=>{
      if(t.chapitre.id == chapitreId){
        this.testPerChapitre.push(t);
        console.log("t-- : ",t )
      }
    })
    this.findQuestionByTest(this.testPerChapitre[0].id)
    console.log("this.contenuperchapitre: ", this.contenuPerChapitre);
  }

  findQuestionByTest(TestId: any) {
    console.log("this.TestIdAchercher: ", TestId);
    console.log("this.test: ", this.test);
    console.log("this.questionFromBack: ", this.question);
    /*this.contenuPerChapitre = this.contenu.filter(contenu => {
      if (contenu.cours.id === contenu){
        console.log("contenu.cours.id :",contenu.cours.id);
      }
      return contenu.chapitre.id == contenu;
    });*/
    this.TestIdAchercher = TestId;
    this.questionPerTest = []
    this.question.forEach(q=>{
      if(q.test.id == TestId){
        this.questionPerTest.push(q);
        console.log("q-- : ",q )
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

   setActive(menuItem: string, id: number) {
    this.activeCours = menuItem;
    this.activeCoursId = id,
    console.log("cours active :", this.activeCours);
  }
  setAddLangue() {
    this.addlangue = !this.addlangue;
    this.loadLangue();
  }

  setAddContenu() {
    this.addContenu = !this.addContenu;
    this.loadContenu();
  }
  setAddChapitre() {
    this.addChapitre = !this.addChapitre;
    this.loadChapitre();
  }
  setAddQuestion() {
    this.addQuestion = !this.addQuestion;
    this.loadQuestion();
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

  setActiveLangue(menuItem: string) {
    this.activelangue = menuItem;
    console.log(this.activelangue);
  }

   setActiveLesson(lesson: string, chapitre: any) {
    this.activeLesson = lesson;
    this.activeChapitre = chapitre
    console.log("active lesson : ", this.activeLesson)
    console.log("active chapitre objet : ", this.activeChapitre)
  }

  setActiveTest() {
    this.activeTest = !this.activeTest;
    console.log("this.activeTest: ", this.activeTest)
  }

  playAudio(link: string) {
    this.audio = new Audio(link);
    console.log("playAudio: ", this.audio);
    this.audio.play().catch((error) => {
      console.error('Erreur lors de la lecture de l\'audio', error);
    });
  }

  activeAdd(){
    this.addCours = !this.addCours;
  }

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }

  hideDropdown1() {
    this.isDropdownOpen1 = false;
  }

  changerPageTitre(titre : String){
    this.pageActuelle = titre;
  }
  setoptions(){
    this.ContentOption =!this.ContentOption;
  }
  setCoursoptions(){
    this.CoursOption = !this.CoursOption;
  }
  setChapteroptions(){
    this.ChapitreOption = !this.ChapitreOption;
  }

  back() {
    this.location.back();  // This will navigate to the previous page in the browser history
  }

  AjouterLangue() {
     console.log("this.langue : ", this.langueToBd);
    this.service.post("langue", this.langueToBd, this.authToken).subscribe((data)=>{
      console.log(data);
      this.addlangue = false;
      this.loadLangue();
    });
  }

  AjouterContenu() {

  }

  setActiveLangueName(nom: any) {
    this.activeLangueNom = nom;
  }

  deleteItem(nom: string, id: number) {
    this.service.delete(nom, id).subscribe((data)=>{
      console.log(`Item avec l'ID ${id} a été supprimé.`);
      this.ngOnInit();
    })
  }
}
