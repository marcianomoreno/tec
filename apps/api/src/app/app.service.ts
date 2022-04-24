import { Injectable } from '@nestjs/common';
import { Drum } from '@tec/data';

@Injectable()
export class AppService {
  drums: Drum[] = [
    {id: 0, title: 'Drumset'},
    {id: 1, title: 'Djembé'},
    {id: 2, title: 'Timpani'},
    {id: 3, title: 'Marimba'}
  ];

  getDrums(): Drum[] {
    return this.drums;
  }

  getDrumById(id: number) {
    console.log('service:getDrumById');
    return this.drums.find(drum => drum.id === id);
  }

  addDrum() {
    console.log('service:addDrum');
    const id = Math.floor(Math.random() * 1000);
    const drum: Drum = {
      id: id,
      title: `New drum: ${id}`};
    this.drums.push(drum);
    return drum;
  }

  updateDrum() {
    console.log('service:updateDrum');
  }

  partialUpdateDrum() {
    console.log('service:partialUpdateDrum');
  }

  deleteDrum(id: number) {
    console.log('service:deleteDrum');
    const drum = this.drums.find(drum => drum.id === id);
    this.drums = this.drums.filter(drum => drum.id !== id);
    return drum;
  }
}
