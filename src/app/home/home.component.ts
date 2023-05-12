import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../../assets/i18n/en';
import { locale as italian } from '../../assets/i18n/it';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, italian);
  }
  ngOnInit(): void {
    const options = {
      strings: ['', 'Front-end'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('.typed', options);
    typed.reset(true);
  }
}
