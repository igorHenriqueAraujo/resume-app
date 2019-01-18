import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Inject dos services Translate para recursos i18n e Title para mudar o título dinâmicamente.
  constructor(public translate: TranslateService, private titleService: Title, private router: Router) {
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

    //captura eventos de redirecionamento de páginas para informar ao google analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    
  }


  /**
   * Método responsável por setar o título da aplicação dinamicamente de acordo com o idioma corrente.
   * @param lang 
   */
  public setTitle( lang: string) {
    
    if (lang.match('pt')){
      this.titleService.setTitle( 'Igor Henrique Araújo - Perfil' );
    } else {
      this.titleService.setTitle( 'Igor Henrique Araújo - Profile' );
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
