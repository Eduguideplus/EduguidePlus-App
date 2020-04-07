import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ToastLoadingProvider } from '../../providers/toast-loading/toast-loading';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {
  public isShow:boolean=true;
  public isHide:boolean=false;
  public mobileNumber:any;
  //
  public otp:any;
  public newpassowrd:any;
  public confirmpassowrd:any;
  constructor(public storage:Storage, public toastService:ToastLoadingProvider, public restApi: ClientApiProvider , public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }
  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
 checkmobileNumber(){
   this.toastService.presentLoading('Sending..')
   let postparams={
    mobileNumber:this.mobileNumber
   }
  this.restApi.checkmobileNumber(postparams).subscribe((data:any)=>{
    if(data.result==1){
      this.toastService.create('OTP has been sent to your registered mobile no');
      this.storage.set('otp_user_id',data.user_id)
    this.isShow=false;
    this.isHide=true;
      this.toastService.hide();
    }else{
        this.toastService.create('Mobile number dose not exist in our record')
        this.toastService.hide();
    }
    this.toastService.create
  },(error:any)=>{
    this.toastService.hide();
    this.toastService.create('Having some issues form server end')
  })
 }
 resetPassword(){
   this.toastService.presentLoading('');
   if(this.newpassowrd===this.confirmpassowrd){
      this.storage.get('otp_user_id').then((user_id)=>{
        let postparmas={
          newpassowrd:this.newpassowrd,
          otp:this.otp,
          user_id:user_id
        }
         this.restApi.resetPassword(postparmas).subscribe((data:any)=>{
            if(data.result==1){
              this.toastService.create("Your password has successfully reset");
              this.storage.remove('otp_user_id')
              this.navCtrl.setRoot(HomePage);
              this.toastService.hide();
            }else{
              this.toastService.create('Invalid otp')
              this.toastService.hide();
            }
         },(error:any)=>{
            this.toastService.hide();
            this.toastService.create("having some issues form server end ")
         })
      })
   }else{
     this.toastService.create('Password dose not match');
   }
 }
}
