
import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the ContactusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
  public contact_us:FormGroup;
contact_details:any;
social_link_data:any;
address:any;
contact_number:any;
contact_email:any;

facebook_link:any;
twitter_link:any;
youtube_link:any
linkdin:any;

name:any;
mobile_number:any;
email_id:any;
subject:any;
message:any;
  constructor(public formBuilder:FormBuilder, public inappBrowser:InAppBrowser, public restApi:ClientApiProvider, public toastService:ToastLoadingProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.contact_us = formBuilder.group({
      'name': ['', Validators.required],
      'mobile_number': ['', Validators.required],
      'email_id': ['', Validators.required],
      'subject': ['', Validators.required],
      'message': ['', Validators.required],

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
    this.toastService.presentLoading('');
    this.restApi.get_site_address().subscribe((data:any)=>{
      this.toastService.hide();
      this.contact_details=data.data.contact_details;
      this.social_link_data=data.data.social_link;

this.address=this.contact_details[0].contact_address;
this.contact_number=this.contact_details[0].contact_phno;
this.contact_email=this.contact_details[0].contact_email;

this.facebook_link=this.social_link_data[0].facebook_link;
this.twitter_link=this.social_link_data[0].twitter_link;
this.youtube_link=this.social_link_data[0].youtube_link;
this.linkdin=this.social_link_data[0].linkedin_link;


      

    },(error:any)=>{
      this.toastService.hide();
    })
  }

  public youtube_Fn():void{
    console.log(this.youtube_link)
    const browser = this.inappBrowser.create(this.youtube_link,'_blank',{location:'no'});
  }
  public linkedin_Fn():void{
    console.log(this.linkdin)
    const browser = this.inappBrowser.create(this.linkdin,'_blank',{location:'no'});
  }
  public twitter_Fn():void{
    console.log(this.twitter_link)
    const browser = this.inappBrowser.create(this.twitter_link,'_blank',{location:'no'});
  }
  public facebook_Fn():void{
    console.log(this.facebook_link)
    const browser = this.inappBrowser.create(this.facebook_link,'_blank',{location:'no'});
  }
  contactUs():void{
    console.log(this.contact_us.value);
    let value = this.contact_us.value;
    let post_params={
      email_id:value.email_id,
      message:value.message,
      mobile_number:value.mobile_number,
​      name:value.name,
      subject:value.subject
    }
    this.restApi.submit_contact_us(post_params).subscribe((data:any)=>{},(error:any)=>{})
  }
}
