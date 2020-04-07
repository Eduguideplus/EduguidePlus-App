import { ToastLoadingProvider } from './../../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideotutorialcategoryPage } from '../videotutorialcategory/videotutorialcategory';
import { ClientApiProvider } from '../../../providers/client-api/client-api';


/**
 * Generated class for the VideotutoriallistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videotutoriallist',
  templateUrl: 'videotutoriallist.html',
})
export class VideotutoriallistPage {
  public video_cat_list:any;
  constructor(public restApi:ClientApiProvider, public toastService:ToastLoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideotutoriallistPage');
    this.toastService.presentLoading('')
    this.restApi.video_cat_list().subscribe((data:any)=>{
      this.toastService.hide();
      this.video_cat_list= data.video_cat_list;
    },(error:any)=>{
      this.toastService.hide();
      this.toastService.create("Having some issues from server end ");
    })
  }
  
  gotoVideotutorialcategory(item){
console.log('cat_id'+item.category_id);
   this.navCtrl.push(VideotutorialcategoryPage,{cat_id:item.category_id});
  }

 
}
