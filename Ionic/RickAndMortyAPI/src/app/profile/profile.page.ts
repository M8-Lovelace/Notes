import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from '../interfaces/characters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: string | null = null;
  character: Result | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get<Result>(`https://rickandmortyapi.com/api/character/${this.profileId}`)
      .subscribe(response => {
        this.character = response;
      });
  }

}


