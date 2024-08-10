import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class opService {

  constructor(private httpClient: HttpClient) {
  }

  // getPokemons(gen: string) {
  //   return this.httpClient.get<any>('https://pokeapi.co/api/v2/generation/generation-' + gen);
  // }

  getOpList() {
    return this.httpClient.get<any>("https://api.api-onepiece.com/v2/fruits/en");
  }
}
