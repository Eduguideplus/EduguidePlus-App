import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../providers/toast-loading/toast-loading';
import { LoginPage } from '../login/login';

import { Storage } from '@ionic/storage';





/**
 * Generated class for the AnalysisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analysis',
  templateUrl: 'analysis.html',
})
export class AnalysisPage {

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

public attempted: any;
public unattempted:any;
public correct_answer:any;
public wrong_answer:any;
public obtained_marks:any;

public analysis_report: any;

public user_exam_id: any;


  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController, public storage:Storage, public navPrm: NavParams, public alertCtrl: AlertController) {
    this.user_exam_id= this.navPrm.get('record');
    this.analysis_report=null;

    console.log(this.user_exam_id);

    this.storage.get('user_id').then((user_id) => {

    this.loggeduserId = user_id;

    let usersessionid  : string = this.loggeduserId;
   
    

      this.toastService.presentLoading('');
           


         
                let postparams={
               
                user_id:this.loggeduserId,
                user_exam_id: this.user_exam_id

                  }

            this.restApi.get_analysis_report(postparams).subscribe((data:any)=>{
            this.toastService.hide();
       
                 this.analysis_report=data.analysis_report;

           },(error:any)=>{
              this.toastService.hide();
              this.toastService.create("Internal server error");
        });
            
        
    
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalysisPage');
  }


  gotoHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
