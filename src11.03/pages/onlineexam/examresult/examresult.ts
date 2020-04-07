import { AnalysisPage } from './../../analysis/analysis';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { HomePage } from '../../home/home';





/**
 * Generated class for the ExamresultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-examresult',
  templateUrl: 'examresult.html',
})
export class ExamresultPage {

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

public user_exam_id: any;


  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController, public storage:Storage, public navPrm: NavParams, public alertCtrl: AlertController) {

  this.storage.get('user_id').then((user_id) => {

  this.loggeduserId = user_id;

    let usersessionid  : string = this.loggeduserId;
   
    

      this.toastService.presentLoading('');
           this.user_exam_id= this.navPrm.get('record');
           this.set_id= this.navPrm.get('set_id');


         
                let postparams={
                set_id:this.set_id,
                user_id:this.loggeduserId,
                user_exam_id: this.user_exam_id

                  }

            this.restApi.get_test_results(postparams).subscribe((data:any)=>{
            this.toastService.hide();
       
                 this.set_name= data.testname;
                 this.examtypename= data.examtypename;
                 this.subjectname= data.subjectname;
                 this.exam_duration= data.exam_duration;
                 this.total_marks= data.total_marks;
                 this.total_question= data.total_question;

                 this.attempted= data.attempted;
                 this.unattempted= data.unattempted;
                 this.correct_answer= data.correct_answer;
                 this.wrong_answer= data.wrong_answer;
                 this.obtained_marks= data.obtained_marks;

           },(error:any)=>{
              this.toastService.hide();
              this.toastService.create("Internal server error");
        });
            
        
    
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExamresultPage');
  }

  gotoHomePage(){
    this.navCtrl.setRoot(HomePage);
  }

  gotoAnalysisPage(){
    this.navCtrl.push(AnalysisPage,{record: this.user_exam_id});
  }

}
