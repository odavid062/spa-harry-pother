import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from './character';
import { SpellsListComponent } from './spells/spells-list/spells-list.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet, SpellsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  title = 'spa-harry-potter';
  characters: Character[] = [];

  constructor(private http: HttpClient){
    this.getCharacters().subscribe(dados => {
      this.characters = dados;
      console.log(dados);
    });

  }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
}