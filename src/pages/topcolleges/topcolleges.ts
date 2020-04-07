import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { ClientApiProvider } from '../../providers/client-api/client-api';


/**
 * Generated class for the TopcollegesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topcolleges',
  templateUrl: 'topcolleges.html',
})
export class TopcollegesPage {
collage_list:any;

  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  this.toastService.presentLoading("");
    this.restApi.get_topcollage_list().subscribe((data:any)=>{
      
        this.collage_list=data.top_collage_array;
        this.toastService.hide();
      
    },(error:any)=>{

      this.toastService.create("Having some issues from server end");
      this.toastService.hide();
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopcollegesPage');
  }

}
