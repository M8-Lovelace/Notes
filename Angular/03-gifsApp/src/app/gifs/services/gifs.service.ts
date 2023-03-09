import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gift, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  // Datos para consultar la API
  private urlApi = 'https://api.giphy.com/v1/gifs';
  private apiKey: string = 'NA54KoehBQdCumgutnfhEz4nklL0mahW';

  // Arreglos donde se guardarán búsquedas y resultados
  private _historial: string[] = [];
  public resultados: Gift[] = [];

  // Retornamos el arreglo del historial, que es llamado en los componentes, pages, etc
  get historial(): string[] {
    return [...this._historial];
  }

  // Al generar la instancia del servicio, obtenemos los datos del localStorage y los asignamos
  constructor(private http: HttpClient) {
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  // Método para actualizar el historial y los resultados
  buscarGifs(query: string = 'The Last Kingdom', limit: number = 69): void {
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('limit', limit)
      .set('q', query);
    query = query.toLocaleLowerCase().trim();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    this.http
      .get<SearchGifsResponse>(`${this.urlApi}/search?`, { params })
      .subscribe((resp: SearchGifsResponse) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
  }
}
