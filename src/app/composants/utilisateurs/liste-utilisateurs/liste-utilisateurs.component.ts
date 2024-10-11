import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../models/Utilisateur";
import {CrudServiceWithImageService} from "../../../services/CrudServiceWithImage/crud-service-with-image.service";
import {NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.scss'
})
export class ListeUtilisateursComponent implements OnInit {
  utilisateurs: Utilisateur[] = []; // Liste des utilisateurs
  activeUser = false;
  activeUserId: number | undefined = 0;

  //[ngClass]="{'active': activeUser}
  constructor(private service: CrudServiceWithImageService) {}

  ngOnInit(): void {
    this.loadUtilisateurs(); // Charge les utilisateurs lors de l'initialisation
  }
  loadUtilisateurs() {
    this.service.getObject("utilisateur").subscribe({
      next: (data) => {
        this.utilisateurs = data; // Remplit la liste des utilisateurs
        console.log(this.utilisateurs);
      },
      error: (err) => {
        console.error('Erreur lors du chargement des utilisateurs:', err);
      }
    });
  }

  setActive(activeUserId : number | undefined) {
    this.activeUser = true;
    this.activeUserId = activeUserId;
    localStorage.setItem("activeUserId", `${activeUserId}`)
  }

}
