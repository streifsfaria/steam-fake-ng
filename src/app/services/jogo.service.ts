import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JogoGrid } from '../models/jogo-grid';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor() { }

  obterParaGrid() : Observable<JogoGrid[]>{
    let jogos = [
      {
        id: 1,
        nome: "The Last of Us Part II",
        descricao: "Uma emocionante jornada de sobrevivência e redenção em um mundo pós-apocalíptico.",
        preco: 199.90,
        desenvolvedora: "Naughty Dog",
        tags: ["Ação", "Aventura", "Multiplayer Online"],
        categoria: "Aventura",
        foto: "https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/da083fa5e19458dd750aa8a6ea30ba10bac6f87074693df5.jpg"
      },
      {
        id: 2,
        nome: "Spider-Man: Miles Morales",
        descricao: "Viva as aventuras de Miles Morales como o novo Homem-Aranha em Nova York.",
        preco: 149.90,
        desenvolvedora: "Insomniac Games",
        tags: ["Ação", "Aventura"],
        categoria: "Aventura",
        foto: "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0"
      },
      {
        id: 3,
        nome: "The Witcher 3: Wild Hunt",
        descricao: "Um RPG épico em um mundo aberto cheio de monstros e escolhas morais complexas.",
        preco: 299.90,
        desenvolvedora: "CD Projekt Red",
        tags: ["RPG", "Aventura"],
        categoria: "RPG",
        foto: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f"
      },
      {
        id: 4,
        nome: "Final Fantasy VII Remake",
        descricao: "Reviva a história clássica com gráficos modernos e jogabilidade renovada.",
        preco: 249.90,
        desenvolvedora: "Square Enix",
        tags: ["RPG", "Ação"],
        categoria: "RPG",
        foto: "https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S1_2560x1440-85f829541a833442eaace75d02e0f07d"
      },
      {
        id: 5,
        nome: "Assassin's Creed Valhalla",
        descricao: "Entre no papel de um viking e explore a Inglaterra durante a Era dos Viking.",
        preco: 199.90,
        desenvolvedora: "Ubisoft",
        tags: ["Ação", "Aventura", "RPG"],
        categoria: "Aventura",
        foto: "https://image.api.playstation.com/vulcan/ap/rnd/202107/2006/Gyf7S5UCH80R7s1pU7WEWHCC.jpg"
      },
      {
        id: 6,
        nome: "Fortnite",
        descricao: "O famoso battle royale onde você pode construir e lutar para ser o último em pé.",
        preco: 0.00,
        desenvolvedora: "Epic Games",
        tags: ["Multiplayer Online", "Ação"],
        categoria: "Multiplayer Online",
        foto: "https://www.jaxon.gg/wp-content/uploads/2021/05/Fortnite-Chapter-1-Season-4.jpg"
      },
      {
        id: 7,
        nome: "Half-Life: Alyx",
        descricao: "Um jogo de realidade virtual que leva a franquia Half-Life a novos patamares.",
        preco: 199.90,
        desenvolvedora: "Valve",
        tags: ["Ação", "Horror"],
        categoria: "Horror",
        foto: "https://cdn.akamai.steamstatic.com/half-life.com/images/alyx/halflife_alyx_11a.jpg"
      },
      {
        id: 8,
        nome: "Elden Ring",
        descricao: "Uma vasta aventura de RPG em um mundo aberto criado por Hidetaka Miyazaki e George R. R. Martin.",
        preco: 249.90,
        desenvolvedora: "FromSoftware",
        tags: ["RPG", "Ação"],
        categoria: "RPG",
        foto: "https://i.ytimg.com/vi/G24JlGrUo0k/maxresdefault.jpg"
      },
      {
        id: 9,
        nome: "Destiny 2",
        descricao: "Um jogo de tiro em primeira pessoa com elementos de RPG e um mundo em constante evolução.",
        preco: 0.00,
        desenvolvedora: "Bungie",
        tags: ["Tiro em Primeira Pessoa", "Multiplayer Online"],
        categoria: "Tiro em Primeira Pessoa",
        foto: "https://cdn1.epicgames.com/offer/428115def4ca4deea9d69c99c5a5a99e/EN_Bungie_S23_Landscape_Offer_2560x1440_2560x1440-c45db1ff7ff051053f4b44338f88f438"
      },
      {
        id: 10,
        nome: "GTA V",
        descricao: "Um mundo aberto recheado de atividades e missões em Los Santos.",
        preco: 199.90,
        desenvolvedora: "Rockstar Games",
        tags: ["Ação", "Aventura"],
        categoria: "Aventura",
        foto: "https://assetsio.gnwcdn.com/eurogamer-zjp1vx.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
      },
      {
        id: 11,
        nome: "Counter strike global ofensive-2",
        descricao: "Counter-Strike 2, conhecido também como CS2 é um jogo tático multijogador de tiro em primeira pessoa anunciado 22 de março de 2023[1][2][3] e lançado em 27 de setembro de 2023.",
        preco: 79.90,
        desenvolvedora: "Valve",
        tags: ["FPS", "Multiplayer Online"],
        categoria: "FPS",
        foto: "https://macmagazine.com.br/wp-content/uploads/2023/10/02-Counter-Strike-2-1160x653.jpg.avif"
      },
      {
        id: 12,
        nome: "EAFC 25",
        descricao: "O jogo de futebol que traz as ligas e equipes do mundo todo para suas mãos.",
        preco: 299.90,
        desenvolvedora: "EA Sports",
        tags: ["Esporte"],
        categoria: "Esporte",
        foto: "https://store-images.s-microsoft.com/image/apps.5355.13738418562228928.b9164f2c-cee7-43f3-911d-27a5098cfb0c.c8a261c2-4f5e-42f5-9a2f-9a83a0380d4f?q=90&w=320&h=180"
      }
    ];
    return of(jogos);
  }
}
