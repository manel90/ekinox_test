import {Component} from '@angular/core';
import {DVD_TXT1, DVD_TXT2, DVD_TXT3, OTHER_DVD_TXT} from "../core/constants/dvd.constant";
import {AppDvdService} from "../core/services/app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  total: number | null = null;
  dvds: string[] = [DVD_TXT1];

  dvd_txt1: string = DVD_TXT1;
  dvd_txt2: string = DVD_TXT2;
  dvd_txt3: string = DVD_TXT3;
  other_dvd_txt: string = OTHER_DVD_TXT;

  constructor(public serviceDvd: AppDvdService) {
  }

  addDvd() {
    this.dvds.push(DVD_TXT1);
  }


  async calculateTotal() {
    const data = await this.serviceDvd.calculate(this.dvds).toPromise();
    this.total = data.total;

  }

  removeDvd(i: any) {
    this.dvds.splice(i,1)
  }

  resetDvds() {
    this.dvds = [DVD_TXT1];
  }
}
