import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { InAppBrowser } from '@ionic-native/in-app-browser';
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
public searchkey=[];

  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController,public navPrm: NavParams, public inappBrowser:InAppBrowser) {
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

  onInput(levelid, i)
{
  
      this.toastService.presentLoading('');



        let postparams={
                exam_id:this.exam_id,
                levelid:levelid,
                searchkey:this.searchkey[i]
            }

  this.restApi.get_eaxm_details_search(postparams).subscribe((data:any)=>{
      this.toastService.hide();
        this.course_exam_info= data.examinfoList;
        this.exam_name= data.exam_name;
        this.institute_list= data.instituLevel;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Internal serve error");
    })






  
}

openDetails(id)
{

  const browser = this.inappBrowser.create('https://www.eduguideplus.com/institute-details/'+id,'_blank',{location:'no'});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CourseexamdeatilsPage');
  }

}
