import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CheckboxModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
