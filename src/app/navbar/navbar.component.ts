import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private navbarCollapse: JQuery

    //Inject dos services Translate para recursos i18n e Title para mudar o título dinâmicamente.
    constructor(public translate: TranslateService, private titleService: Title) {
      //adiciona idiomas suportados
      translate.addLangs(['en', 'pt']);
      //informa inglês como idioma default
      translate.setDefaultLang('en');
      //recupera o idioma do browser
      const browserLang = translate.getBrowserLang();
      //se o idioma do browser bater com português ou inglês de qualquer origem, informa aquele idioma,
      //caso contrário mantém inglês como default.
      translate.use(browserLang.match(/en|pt/) ? browserLang : 'en'); 
      //informa o título dinamicamente de acordo com o idioma corrente.
      this.setTitle(translate.currentLang);
    }

  ngOnInit() {
    this.navbarCollapse = $('.navbar-collapse');
        // Fecha o menu responsivo quando o link do menu é acionado
        $('.js-scroll-trigger').click(function() {
          ($('.navbar-collapse') as any).collapse('hide');
        });
  }

  
  /**
   * Método responsável por setar o título da aplicação dinamicamente de acordo com o idioma corrente.
   * @param lang 
   */
  public setTitle( lang: string) {
    
    if (lang.match('pt')){
      this.titleService.setTitle( 'Igor Henrique de Araújo - Perfil' );
    } else {
      this.titleService.setTitle( 'Igor Henrique de Araújo - Profile' );
    }
    
  }

  /**
   * Método que troca o idioma corrente da aplicação.
   * @param lang 
   */
  public changeLanguage( lang: string){
    this.translate.use(lang);
    this.setTitle(this.translate.currentLang);
  }

}
