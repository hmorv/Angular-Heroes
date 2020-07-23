import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //  todo: send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    //todo: send the message after fetching the hero
    this.messageService.add(`Hero Service: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
