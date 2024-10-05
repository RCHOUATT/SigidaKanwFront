import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../models/Utilisateur";
import {CrudServiceWithImageService} from "../../../services/CrudServiceWithImage/crud-service-with-image.service";

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.scss'
})
export class ListeUtilisateursComponent implements OnInit {
  utilisateurs: Utilisateur[] = []; // Liste des utilisateurs
  newUser: Utilisateur = { nom: '', email: '', mdp: '', role: { id: 1, role: 'USER' } }; // Utilisateur à créer

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

}
