import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CouserexamPage } from '../couserexam/couserexam';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
/**
 * Generated class for the CourselistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courselist',
  templateUrl: 'courselist.html',
})
export class CourselistPage {
public course_list:any;


  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController) {
  this.course_list='';

  this.toastService.presentLoading('')
    
   this.restApi.get_all_course_list().subscribe((data:any)=>{
    this.course_list=data.course_list;
   

    
    this.toastService.hide();
   },(error:any)=>{
    this.toastService.hide();
    this.toastService.create("Having some issues");
   });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourselistPage');
  }
  
  gotoCouserexam(courseid){

    this.navCtrl.push(CouserexamPage,{param:courseid});
  }


}
