import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../services/poke-api.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  pokemonAdversary:any={
    name:'',
    image:'',
    abilities:'',
    height:'',
    weight:''

  }
  resultado:string = ''


  constructor(
    private pokeApiService:PokeApiService,
    public photoService:PhotoService
  ){ }
  ngOnInit(): void {
    this.buscarPokemon()
  }

  buscarPokemon(){
    this.pokeApiService.getPokeApiService()
      .subscribe((value: any) => {
        this.pokemonAdversary.weight = value.weight;
        this.pokemonAdversary.name = value.name;
        this.pokemonAdversary.height = value.height;
        this.pokemonAdversary.abilities = value.abilities.length;
        this.pokemonAdversary.image = value.sprites.other.dream_world.front_default;
        this.pokeApiService.adversaryAbility = this.pokemonAdversary.abilities;

        // Salva no serviço para exibir na Pokédex
        this.pokeApiService.adversaryPokemon = { ...this.pokemonAdversary };
        this.setResultado();
      });
  }

  addPhotoToGallery(){
    this.photoService.addNewToGallery()
  }

  setResultado(){
     if(this.pokeApiService.lastPokemonAbility === this.pokeApiService.adversaryAbility){
        this.resultado = 'Empatou'
     }else if(this.pokeApiService.lastPokemonAbility > this.pokeApiService.adversaryAbility){
        this.resultado = 'Ganhou'
     }else{
        this.resultado = 'Perdeu'
     }
     // Salva resultado no serviço para a Pokédex
     this.pokeApiService.resultado = this.resultado;
  }

}
