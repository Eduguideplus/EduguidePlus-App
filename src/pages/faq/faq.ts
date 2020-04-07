import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
faq_list:any;

  constructor(public restApi:ClientApiProvider, public toastService:ToastLoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
    this.toastService.presentLoading('');
    this.restApi.faq_list().subscribe((data:any)=>{
      this.toastService.hide();
      this.faq_list=data.get_faq;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Having some issues form server end");
    })
  }

}
