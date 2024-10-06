import { Component } from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-ajouterCours',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass
  ],
  templateUrl: './ajouterCours.component.html',
  styleUrl: './ajouterCours.component.scss'
})
export class AjouterCoursComponent {
  etat: number = 1;
  largeur: string = `width: calc((${this.etat} - 1) * 50%) ; transition: width 0.3s linear;`;
  /*stockercat(c:any){
    this.category= this.categories.find(data => data.category === c.value);
    console.log(this.category)
  }*/

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
}
