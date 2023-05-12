import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  currentYear: number;

  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(['en', 'it']);
    this.translateService.setDefaultLang('it');
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }

    const lang: any = localStorage.getItem('lang');
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }
}
