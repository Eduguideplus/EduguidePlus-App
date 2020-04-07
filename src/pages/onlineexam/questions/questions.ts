import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ExamresultPage } from '../examresult/examresult';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { LoginPage } from '../../login/login';

import { Storage } from '@ionic/storage';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
public tesdetails: any;
public total_quest: any;
public examtypename: any;
public subjectname: any;
public total_question: any;
public exam_duration: any;
public total_marks:any;
public set_id:any;
public set_name:any;
public loggeduserId: any;
public exam_type_id:any;
public userexam_id:any;
public subject_id: any;

public current_question:any;
public current_question_marks:any;
public current_question_neg_marks:any;
public q_id:any;

public current_ans_array:any;
public current_question_no: any;
public total_question_array: any;
public attempt_ans_id:any;
public isDisable : boolean     = false;

minutes:any;
/// couter

timeInSeconds:any;
time:any;
runTimer:any;
hasStarted:any;
hasFinished:any;
remainingTime:any;
displayTime:any;

  constructor(public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController, public storage:Storage, public navPrm: NavParams, public alertCtrl: AlertController) {
this.attempt_ans_id=0;
  this.current_ans_array='';

  this.storage.get('user_id').then((user_id) => {

  this.loggeduserId = user_id;

    let usersessionid  : string = this.loggeduserId;


      this.toastService.presentLoading('');

      this.set_id= this.navPrm.get('record');
      this.set_name= this.navPrm.get('setName');
      this.examtypename= this.navPrm.get('examName');
      this.subjectname= this.navPrm.get('subName');
      this.exam_duration= this.navPrm.get('duration');

            let postparams={
                set_id:this.set_id,
                user_id:this.loggeduserId

                  }
           this.restApi.start_exam(postparams).subscribe((data:any)=>{
            this.toastService.hide();
            this.userexam_id=data.user_exam_id;

             this.current_question=data.current_question;
              this.current_question_marks=data.current_question_marks;
               this.current_question_neg_marks=data.current_question_neg_marks;
                this.q_id=data.q_id;
                 this.current_ans_array=data.current_ans_array;
                  this.current_question_no=data.current_question_no;
                  this.total_question_array= data.total_question_array;
                  this.subject_id=data.subject_id;

                console.log(this.total_question_array);



           },(error:any)=>{
              this.toastService.hide();
              this.toastService.create("Internal server error");
        });

          console.log(typeof(this.exam_duration))
          this.initTimer(this.exam_duration);
          this. startTimer();
        /// this.startCountDown(Number(this.exam_duration))






    });

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');

  }
gotoquestion(item)
{
 this.toastService.presentLoading('');
  console.log(item);
  this.attempt_ans_id=0;
  this.isDisable   = false;
  this.current_question=item.question;
  this.current_question_marks=item.marks;
  this.current_question_neg_marks=item.neg_mark;
  this.q_id=item.questionId;
  this.current_ans_array=item.answerArray;
  this.current_question_no=item.qno;
 this.toastService.hide();

}
attempansaction(ansid)
{
  this.attempt_ans_id=ansid;
}

