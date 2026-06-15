import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  public id: number = 0;
  public lastPokemonAbility: number = 0;
  public adversaryAbility: number = 0;

  // Dados completos dos dois pokémons para exibir na Pokédex
  public myPokemon: any = { name: '', image: '', abilities: 0, height: 0, weight: 0 };
  public adversaryPokemon: any = { name: '', image: '', abilities: 0, height: 0, weight: 0 };
  public resultado: string = '';

  constructor(private httpClient: HttpClient) { }

  getPokeApiService() : Observable<any> {
    this.id = Math.floor(Math.random() * 100)
    if(this.id==0){
      this.id = 1;
    }
    return this.httpClient.get<any>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
  }
}
