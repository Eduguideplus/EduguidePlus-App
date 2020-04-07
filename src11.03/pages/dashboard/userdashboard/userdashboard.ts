import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../../editprofile/editprofile';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserdashboardPage');
  }
  
  gotoEditprofile(){
    this.navCtrl.push(EditprofilePage);
  }

}
