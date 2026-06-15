import { Component } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { ViaCEPService } from '../services/via-cep.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page{
  areaBuscarPokemon:string='52011210';
  areaBusca:any={
    bairro : '',
    localidade : '',
    logradouro : '',
    uf:''
  };
  public pokemon:any={
    name:'',
    image:'',
    abilities:'',
    height:'',
    weight:''

  }

  constructor(
    private pokeApiService:PokeApiService,
    private viaCEPService:ViaCEPService
  ){}

  buscarPokemon(areaBuscarPokemon:string){
    this.viaCEPService.getViaCEPService(areaBuscarPokemon)
      .subscribe((value: any) => {
        this.areaBusca.logradouro = value.logradouro;
        this.areaBusca.bairro = ', ' + value.bairro;
        this.areaBusca.localidade = ' - ' + value.localidade;
        this.areaBusca.uf = '-' + value.uf;
      });

    this.pokeApiService.getPokeApiService()
      .subscribe((value: any) => {
        this.pokemon.weight = value.weight;
        this.pokemon.name = value.name;
        this.pokemon.height = value.height;
        this.pokemon.abilities = value.abilities.length;
        this.pokemon.image = value.sprites.other.dream_world.front_default;
        this.pokeApiService.lastPokemonAbility = this.pokemon.abilities;

        // Salva no serviço para exibir na Pokédex
        this.pokeApiService.myPokemon = { ...this.pokemon };
        this.pokeApiService.resultado = '';
      });
  }
}
