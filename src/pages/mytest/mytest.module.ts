import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MytestPage } from './mytest';

@NgModule({
  declarations: [
    MytestPage,
  ],
  imports: [
    IonicPageModule.forChild(MytestPage),
  ],
})
export class MytestPageModule {}
