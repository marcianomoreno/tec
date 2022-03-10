import { Injectable } from '@nestjs/common';
import { Drum } from '@tec/data';

@Injectable()
export class AppService {
  drums: Drum[] = [{ title: 'Drumset'}, {title: 'Djembé'}, {title: 'Timpani'}, {title: 'Marimba'}];

  getDrums(): Drum[] {
    return this.drums;
  }

  addDrum() {
    this.drums.push({
      title: `New drum: ${Math.floor(Math.random() * 1000)}`
    });
  }
}
