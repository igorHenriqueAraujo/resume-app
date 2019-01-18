import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public name: string;
  public lastName: string;
  public email: string;
  public location: string;
  public phoneNumber: string;
  public linkedin: string;
  public github: string;
  public twitter: string;
  public urlPdfPT: string;
  public urlPdfEn: string;

  constructor(public translate: TranslateService, private titleService: Title) { }

  /**
   * Inicia aqui algumas informações básicas
   */
  ngOnInit() {
    this.name = "Igor Henrique";
    this.lastName = "Araújo";
    this.email = "igor.henrique.araujo@gmail.com";
    this.location = "Barueri, SP";
    this.phoneNumber = "+55 (11) 97552-4661";
    this.linkedin = "https://www.linkedin.com/in/igorhenriquearaujo/";
    this.github = "https://github.com/igorHenriqueAraujo";
    this.twitter = "https://twitter.com/IgorHAraujo";
    this.urlPdfPT = "../../assets/pdf/Igor_Henrique_Araujo_CV_pt.pdf";
    this.urlPdfEn = "../../assets/pdf/Igor_Henrique_Araujo_CV_en.pdf";
  }

    /**
   * Envia evento ao google analytics
   */
  public sendEventGA = (cat : string, action : string, label : string) => {
    (<any>window).ga('send', 'event', {
      eventCategory: cat,
      eventLabel: label,
      eventAction: action,
      eventValue: 10
    });
  }

  /**
   * Verifica idioma corrente para download do PDF no idioma correspondente.
   */
  public downloadPDF(){
    const lang = this.translate.currentLang;
    if (lang.match('pt')){
      window.open(this.urlPdfPT);
    } else {
      window.open(this.urlPdfEn);
    }
  }

}
