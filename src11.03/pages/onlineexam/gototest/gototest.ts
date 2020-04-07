import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExaminstructionPage } from '../examinstruction/examinstruction';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the GototestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gototest',
  templateUrl: 'gototest.html',
})
export class GototestPage {
public exam_details:any;
public subject_test_list:any;
public exam_id: any;


  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController, public storage:Storage, public navPrm: NavParams) {
  
  this.subject_test_list='';
  this.exam_details=this.navPrm.get('record');

  console.log(this.exam_details);
  this.exam_id= this.exam_details.exam_id;
  if(this.exam_id)
  {
  this.toastService.presentLoading('');
      let postparams={
    exam_id:this.exam_id
  }

  this.restApi.go_to_test_list(postparams).subscribe((data:any)=>{
      this.toastService.hide();
       
        this.subject_test_list= data.subject_test_list;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Internal server error");
    })
  }
  else{
  this.toastService.create("Please choose any Exam");
  }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GototestPage');
  }
  
  gotoExaminstruction(res){

    this.navCtrl.push(ExaminstructionPage,{record:res});
  }

}
