import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarqueePage } from './marquee';

@NgModule({
  declarations: [
    MarqueePage,
  ],
  imports: [
    IonicPageModule.forChild(MarqueePage),
  ],
})
export class MarqueePageModule {}
