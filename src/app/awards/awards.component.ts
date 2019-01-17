import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  public courses: any[];
  public languages: any[];

  constructor(public translate: TranslateService) { }

  /**
   * Executa ao iniciar: Recuperar os cursos e idiomas no arquivo i18n
   */
  ngOnInit() {
    this.translate.get('awards.courses').subscribe((res: any[]) => {
      this.courses = res;
    });
    this.translate.get('awards.languages').subscribe((res: any[]) => {
      this.languages = res;
    });
  }

}
