import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters, Result } from '../interfaces/characters';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {

  characters: Result[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Characters>('https://rickandmortyapi.com/api/character')
    .subscribe((response) => {
      console.log('response', response);
      this.characters = response.results;
      console.log('characters', this.characters);
    });
  }

}

