import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutes} from "../../../shared/routes/enum/route.enum";
import {ApiService} from "../../../shared/api/service/api.service";

@Component({
  selector: 'app-dashboard-router',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './dashboard-router.component.html',
  styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent implements OnInit{
  routes = AppRoutes;

  title = 'app';
  private readonly api: ApiService = inject(ApiService);
  ngOnInit(): void {
    this.api.get('').subscribe((data) => {
      console.log('my data', data);
    })
  }
}
