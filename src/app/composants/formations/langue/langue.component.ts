import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ButtonComponent} from "../../button/button.component";
import {RouterLink} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-langue',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './langue.component.html',
  styleUrl: './langue.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LangueComponent {

  isDropdownOpen = true;
  activeCours: string = 'Cours 1'; // Par défaut
  activeLesson: string = 'Lesson 1';


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
