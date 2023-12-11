import {Component, EventEmitter, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimpleButtonComponent} from "@shared-ui";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, SimpleButtonComponent],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {

  @Output() onClickCustom = new EventEmitter<string>();


  onClickHandler(): void {
    this.onClickCustom.emit("Cool");
  }
}
