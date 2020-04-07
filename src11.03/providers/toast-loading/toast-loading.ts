import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Toast, ToastController,LoadingController } from 'ionic-angular';
/*
  Generated class for the ToastLoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastLoadingProvider {
  loader:any;
  toast: Toast;
  constructor(public toastCtrl: ToastController,public loadingCtrl: LoadingController,public http: HttpClient) {
    console.log('Hello ToastLoadingProvider Provider');
  }
  presentLoading(msg) {
    this.loader = this.loadingCtrl.create({
       content: msg,
       //duration: 3000
     });
     this.loader.present();
   }
   hide() {
     if (this.loader) {
       this.loader.dismiss();
     }
   }
   /*toast message controller */
   create(message, ok = false, duration = 2000) {
    if (this.toast) {
      this.toast.dismiss();
    }

    this.toast = this.toastCtrl.create({
      message,
      duration: ok ? null : duration,
      position: 'bottom',
      showCloseButton: ok,
      closeButtonText: 'OK'
    });
    this.toast.present();
}
}
