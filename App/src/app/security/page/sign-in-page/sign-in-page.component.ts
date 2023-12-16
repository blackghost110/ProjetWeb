import {Component, EventEmitter, inject, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SimpleButtonComponent} from "@shared-ui";
import {SignInPayload} from "../../data/payload";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SecurityService} from "../../service";

@Component({
  selector: 'app-sign-in-page',
  standalone: true,
  imports: [CommonModule, SimpleButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {
  @Output() onClickCustom = new EventEmitter<string>();
  onClickHandler(): void {
    this.onClickCustom.emit("Cool");
  }
  //------------------------------------------------------------
  private readonly securityService: SecurityService = inject(SecurityService);



  public formGroup: FormGroup = new FormGroup<any>({
    username: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
  })



  save() {
    if (this.formGroup.valid) {
      alert('Saved !')

      const payload:SignInPayload = { ...this.formGroup.value}
      this.securityService.signIn(this.formGroup.value).subscribe(
        (data:any) => { console.log('retour du SIGNIN', data)});

    } else
      alert('error')
  }




}
