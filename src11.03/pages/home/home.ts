import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { NavController, AlertController,ToastController } from 'ionic-angular';
import { NewsandnoticePage } from '../newsandnotice/newsandnotice';
import { LatesteventsPage } from '../latestevents/latestevents';
import { CourselistPage } from '../collegeandcourse/courselist/courselist';
import { StudyabroadPage } from '../studyabroad/studyabroad';
import { VideotutoriallistPage } from '../allvideotutorial/videotutoriallist/videotutoriallist';
import { ExamlistPage } from '../onlineexam/examlist/examlist';
import { MarqueePage } from '../marquee/marquee';
import { EventsPage } from '../events/events';
import { ExpertisePage } from '../expertise/expertise';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public home_slider:any;
public loggeduserId: any;
public our_experties_list:any;
public eventList:any;
public news_notice_list:any;
public welcome_content: any;
baseURI:any="https://www.eduguideplus.com/";
  constructor(public file:File, public alertCtrl:AlertController,public transfer: FileTransfer, public androidPermissions: AndroidPermissions, public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,  public navCtrl: NavController,public storage:Storage,public toastCtrl  : ToastController) {

  }

  ionViewDidLoad(){
    this.toastService.presentLoading('')

   this.restApi.get_all_home_data().subscribe((data:any)=>{
    this.home_slider=data.sliders;
    this.our_experties_list=data.our_expart;
    this.news_notice_list= data.news_notice_list;
    this.eventList= data.eventList;
    this.welcome_content= data.home_content;
   


    this.toastService.hide();
   },(error:any)=>{
    this.toastService.hide();
    this.toastService.create("Having some issues");
   })
  }
  gotoNewsandnotice(){
    this.navCtrl.push(NewsandnoticePage);
  }

  gotoLatestevents(){
    this.navCtrl.push(LatesteventsPage);
  }

  gotoCourselist(){
    this.navCtrl.push(CourselistPage);
  }

  gotoStudyabroad(){
    this.navCtrl.push(StudyabroadPage);
  }

  gotoVideotutoriallist(){
    this.navCtrl.push(VideotutoriallistPage);
  }
  gotoExamlist(){

  this.storage.get('user_id').then((user_id) => {

  this.loggeduserId = user_id;

    let usersessionid  : string = this.loggeduserId;
    if(!usersessionid)
    {
        this.navCtrl.push(LoginPage);
       this.sendNotification(`Please login first`);
    }
    else{
           this.navCtrl.push(ExamlistPage);
    }
    });


    
  }
  openMarquee(){
    this.navCtrl.push(MarqueePage)
  }

  gotoEvents(){
    this.navCtrl.push(EventsPage);
  }
  gotoExpertise(){
    this.navCtrl.push(ExpertisePage);
  }
  downloadEventFile(event) {
    this.toastService.presentLoading('Downloading..')
    console.log("its called");
    let dir_name = 'Eduguide';
    let path = '';
    //alert("event"+event)
    const fileTransfer: FileTransferObject = this.transfer.create();


    let result = this.file.createDir(this.file.externalRootDirectory, dir_name, true);
    result.then((resp) => {
      path = resp.toURL();
      //alert(path)
      fileTransfer.download(this.baseURI+"assets/uploads/event/"+event, path + event).then((entry)=>{
        const alertSuccess = this.alertCtrl.create({
          title: `Download Succeeded!`,
          subTitle: `File was successfully downloaded to your Eduguide folder in your storage`,
          buttons: ['Ok']
        });
        alertSuccess.present();
        this.toastService.hide();
      },(error)=>{
        this.toastService.hide();
        //alert(JSON.stringify(error))
        const alertFailure = this.alertCtrl.create({
          title: `Download Failed!`,
          subTitle: `was not successfully downloaded. Error code: ${error.code}`,
          buttons: ['Ok']
        });
        alertFailure.present();

      })
    }, (err) => {
      alert('error on creating path : ' + err);
    });


  }


  download_event(event) {
    this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      .then(status => {
        if(status.hasPermission) {
          this.downloadEventFile(event);
        }
        else {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
            .then(status => {
              if(status.hasPermission) {
                this.downloadEventFile(event);
              }
            });
        }
      });
  }

  download_noticeFile(notice) {
    this.toastService.presentLoading('Downloading..')
    console.log("its called");
  //  alert("notice")
  let dir_name = 'Eduguide';
  let path = '';
  const fileTransfer: FileTransferObject = this.transfer.create();
  let result = this.file.createDir(this.file.externalRootDirectory, dir_name, true);
  result.then((resp) => {
    path = resp.toURL();
    //alert(path);
    fileTransfer.download(this.baseURI+"assets/uploads/news_notice/"+ notice, path + notice).then((entry)=>{
      const alertSuccess = this.alertCtrl.create({
        title: `Download Succeeded!`,
        subTitle: `File was successfully downloaded to your Eduguide folder in your storage`,
        buttons: ['Ok']
      });
      alertSuccess.present();
      this.toastService.hide();
    },(error)=>{
      this.toastService.hide();
      //alert(JSON.stringify(error))
      const alertFailure = this.alertCtrl.create({
        title: `Download Failed!`,
        subTitle: `was not successfully downloaded. Error code: ${error.code}`,
        buttons: ['Ok']
      });
      alertFailure.present();

    })
  }, (err) => {
   alert('error on creating path : ' + err);
  });
  }


  download_notice(notice) {
    this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      .then(status => {
        if(status.hasPermission) {
          this.download_noticeFile(notice);
        }
        else {
          this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
            .then(status => {
              if(status.hasPermission) {
                this.download_noticeFile(notice);
              }
            });
        }
      });
  }

   sendNotification(message :string)  : void
   {
      let notification = this.toastCtrl.create({
          message       : message,
          duration      : 3000
      });
      notification.present();
   }

}
