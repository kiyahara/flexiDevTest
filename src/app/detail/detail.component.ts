import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwapiService } from '../services/swapi.service';
import { DetailFilmData, DetailPeopleData } from '../../types';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../components/loading/loading.component';

interface PersonalDataInterface {
  name?: string;
  call?: string | string[];
}

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit {
  param?: number;
  films: string[] = [];
  species: string[] = [];
  starships: string[] = [];
  vehicles: string[] = [];
  isLoading = true;
  peopleDetail: DetailPeopleData = {
    birth_year: '',
    created: '',
    edited: '',
    eye_color: '',
    films: [],
    gender: '',
    hair_color: '',
    height: 0,
    homeworld: '',
    mass: 0,
    name: '',
    skin_color: '',
    species: [],
    starships: [],
    url: '',
    vehicles: [],
  };

  personalData: PersonalDataInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.param = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchDetailData();
  }

  fetchDetailData() {
    this.swapiService
      .getStarWarsData(`https://swapi.dev/api/people/${this.param}/`)
      .subscribe({
        next: async (data: DetailPeopleData) => {
          this.peopleDetail = data;
          this.personalData = [
            { name: 'Birth Year', call: this.peopleDetail.birth_year },
            { name: 'Height', call: String(this.peopleDetail.height) },
            { name: 'Mass', call: String(this.peopleDetail.mass) },
            { name: 'Hair Color', call: this.peopleDetail.hair_color },
            { name: 'Eye Color', call: this.peopleDetail.eye_color },
            { name: 'films', call: [] },
            { name: 'species', call: [] },
            { name: 'star ships', call: [] },
            { name: 'vehicles', call: [] },
          ];

          for (let i = 0; i < this.peopleDetail.films.length; i++) {
            this.fetchPersonalDetailData(
              this.peopleDetail.films[i],
              i,
              this.peopleDetail.films.length,
              'film'
            );
          }

          for (let i = 0; i < this.peopleDetail.species.length; i++) {
            this.fetchPersonalDetailData(
              this.peopleDetail.species[i],
              i,
              this.peopleDetail.species.length,
              'species'
            );
          }

          for (let i = 0; i < this.peopleDetail.starships.length; i++) {
            this.fetchPersonalDetailData(
              this.peopleDetail.starships[i],
              i,
              this.peopleDetail.starships.length,
              'starship'
            );
          }

          for (let i = 0; i < this.peopleDetail.starships.length; i++) {
            this.fetchPersonalDetailData(
              this.peopleDetail.starships[i],
              i,
              this.peopleDetail.starships.length,
              'vehicles'
            );
          }
        },
        error: (error: Error) => {
          console.log(error);
        },
      });
  }

  fetchPersonalDetailData(
    url: string,
    index: number,
    total: number,
    type: string
  ) {
    this.swapiService.getStarWarsData(url).subscribe({
      next: (data: DetailFilmData) => {
        if (type === 'film') {
          this.films.push(data.title.toLowerCase());
          if (index + 1 == total) {
            this.personalData[5].call = this.films;
            this.isLoading = false;
          }
        } else if (type === 'species') {
          this.species.push(data.name.toLowerCase());
          if (index + 1 == total) {
            this.personalData[6].call = this.species;
          }
        } else if (type === 'starship') {
          this.starships.push(data.name.toLowerCase());
          if (index + 1 == total) {
            this.personalData[7].call = this.starships;
          }
        } else if (type === 'vehicles') {
          this.vehicles.push(data.name.toLowerCase());
          if (index + 1 == total) {
            this.personalData[8].call = this.vehicles;
          }
        }
        this.cdr.detectChanges();
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
