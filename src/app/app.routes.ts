import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "home",
    loadComponent: () => import("./composants/home/home.component").then(m => m.HomeComponent)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: "utilisateur",
    loadComponent: () => import("./composants/utilisateurs/utilisateurs.component").then(m => m.UtilisateursComponent)
  },
  {
    path: "login",
    loadComponent: () => import("./composants/login/login.component").then(m => m.LoginComponent)
  },
  {
    path: "formation/culture",
    loadComponent: () => import("./composants/formations/culture/culture.component").then(m => m.CultureComponent)
  },
  {
    path: "formation/langue",
    loadComponent: () => import("./composants/formations/langue/langue.component").then(m => m.LangueComponent)
  },
  {
    path: "ajouterCours",
    loadComponent: () => import("./composants/formations/ajouterCours/ajouterCours.component").then(m => m.AjouterCoursComponent)
  },
  {
    path: "appLanding",
    loadComponent: () => import("./landing/landing.component").then(m => m.LandingComponent)
  }
];
