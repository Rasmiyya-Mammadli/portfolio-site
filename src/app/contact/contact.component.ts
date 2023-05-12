import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../../assets/i18n/en';
import { locale as italian } from '../../assets/i18n/it';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  showLinkedIn = false;
  showGoogle = false;
  showDiscord = false;

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, italian);
  }

  ngOnInit(): void {}
}
