import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../providers/toast-loading/toast-loading';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MytestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytest',
  templateUrl: 'mytest.html',
})
export class MytestPage {
public name:any;
public email:any;
public mobile:any;
public dob:any;
public gender:any;
public address:any;
public serverSideData:any;
public image:any;
public profilr_pid:any;
public _SUFFIX:any;
public testList:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public restApi:ClientApiProvider, public toastService:ToastLoadingProvider, public storage:Storage) {

   this.toastService.presentLoading('');

   this.storage.get('user_id').then((user_id)=>{
      console.log(user_id);
      let postparams={
        usersessionId:user_id,
      }
      this.restApi.get_my_test(postparams).subscribe((data:any)=>{
         
           this.testList = data.attempted_test_list;
          this.toastService.hide();
      },(error:any)=>{
        this.toastService.hide();
        this.toastService.create("Having some issues")
      })
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MytestPage');
  }

}
