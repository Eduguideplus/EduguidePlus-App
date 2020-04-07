import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CourseexamdeatilsPage } from '../courseexamdeatils/courseexamdeatils';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';

/**
 * Generated class for the CouserexamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-couserexam',
  templateUrl: 'couserexam.html',
})
export class CouserexamPage {
public course_exam_list:any;
public corse_id:any;
public course_name:any;


  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController,public navPrm: NavParams) {
  this.toastService.presentLoading('')
   this.course_exam_list='';
   this.corse_id= this.navPrm.get('param');

   let postparams={
    corse_id:this.corse_id
  }

  this.restApi.get_all_eaxm_list(postparams).subscribe((data:any)=>{
      this.toastService.hide();
        this.course_exam_list= data.examLevel;
        this.course_name= data.course_name;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Having some issues from server end");
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CouserexamPage');
  }
  
  gotoCourseexamdeatils(examId){
  
    this.navCtrl.push(CourseexamdeatilsPage,{param:examId });
  }

}
