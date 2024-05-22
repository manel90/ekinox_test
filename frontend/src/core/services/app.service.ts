import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";


@Injectable({providedIn: 'root'})
export class AppDvdService {
  private endPointUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  calculate(data: string[]) {
    return this.http.post<{ total: number }>(`${this.endPointUrl}/dvd/calculate`, data);
  }
}
