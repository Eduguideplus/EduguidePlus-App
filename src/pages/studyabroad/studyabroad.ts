import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';

/**
 * Generated class for the StudyabroadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studyabroad',
  templateUrl: 'studyabroad.html',
})
export class StudyabroadPage {
study_list:any;
fees:any;
  constructor(public restApi:ClientApiProvider, public toastService:ToastLoadingProvider,  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudyabroadPage');
    this.toastService.presentLoading('');
    this.restApi.study_abord().subscribe((data:any)=>{
      this.study_list=data.service_list;
      
    
      this.toastService.hide();
    },(error:any)=>{
      this.toastService.create('Having some issues from server end ');
      this.toastService.hide();
    })
  }

}
