import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
  scrollToFragment() {
    const element = document.getElementById('overview-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
