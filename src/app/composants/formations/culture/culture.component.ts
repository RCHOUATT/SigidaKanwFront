import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [
    ButtonComponent,
    NgClass
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './culture.component.html',
  styleUrl: './culture.component.scss'
})
export class CultureComponent {

  isDropdownOpen = true;
  activeCours: string = 'Cours 1'; // Par défaut
  activeLesson: string = 'Lesson 1';
  activeNiveau: string = 'Niveau 1';


  hideDropdown() {
    this.isDropdownOpen = false;
  }
  openDropdown() {
    this.isDropdownOpen = true;
  }


  setActive(menuItem: string) {
    this.activeCours = menuItem;
  }
  setActiveLesson(lesson: string) {
    this.activeLesson = lesson;
  }
}
