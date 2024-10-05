import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ButtonComponent} from "./composants/button/button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] ,
})
export class AppComponent {
  title = 'sigidaKanw';
  isDropdownOpen = false;

  pageActuelle: String = "Accueil";

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  hideDropdown() {
    this.isDropdownOpen = false;
  }

  changerPageTitre(titre : String){
    this.pageActuelle = titre;
  }
}
