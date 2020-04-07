import { ToastLoadingProvider } from './../../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import {DomSanitizer} from '@angular/platform-browser';
/**
 * Generated class for the VideotutorialcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videotutorialcategory',
  templateUrl: 'videotutorialcategory.html',
})
export class VideotutorialcategoryPage {
cat_id:any;
video_list:any;
  constructor(public sanitizer: DomSanitizer,public restApi:ClientApiProvider, public toastService:ToastLoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.cat_id=this.navParams.get('cat_id');
  }

  ionViewDidLoad() {
    this.toastService.presentLoading('');
    console.log('ionViewDidLoad VideotutorialcategoryPage');
    let postparams={
    cat_id:this.cat_id
  }
    this.restApi.video_list(postparams).subscribe((data:any)=>{
      this.toastService.hide();
        this.video_list= data.video_list;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Having some issues from server end");
    })
  }
  photoURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }
}
