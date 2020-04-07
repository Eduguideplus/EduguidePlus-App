import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';
import { ServicePage } from '../pages/service/service';
import { LoginPage } from '../pages/login/login';
import { FaqPage } from '../pages/faq/faq';
import { ScheduletomeetPage } from '../pages/scheduletomeet/scheduletomeet';
import { TopcollegesPage } from '../pages/topcolleges/topcolleges';
import { UserdashboardPage } from '../pages/dashboard/userdashboard/userdashboard';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { MytestPage } from '../pages/mytest/mytest';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  isActive:boolean =true;
  isInActive:boolean=false;
  user_name:any;
  profile_photo:any;
  pages: Array<{title: string, component: any, icon: any}>;
  pages1: Array<{title: string, component: any, icon: any}>;

  constructor(public menu:MenuController, public events:Events,public storage:Storage,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
      //this below section we use for show the uername
      events.subscribe('user:signedIn', (userEventData) => {
      let user_value = userEventData;
        this.user_name = user_value.username;
        this.profile_photo = user_value.profile_photo;
      console.log(this.user_name)
      console.log(this.profile_photo)
      this.storage.set('user_name',this.user_name);
      this.storage.set('profile_photo',this.profile_photo);
      if(this.user_name){
        console.log('inside the if')
        this.isActive=false;
        this.isInActive=true;
      }else{
        console.log('inside the else')
        this.isActive=true;
        this.isInActive=false;
      }
    });//userEventData
    /////////////////////////////////////////////////////////////
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon:'assets/imgs/homem.png' },
      { title: 'Service', component: ServicePage, icon:'assets/imgs/service.png' },
      { title: 'Top Colleges', component: TopcollegesPage, icon:'assets/imgs/college.png' },
      { title: 'About Us', component: AboutusPage, icon:'assets/imgs/aboutm.png' },
      { title: 'Schedule to meet', component: ScheduletomeetPage, icon:'assets/imgs/date.png' },
      { title: 'Faq', component: FaqPage, icon:'assets/imgs/faq2.png' },
      { title: 'Contact Us', component: ContactusPage, icon:'assets/imgs/contact-usm.png' },
    ];
    // this menu will show after show.
    this.pages1 = [
      { title: 'Home', component: HomePage, icon:'assets/imgs/homem.png' },
      { title: 'My Tests', component: MytestPage, icon:'assets/imgs/college.png' },
      { title: 'Service', component: ServicePage, icon:'assets/imgs/service.png' },
      { title: 'Top Colleges', component: TopcollegesPage, icon:'assets/imgs/college.png' },
      { title: 'About Us', component: AboutusPage, icon:'assets/imgs/aboutm.png' },
      { title: 'Schedule to meet', component: ScheduletomeetPage, icon:'assets/imgs/date.png' },
      { title: 'Faq', component: FaqPage, icon:'assets/imgs/faq2.png' },
      { title: 'Change Password', component: ChangepasswordPage, icon:'assets/imgs/faq2.png' },
      { title: 'Contact Us', component: ContactusPage, icon:'assets/imgs/contact-usm.png' },
      { title: 'Logout', component: '', icon:'assets/imgs/contact-usm.png' },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {



      //this.get_name();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.storage.get('user_id').then((user_id)=>{
        console.log(user_id);
        if(user_id){
          this.storage.get('user_name').then((user_name)=>{
            this.user_name=user_name
            console.log('user_name',user_name)
          })//user_name
          this.storage.get('profile_photo').then((profile_photo)=>{
            this.profile_photo=profile_photo
            console.log('user_name',profile_photo)
          })//profile_photo
          console.log('inside the if')
          this.isActive=false;
          this.isInActive=true;
          this.menu.enable(false, 'Homescreehmenu');
          this.menu.enable(true, 'loginmenu');
        }else{
        this.isActive=true;
        this.isInActive=false;
        this.menu.enable(true, 'Homescreehmenu');
        this.menu.enable(false, 'loginmenu');
        }
      })//user_id
    });


  }
ionViewWillEnter(){

}
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title=='Logout'){
      this.storage.remove('user_id');
      this.storage.remove('user_type');
      this.nav.setRoot(HomePage);
      this.isActive=true;
      this.isInActive=false;
      this.menu.enable(true, 'Homescreehmenu');
      this.menu.enable(false, 'loginmenu');
    }else{
    if(page.title=='Home'){

      this.nav.setRoot(page.component);
    }
    else{
    this.nav.push(page.component);
    }
    }


  }
  goTologin(){
    this.nav.push(LoginPage)
  }
  goTodashboard(){
    console.log('its hit');

    this.nav.push(UserdashboardPage)
  }
  get_name(){

  }
}
