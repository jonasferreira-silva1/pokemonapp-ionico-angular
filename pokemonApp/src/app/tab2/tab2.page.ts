import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeApiService } from '../services/poke-api.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  pokemonAdversary: any = {
    name: '',
    image: '',
    abilities: '',
    height: '',
    weight: ''
  };
  
  resultado: string = '';
  
  // Estados da Batalha: 'no_pokemon' | 'ready' | 'fighting' | 'finished'
  battleState: 'no_pokemon' | 'ready' | 'fighting' | 'finished' = 'no_pokemon';
  
  myHp: number = 100;
  adversaryHp: number = 100;
  battleLogs: string[] = [];
  attackAnimation: 'player' | 'adversary' | '' = '';

  constructor(
    public pokeApiService: PokeApiService,
    public photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Inicialização básica
  }

  ionViewWillEnter() {
    this.verificarEstadoBatalha();
  }

  verificarEstadoBatalha() {
    if (!this.pokeApiService.myPokemon || !this.pokeApiService.myPokemon.name) {
      this.battleState = 'no_pokemon';
    } else {
      // Se já houver um Pokémon escolhido e estávamos no estado 'no_pokemon' ou se queremos iniciar novo, buscamos o oponente
      if (this.battleState === 'no_pokemon' || !this.pokemonAdversary.name) {
        this.buscarPokemon();
      } else if (this.battleState === 'finished') {
        // Se já terminou, deixa no estado finalizado ou reinicia conforme necessário.
      } else {
        this.battleState = 'ready';
      }
    }
  }

  buscarPokemon() {
    this.pokeApiService.getPokeApiService()
      .subscribe((value: any) => {
        this.pokemonAdversary.weight = value.weight;
        this.pokemonAdversary.name = value.name;
        this.pokemonAdversary.height = value.height;
        this.pokemonAdversary.abilities = value.abilities.length;
        this.pokemonAdversary.image = value.sprites.other.dream_world.front_default || value.sprites.front_default;
        this.pokeApiService.adversaryAbility = this.pokemonAdversary.abilities;

        // Salva no serviço para exibir na Pokédex
        this.pokeApiService.adversaryPokemon = { ...this.pokemonAdversary };
        
        // Reseta estados locais de combate
        this.myHp = 100;
        this.adversaryHp = 100;
        this.battleState = 'ready';
        this.resultado = '';
        this.battleLogs = ['⚡ Um oponente selvagem apareceu! Prepare-se para a luta.'];
      });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  irParaBusca() {
    this.router.navigate(['/tabs/tab1']);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  addLog(message: string) {
    this.battleLogs.unshift(message); // Adiciona no início para o mais recente ficar no topo
  }

  async iniciarBatalha() {
    if (this.battleState !== 'ready') return;
    
    this.battleState = 'fighting';
    this.battleLogs = [];
    this.myHp = 100;
    this.adversaryHp = 100;
    
    const myName = this.pokeApiService.myPokemon.name.toUpperCase();
    const advName = this.pokemonAdversary.name.toUpperCase();
    
    this.addLog(`⚔️ A batalha entre ${myName} e ${advName} começou!`);
    await this.delay(800);
    
    // Rodada 1: Você ataca
    this.attackAnimation = 'player';
    this.addLog(`⚡ ${myName} avança com tudo!`);
    await this.delay(600);
    this.attackAnimation = '';
    
    // Atualiza HP parcial do oponente
    if (this.pokeApiService.lastPokemonAbility > this.pokemonAdversary.abilities) {
      this.adversaryHp = 40;
      this.addLog(`💥 Super Efetivo! ${advName} sofreu muito dano!`);
    } else if (this.pokeApiService.lastPokemonAbility < this.pokemonAdversary.abilities) {
      this.adversaryHp = 80;
      this.addLog(`💥 ${advName} bloqueou parte do dano.`);
    } else {
      this.adversaryHp = 50;
      this.addLog(`💥 Ataques colidiram de forma igual!`);
    }
    await this.delay(1000);
    
    // Rodada 2: Oponente ataca
    this.attackAnimation = 'adversary';
    this.addLog(`🔥 ${advName} revida com um golpe carregado!`);
    await this.delay(600);
    this.attackAnimation = '';
    
    // Atualiza HP parcial seu
    if (this.pokeApiService.lastPokemonAbility > this.pokemonAdversary.abilities) {
      this.myHp = 70;
      this.addLog(`🛡️ ${myName} conseguiu resistir firmemente.`);
    } else if (this.pokeApiService.lastPokemonAbility < this.pokemonAdversary.abilities) {
      this.myHp = 30;
      this.addLog(`💥 Crítico! ${myName} sofreu um golpe devastador.`);
    } else {
      this.myHp = 50;
      this.addLog(`💥 Ambos recuam devido ao impacto!`);
    }
    await this.delay(1000);

    // Rodada Final
    this.addLog(`⭐ Rodada final! Decisão por número de habilidades...`);
    await this.delay(800);
    
    this.setResultado();
    this.battleState = 'finished';

    if (this.resultado === 'Ganhou') {
      this.adversaryHp = 0;
      this.addLog(`🏆 VITÓRIA! ${myName} venceu a disputa!`);
    } else if (this.resultado === 'Perdeu') {
      this.myHp = 0;
      this.addLog(`💀 DERROTA! ${myName} foi nocauteado...`);
    } else {
      this.myHp = 20;
      this.adversaryHp = 20;
      this.addLog(`🤝 EMPATE! Ambos os Pokémons continuam de pé.`);
    }
  }

  setResultado() {
    if (this.pokeApiService.lastPokemonAbility === this.pokeApiService.adversaryAbility) {
      this.resultado = 'Empatou';
    } else if (this.pokeApiService.lastPokemonAbility > this.pokeApiService.adversaryAbility) {
      this.resultado = 'Ganhou';
    } else {
      this.resultado = 'Perdeu';
    }
    // Salva resultado no serviço para a Pokédex
    this.pokeApiService.resultado = this.resultado;
  }

  getHpColorClass(hp: number): string {
    if (hp > 50) return 'hp-high';
    if (hp > 20) return 'hp-medium';
    return 'hp-low';
  }
}


