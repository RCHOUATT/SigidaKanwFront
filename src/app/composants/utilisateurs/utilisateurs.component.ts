import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ListeUtilisateursComponent} from "./liste-utilisateurs/liste-utilisateurs.component";
import {ListeBestUtilisateursComponent} from "./liste-best-utilisateurs/liste-best-utilisateurs.component";
import {PieChartComponent} from "../chart/pie-chart/pie-chart.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [
    ListeUtilisateursComponent,
    ListeBestUtilisateursComponent,
    PieChartComponent,
    RouterOutlet
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.scss'
})
export class UtilisateursComponent {

}