prevQuest(indx)
{
  indx--;
  indx--;
  this.attempt_ans_id=0;
  this.toastService.presentLoading('');
  this.current_question=this.total_question_array[indx].question;
  this.current_question_marks=this.total_question_array[indx].marks;
  this.current_question_neg_marks=this.total_question_array[indx].neg_mark;
  this.q_id=this.total_question_array[indx].questionId;
  this.current_ans_array=this.total_question_array[indx].answerArray;
  this.current_question_no=this.total_question_array[indx].qno;
  this.isDisable   = false;
  this.toastService.hide();
}
savelastQuest(indx)
{
  this.toastService.presentLoading('');
  let postparams={
                set_id:this.set_id,
                subject_id: this.subject_id,
                user_id:this.loggeduserId,
                q_id:this.q_id,
                userexam_id: this.userexam_id,
                attempt_ans_id:this.attempt_ans_id

                  }
  this.restApi.save_next_question(postparams).subscribe((data:any)=>{

  this.attempt_ans_id=0;
  this.isDisable   = true;
  this.total_question_array= data.total_question_array;

  this.toastService.hide();
},(error:any)=>{
              this.toastService.hide();
              this.toastService.create("Internal server error");
        });

}
saveQuest(indx)
{


  this.toastService.presentLoading('');
  let postparams={
                set_id:this.set_id,
                subject_id: this.subject_id,
                user_id:this.loggeduserId,
                q_id:this.q_id,
                userexam_id: this.userexam_id,
                attempt_ans_id:this.attempt_ans_id

                  }
  this.restApi.save_next_question(postparams).subscribe((data:any)=>{

  this.attempt_ans_id=0;
  this.current_question=this.total_question_array[indx].question;
  this.current_question_marks=this.total_question_array[indx].marks;
  this.current_question_neg_marks=this.total_question_array[indx].neg_mark;
  this.q_id=this.total_question_array[indx].questionId;
  this.current_ans_array=this.total_question_array[indx].answerArray;
  this.current_question_no=this.total_question_array[indx].qno;

 this.total_question_array= data.total_question_array;
  this.toastService.hide();
},(error:any)=>{
              this.toastService.hide();
              this.toastService.create("Internal server error");
        });

}

confirmSubmit()
{
   const confirm = this.alertCtrl.create({
      title: 'are you sure?',
      message: 'you want to submit your Test to see the result?',
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
           this.gotoExamresult();
          }
        }
      ]
    });
    confirm.present();
}


  gotoExamresult()
  {

      let postparams={
                        set_id:this.set_id,
                        user_id:this.loggeduserId,
                        userexam_id: this.userexam_id,
                        end_time: this.remainingTime
                      }
      this.restApi.submit_test(postparams).subscribe((data:any)=>{

                                    this.attempt_ans_id=0;
                                    this.isDisable   = true;
                                    this.toastService.hide();
             this.navCtrl.setRoot(ExamresultPage,{record:this.userexam_id, set_id:this.set_id});


                    },
                    (error:any)=>{
                                      this.toastService.hide();
                                      this.toastService.create("Internal server error");
                                  });


  }


  // startCountDown(seconds){
  //   console.log("its hit");

  //   var counter = seconds;

  //   //Math.floor(seconds / 60)+':'+Math.floor(seconds % 60);
  //   var interval = setInterval(() => {
  //     this.minutes = counter;
  //     counter--;
  //     if (counter == 1 ) {
  //       // code here will run when the counter reaches zero.
  //       clearInterval(interval);
  //       this.gotoExamresult();
  //       console.log('Ding!');
  //     }
  //   }, 1000);
  // }
  initTimer(exam_duration:number) {



    // Pomodoro is usually for 25 minutes
   if (!this.timeInSeconds) {
     this.timeInSeconds = exam_duration;
   }

   this.time = this.timeInSeconds;
   this.runTimer = false;
   this.hasStarted = false;
   this.hasFinished = false;
   this.remainingTime = this.timeInSeconds;

   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
 }

 startTimer() {

    this.runTimer = true;
   this.hasStarted = true;
   this.timerTick();
 }

 pauseTimer() {
   this.runTimer = false;
 }

 resumeTimer() {
   this.startTimer();
 }

 timerTick() {
   setTimeout(() => {

     if (!this.runTimer) { return; }
     this.remainingTime--;
     this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
     if (this.remainingTime > 0) {
       this.timerTick();
     }
     else {
       this.hasFinished = true;
       this.gotoExamresult();
     }
   }, 1000);
 }

 getSecondsAsDigitalClock(inputSeconds: number) {
   var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
   var hours = Math.floor(sec_num / 3600);
   var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
   var seconds = sec_num - (hours *3600) - (minutes *60);
   var hoursString = '';
   var minutesString = '';
   var secondsString = '';
   hoursString = (hours < 10) ? "0" + hours : hours.toString();
   minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
   secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
   return  hoursString + ':' + minutesString + ':' + secondsString;
 }
}
