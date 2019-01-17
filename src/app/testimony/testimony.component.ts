import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {

  public testimonies: any[];

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    this.translate.get('testimony.testimonies').subscribe((res: any[]) => {
      this.testimonies = res;
    });
  }

}
