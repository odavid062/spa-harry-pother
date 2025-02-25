import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { spell } from '../../spell';

@Component({
  selector: 'app-spells-list',
  imports: [ CommonModule],
  templateUrl: './spells-list.component.html',
  styleUrl: './spells-list.component.css'
})
export class SpellsListComponent {


  
    private apiUrl = 'https://hp-api.onrender.com/api/spells';
  
    title = 'spa-harry-potter';
    spells: spell [] = [];
  
    constructor(private http: HttpClient){
      this.getSpells().subscribe(dados => {
        this.spells = dados;
        console.log(dados);
      });
  
    }
  
    getSpells(): Observable<spell[]> {
      return this.http.get<spell[]>(this.apiUrl);
    }
  }


