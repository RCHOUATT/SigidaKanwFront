import { Component } from '@angular/core';
import {BarChartComponent} from "../chart/bar-chart/bar-chart.component";
import {UtilisateursComponent} from "../utilisateurs/utilisateurs.component";
import {ListeUtilisateursComponent} from "../utilisateurs/liste-utilisateurs/liste-utilisateurs.component";
import {
  ListeBestUtilisateursComponent
} from "../utilisateurs/liste-best-utilisateurs/liste-best-utilisateurs.component";
import {PieChartComponent} from "../chart/pie-chart/pie-chart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BarChartComponent,
    UtilisateursComponent,
    ListeUtilisateursComponent,
    ListeBestUtilisateursComponent,
    PieChartComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
