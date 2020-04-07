import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { Events,IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { UserdashboardPage } from '../dashboard/userdashboard/userdashboard';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
public email:any;
public password:any;

  constructor(public menu:MenuController, public event:Events, public storage:Storage, public toastService:ToastLoadingProvider, public restApi:ClientApiProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
  gotoForgotpassword(){
    this.navCtrl.push(ForgotpasswordPage);
  }
  
  gotoUserdashboard(){
    //this.navCtrl.push(UserdashboardPage);
    this.toastService.presentLoading('');
    if(this.email==undefined){
      this.toastService.create("Please enter a valid input");
       this.toastService.hide();
    }else if(this.password==undefined){
      this.toastService.create("Please enter a valid input");
       this.toastService.hide();
    }else{
      let postparams={
        username:this.email,
        password:this.password
      }
      this.restApi.userLogin(postparams).subscribe((data:any)=>{
        if(data.result==1){
          this.storage.set('user_id',data.user_id)
          //user name
          this.storage.set('user_name',data.user_fname)
          let postparams={
            username:data.user_fname,
            profile_photo:data.profile_photo
          }
          this.event.publish('user:signedIn',postparams );
         // this.event.publish('user:image',);



          this.menu.enable(false, 'Homescreehmenu');
          this.menu.enable(true, 'loginmenu');
          this.toastService.create('You have successfully logged in !');
          this.toastService.hide();

          this.navCtrl.setRoot(HomePage)
        }else{
          this.toastService.create('Invalid password or email id');
          this.toastService.hide();
        } 
      },(error:any)=>{
        this.toastService.create('Having some issues from server end ');
        this.toastService.hide();
      })
    }
  }

}
