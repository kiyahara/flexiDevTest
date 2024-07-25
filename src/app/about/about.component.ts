import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PersonalDataInterface {
  name?: string;
  call?: string | string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  param?: number;
  films: string[] = [];
  species: string[] = [];
  starships: string[] = [];
  vehicles: string[] = [];
  isLoading = true;
  personalDataDetail: PersonalDataInterface[] = [];

  constructor() {}

  ngOnInit(): void {
    this.personalDataDetail = [
      { name: 'Name', call: 'Fenri Mintardja' },
      { name: 'Birth Year', call: 'Jakarta, 8 February 1999' },
      { name: 'Height', call: '165 Cm' },
      { name: 'Mass', call: '100 Kg' },
      { name: 'Hair Color', call: 'Black' },
      {
        name: 'Education',
        call: 'Bachelor Degree of information & Technology',
      },
      { name: 'Occupation', call: 'Front End Developer' },
      { name: 'Front-End Developer Experience', call: '3 Years' },
      {
        name: 'Previous Company',
        call: ['PT. Pulau Pulau Media (Macroad)', 'PT. Ako Media (Salt)'],
      },
    ];
  }
}
