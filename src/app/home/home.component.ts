import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SwapiService } from '../services/swapi.service';
import { PeopleData, StarPeople } from '../../types';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from '../components/loading/loading.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private swapiService: SwapiService) {}

  totalPage: number = 2;
  totalData: number = 0;
  rows: number = 10;
  currentPage: number = 1;
  starPeopleData: PeopleData[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.fetchData(this.currentPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPage }, (_, i) => i + 1);
  }

  fetchData(page: number) {
    this.swapiService
      .getStarWarsData('https://swapi.dev/api/people/', { page })
      .subscribe({
        next: (data: StarPeople) => {
          this.totalData = data.count;
          // this.totalPage = Math.ceil(data.count / 10 / 3);
          this.starPeopleData = data.results;
          this.isLoading = false;
        },
        error: (error: Error) => {
          console.log(error);
        },
      });
  }

  setPage(page: number): void {
    this.currentPage = page;
    this.fetchData(this.currentPage);
  }
}
