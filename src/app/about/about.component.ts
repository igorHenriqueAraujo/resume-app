import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private name: string;
  private lastName: string;
  private email: string;
  private location: string;
  private phoneNumber: string;
  private linkedin: string;
  private github: string;
  private twitter: string;
  private urlPdfPT: string;
  private urlPdfEn: string;

  constructor(public translate: TranslateService, private titleService: Title) { }

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

  public downloadPDF(){
    const lang = this.translate.currentLang;
    if (lang.match('pt')){
      window.open(this.urlPdfPT);
    } else {
      window.open(this.urlPdfEn);
    }
  }

}
