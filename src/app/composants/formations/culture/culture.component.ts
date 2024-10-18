import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {NgClass} from "@angular/common";
import {
  CrudServiceWithoutImageService
} from "../../../services/CrudServiceWithoutImage/crud-service-without-image.service";
import {FilesService} from "../../../services/CrudServiceWithImage/Files.service";
import {shareService} from "../../../services/shareService";
import {Chapitre} from "../../../models/Chapitre";
import {ListeUtilisateursComponent} from "../../utilisateurs/liste-utilisateurs/liste-utilisateurs.component";
import {RouterLink} from "@angular/router";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass,
    ListeUtilisateursComponent,
    RouterLink
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './culture.component.html',
  styleUrl: './culture.component.scss'
})
export class CultureComponent {
  activeTest: boolean = false;

  constructor(
    private service: CrudServiceWithoutImageService,
    private service2: FilesService,
    private service1: shareService,
    public loginService : LoginService,
  ) { }

  activeLessonNom: string = "chapitre 1";
  activeCoursNom: string = "Cours 1";
  audio = new Audio;
  activelangue = 'SENOUFO';


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
  contenu: any
  niveau: any[] = [];
  test: any[] = [];
  question: any[] = [];
  reponsePossible: any[] = [];
  coursPerLanguage: any[] = [];
  reponsePossiblePerQuestio: any[] = [];
  chapitrePerCours: any[] = [];
  contenuPerChapitre: any[] = [];
  testPerChapitre: any[] = [];
  questionPerTest: any[] = [];
  reponsePossiblePerQuestion: any[] = [];
  langue: any;



  ngOnInit() {
    this.loadLangue();
    this.loadCours();
    this.loadChapitre();
    this.loadTest();
    this.loadQuestion();
    this.loadReponsePossible();
    this.loadContenu();
    console.log("this.cours2 :",this.cours);
    this.findCoursBylangue("CULTUREL", "SENOUFO");
    //this.findChapitreByCours(this.coursPerLevel[0].id);
    //this.findcContenuByChapitre(this.chapitrePerCours[0].id);
    this.openDropdown()
  }

  isDropdownOpen = true;
  activeCours: string = 'Cours 1';  // Par défaut
  activeLesson: string = 'Lesson 1';

  loadCours() {
    this.service.get("cours").subscribe({
      next: (data) => {
        data.forEach((c: any)=>{
          this.cours.push(c);
        })
        console.log("cours from backend : ",this.cours);
        this.findCoursBylangue( "CULTUREL", "SENOUFO");
      },
      error: (err) => {
        console.error('Erreur lors du chargement des cours:', err);
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

  findCoursBylangue(typeCours: string, langue: string) {
    console.log("this.cours: " + `${this.cours}`);
    this.coursPerLanguage = []
    this.cours.forEach(cours=>{
      if(cours.typeCours.type === typeCours && cours.langue.nom === langue){
        this.coursPerLanguage.push(cours);
        console.log("c--- : ",cours )
      }
    })
    this.findChapitreByCours(this.coursPerLanguage[0].id);
    console.log("this.coursPerLanguage: ", this.coursPerLanguage);
  }

  findChapitreByCours(cours: any) {
    console.log("this.chapitre: " + this.chapitre);
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
  }

  playAudio(link: string) {
    this.audio = new Audio(link);
    console.log("playAudio: ", this.audio);
    this.audio.play().catch((error) => {
      console.error('Erreur lors de la lecture de l\'audio', error);
    });
  }

  isDropdownOpen1 = false;

  pageActuelle: String = "Accueil";

  toggleDropdown1() {
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }

  hideDropdown1() {
    this.isDropdownOpen1 = false;
  }

  changerPageTitre(titre : String){
    this.pageActuelle = titre;
  }
}
