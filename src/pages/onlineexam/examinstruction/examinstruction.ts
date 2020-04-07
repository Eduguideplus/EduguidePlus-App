import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';

import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { LoginPage } from '../../login/login';

import { Storage } from '@ionic/storage';

/**
 * Generated class for the ExaminstructionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examinstruction',
  templateUrl: 'examinstruction.html',
})
export class ExaminstructionPage {
public loggeduserId: any;
public tesdetails: any;
public total_quest: any;
public examtypename: any;
public subjectname: any;
public total_question: any;
public exam_duration: any;
public total_marks:any;
public set_id:any;
public set_name:any;


  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController, public storage:Storage, public navPrm: NavParams, public alertCtrl: AlertController) {

  this.storage.get('user_id').then((user_id) => {

  this.loggeduserId = user_id;

    let usersessionid  : string = this.loggeduserId;
    if(!usersessionid)
    {
        this.navCtrl.push(LoginPage);
       this.toastService.create("Please login first");
    }
    else{

      this.toastService.presentLoading('');
           this.tesdetails= this.navPrm.get('record');
           this.set_id= this.tesdetails.kq_id;


         
                let postparams={
                set_id:this.set_id,
                user_id:this.loggeduserId

                  }

            this.restApi.get_test_details(postparams).subscribe((data:any)=>{
            this.toastService.hide();
       
                 this.set_name= data.testname;
                 this.examtypename= data.examtypename;
                 this.subjectname= data.subjectname;
                 this.exam_duration= data.exam_duration;
                 this.total_marks= data.total_marks;
                 this.total_question= data.total_question;

           },(error:any)=>{
              this.toastService.hide();
              this.toastService.create("Internal server error");
        });
            
        }
    
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExaminstructionPage');
  }
 
  gotoQuestions(){

  const confirm = this.alertCtrl.create({
      title: 'are you sure?',
      message: 'you want to start your Examination?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
            this.navCtrl.setRoot(QuestionsPage,{record:this.set_id,duration:this.exam_duration,setName:this.set_name,examName:this.examtypename,subName:this.subjectname});
          }
        }
      ]
    });
    confirm.present();

    
  }

}
