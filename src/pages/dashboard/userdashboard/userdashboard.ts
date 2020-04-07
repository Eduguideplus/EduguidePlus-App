import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { EditprofilePage } from '../../editprofile/editprofile';
import { Storage } from '@ionic/storage';
import { ClientApiProvider } from '../../../providers/client-api/client-api';
import { ToastLoadingProvider } from '../../../providers/toast-loading/toast-loading';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the UserdashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userdashboard',
  templateUrl: 'userdashboard.html',
})
export class UserdashboardPage {
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
  constructor(public camera:Camera, public actionSheetCtrl:ActionSheetController,public restApi:ClientApiProvider, public toastService:ToastLoadingProvider, public storage:Storage, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.toastService.presentLoading('');
    console.log('ionViewDidLoad UserdashboardPage');

    this.storage.get('user_id').then((user_id)=>{
      console.log(user_id);
      let postparams={
        user_id:user_id,
      }
      this.restApi.get_myaccount(postparams).subscribe((data:any)=>{
          this.serverSideData=data.user_perofile;
          this.name = this.serverSideData[0].user_name;
          this.email = this.serverSideData[0].login_email;
          this.mobile = this.serverSideData[0].login_mob;
          this.gender = this.serverSideData[0].gender;
          this.address = this.serverSideData[0].user_address;
          this.dob = this.serverSideData[0].dob;
           this.profilr_pid = this.serverSideData[0].profile_photo;
          this.toastService.hide();
      },(error:any)=>{
        this.toastService.hide();
        this.toastService.create("Having some issues")
      })
    })



  }

  gotoEditprofile(){

    this.navCtrl.push(EditprofilePage,{item:this.serverSideData});
  }
  get_image() {// this function use in line number 64
    let actionSheet = this.actionSheetCtrl.create({
       title: 'Choose your File',
       buttons: [
         {
           text: 'Camera',
           icon:"camera",
           handler: () => {
           this.takePhoto(this.camera.PictureSourceType.CAMERA);
             console.log('Destructive clicked');
           }
         },
         {
           text: 'Gallery',
           icon:'images',
           handler: () => {
            this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
             console.log('Archive clicked');
           }
         },
         {
           text: 'Cancel',
           role: 'cancel',
           handler: () => {
             console.log('Cancel clicked');
           }
         }
       ]
     });

     actionSheet.present();
    }
   takePhoto(sourceType) {


      const options: CameraOptions = {
        quality: 50,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        sourceType:sourceType,
      }

      this.camera.getPicture(options).then((imageData) => {
        console.log(status);
        console.log(imageData);
        this.image = 'data:image/jpeg;base64,' + imageData;
       this._SUFFIX = this.image.split(':')[1].split('/')[1].split(";")[0];
       console.log(this.image)
       console.log(this._SUFFIX)
        //

        this.storage.get('user_id').then((user_id)=>{
          let postparams={
            image:this.image,
            _SUFFIX:this._SUFFIX,
            user_id:user_id
          }

          this.restApi.userImageUpdate(postparams).subscribe((data:any)=>{},(error:any)=>{})
        })
      }, (err) => {
        // Handle error
      });

    }
}
