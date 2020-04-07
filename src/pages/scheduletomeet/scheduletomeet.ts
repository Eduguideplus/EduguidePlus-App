import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ScheduletomeetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheduletomeet',
  templateUrl: 'scheduletomeet.html',
})
export class ScheduletomeetPage {

public register:FormGroup;

public schedule_date:any;
public schedule_time:any;
public interested_course:any;


  constructor(public alertCtrl:AlertController, public formBuilder: FormBuilder,public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,   public navCtrl: NavController, public storage:Storage, public navParams: NavParams) {

   this.register = formBuilder.group({

      'schedule_date': ['', Validators.required],
      'schedule_time': ['', Validators.required],
      'interested_course': ['', Validators.required],
      


    });
  }

  doAction()
  {
   this.toastService.presentLoading('');
  	this.storage.get('user_id').then((user_id)=>{
      console.log(user_id);
      let postparams={
        user_id:user_id,
        schedule_date: this.schedule_date,
        schedule_time: this.schedule_time,
        interested_course: this.interested_course
      }
      this.restApi.submit_schedul_meet(postparams).subscribe((data:any)=>{
          
          this.toastService.hide();
           this.toastService.create("Thank You! Your request succesfully submited.");
          this.schedule_date=null;
           this.schedule_time=null;
            this.interested_course=null;

      },(error:any)=>{
        this.toastService.hide();
        this.toastService.create("Having some issues")
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduletomeetPage');
  }

}
