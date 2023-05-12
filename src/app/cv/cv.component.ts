import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../../assets/i18n/en';
import { locale as italian } from '../../assets/i18n/it';
import { experiencesIt } from '../api/experiencesIt';
import { experiencesEn } from '../api/experiencesEn';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  experiences: any = experiencesEn;
  planeIcon: any;
  dumbbellIcon: any;
  parachuteIcon: any;
  certificate: any = {
    isView: false,
  };

  constructor(
    private _translationLoaderService: TranslationLoaderService,
    private _translateService: TranslateService
  ) {
    this._translationLoaderService.loadTranslations(english, italian);
    this._translateService.onLangChange.subscribe(() => {
      if (this._translateService.currentLang == 'en') {
        this.experiences = experiencesEn;
      } else {
        this.experiences = experiencesIt;
      }
    });
  }

  ngOnInit(): void {
    this.planeIcon = awesom.faPlane;
    this.dumbbellIcon = awesom.faDumbbell;
    this.parachuteIcon = awesom.faParachuteBox;
  }

  detailOnClick(experience: any) {
    experience.detailIsDisplayed = !experience.detailIsDisplayed;
  }

  certificateOnView(certificate: any) {
    certificate.isView = !certificate.isView;
  }
}
