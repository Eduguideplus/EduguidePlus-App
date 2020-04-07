import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsandnoticePage } from './newsandnotice';

@NgModule({
  declarations: [
    NewsandnoticePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsandnoticePage),
  ],
})
export class NewsandnoticePageModule {}
