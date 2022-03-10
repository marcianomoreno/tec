import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PercussionComponent } from './percussion/percussion.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    PercussionComponent
  ],
  exports: [
    PercussionComponent
  ],
})
export class UiModule {}
