import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {
service_list:any;
  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicePage');
    this.toastService.presentLoading("");
    this.restApi.get_service_list().subscribe((data:any)=>{
      if(data.result=1){
        this.service_list=data.service_list;
        this.toastService.hide();
      }else{
        this.toastService.create("No Records found");
      }
    },(error:any)=>{
      this.toastService.create("Having some issues from server end");
    })
  }

}
