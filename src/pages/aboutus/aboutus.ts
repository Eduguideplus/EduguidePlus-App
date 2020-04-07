import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {
about_us_data:any;
about_us:any;
about_us_img:any;
about_us_content:any;

why_us:any;
why_us_img:any;
why_us_content:any;
  constructor(public toastService:ToastLoadingProvider,public restApi:ClientApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
    this.toastService.presentLoading('');
    this.restApi.get_about_us().subscribe((data:any)=>{
      this.about_us_data=data.about_us;
      console.log()
      this.why_us = this.about_us_data[0].title;
      this.why_us_img = this.about_us_data[0].images;
      this.why_us_content = this.about_us_data[0].content;

      this.about_us = this.about_us_data[1].title;
      this.about_us_img = this.about_us_data[1].images;
      this.about_us_content = this.about_us_data[1].content;
      

      console.log("why us"+this.why_us);
      console.log("about_us"+this.about_us);
      this.toastService.hide();
    },(error:any)=>{
      this.toastService.hide();
    })
  }

}
