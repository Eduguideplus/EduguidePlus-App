import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading'
/**
 * Generated class for the CourseexamdeatilsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-courseexamdeatils',
  templateUrl: 'courseexamdeatils.html',
})
export class CourseexamdeatilsPage {

public course_exam_info:any;
public exam_id:any;
public exam_name:any;
public institute_list:any;

  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController,public navPrm: NavParams) {
  this.toastService.presentLoading('')
   this.course_exam_info='';
   this.institute_list='';
   this.exam_id= this.navPrm.get('param');

   let postparams={
    exam_id:this.exam_id
  }

  this.restApi.get_eaxm_details(postparams).subscribe((data:any)=>{
      this.toastService.hide();
        this.course_exam_info= data.examinfoList;
        this.exam_name= data.exam_name;
        this.institute_list= data.instituLevel;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Having some issues from server end");
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseexamdeatilsPage');
  }

}
