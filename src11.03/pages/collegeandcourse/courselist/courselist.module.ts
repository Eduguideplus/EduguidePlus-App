import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CourselistPage } from './courselist';

@NgModule({
  declarations: [
    CourselistPage,
  ],
  imports: [
    IonicPageModule.forChild(CourselistPage),
  ],
})
export class CourselistPageModule {}
