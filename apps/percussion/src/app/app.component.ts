import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drum } from '@tec/data';

@Component({
  selector: 'tec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  drums: Drum[] = [];
  constructor(private http: HttpClient) {
    this.fetch();
  }
  fetch() {
    this.http.get<Drum[]>('api/drums').subscribe((t) => (this.drums = t));
  }

  addDrum() {
    this.http.post('/api/addDrum', {}).subscribe(() => {
      this.fetch();
    });
  }
}
