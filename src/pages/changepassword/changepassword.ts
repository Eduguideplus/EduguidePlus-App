import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../providers/toast-loading/toast-loading';
import { HomePage } from '../home/home';

/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {
  isOldPssword:boolean=true;
  isNewPssword:boolean=false;
  oldPassword:any;
  //
  public newpassword:any;
  public confirmpassword:any;
  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider, public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }
  check_old_passoword(){
    this.toastService.presentLoading('');
    this.storage.get('user_id').then((user_id)=>{
      let postparams={
          user_id:user_id,
          oldPassword:this.oldPassword
      }
      this.restApi.passowrdCheck(postparams).subscribe((data:any)=>{
        if(data.result==1){
          this.isOldPssword=false;
          this.isNewPssword=true;
        }else{
          this.toastService.create("Your password dose not match ")
        }
        this.toastService.hide();

      },(error:any)=>{
        this.toastService.hide();
        this.toastService.create('Having some issues from server end')
      })
    })//storage

  }

  updatePassword(){
    console.log(this.newpassword);
    console.log(this.confirmpassword);

    if(this.newpassword === this.confirmpassword){
      this.storage.get('user_id').then((user_id)=>{
        let postparams={
          newpassword:this.newpassword,
          user_id:user_id
        }
        this.restApi.updatePassword(postparams).subscribe((data:any)=>{
          this.navCtrl.setRoot(HomePage)
        },(error:any)=>{})
      })//storage

    }else{
    this.toastService.create("Password dose not match!");
    }
  }
}
