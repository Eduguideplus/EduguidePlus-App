import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExamlistPage } from './examlist';

@NgModule({
  declarations: [
    ExamlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ExamlistPage),
  ],
})
export class ExamlistPageModule {}
