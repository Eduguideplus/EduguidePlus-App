import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GototestPage } from '../gototest/gototest';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ExamlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examlist',
  templateUrl: 'examlist.html',
})
export class ExamlistPage {
public exam_list:any;

  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController, public storage:Storage) {

  this.exam_list='';

  this.toastService.presentLoading('');
    
   this.restApi.get_exam_list().subscribe((data:any)=>{
    this.exam_list=data.exam_list;

    console.log(this.exam_list);
   

    
    this.toastService.hide();
   },(error:any)=>{
    this.toastService.hide();
    this.toastService.create("Internal server error");
   });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamlistPage');
  }
  
  gotoGototest(item){
    this.navCtrl.push(GototestPage,{record:item});
  }

}
