import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SignInPageComponent} from "@security";
import {ApiService} from "../shared/api/service/api.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SignInPageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{


  title = 'app';
  private readonly api: ApiService = inject(ApiService);
  ngOnInit(): void {
    this.api.get('').subscribe((data) => {
      console.log('my data', data);
    })
  }
}
