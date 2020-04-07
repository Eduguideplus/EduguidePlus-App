import { ToastLoadingProvider } from './../../providers/toast-loading/toast-loading';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ClientApiProvider } from '../../providers/client-api/client-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
public register:FormGroup;
public country_list:any;
public state_list:any;
public city_list:any;
public country:any;
public state:any;
public city:any;
gender:any;
  constructor(public formBuilder: FormBuilder,public toastService:ToastLoadingProvider, public restApi:ClientApiProvider,   public navCtrl: NavController, public navParams: NavParams) {
    this.register = formBuilder.group({
      'full_name': ['', Validators.required],
      'email_id': ['', Validators.required],
      'mobile_number': ['', Validators.required],
      'date': ['', Validators.required],
      'adhar_number': [''],
      'pan_number': [''],
      'gender': ['', Validators.required],
      'country': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required],
      'address': ['', Validators.required],
      'school_clg': ['', Validators.required],
      'course':['', Validators.required],
      'password': ['', Validators.required],
      'confirm_passowrd':['', Validators.required],



    });
  }
  
  
  
  
  
  
  

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad RegisterPage');

    this.restApi.getAllLocation().subscribe((data:any)=>{
      this.country_list=data.data;

    },(error:any)=>{

    })
  }
  
  gotoLogin(){
    this.navCtrl.push(LoginPage);
  }

  get_state():void{
    console.log(this.country)
    let postparams={
      country_id:this.country
    }
    this.restApi.get_state(postparams).subscribe((data:any)=>{
      this.state_list=data.get_all_state;
    },(error:any)=>{})
  }
  get_city():void{
    console.log(this.state)
    let postparams={
      state_id:this.state
    }
    this.restApi.get_city(postparams).subscribe((data:any)=>{
      this.city_list=data.get_all_city;
    },(error:any)=>{})
  }
  doRegister():void{
    this.toastService.presentLoading("")
   // console.log(this.gender)
    console.log(this.register.value);
    let value =this.register.value;
    console.log(value.country)
let postparams={
  address:value.address,
  adhar_number:value.adhar_number,
  city:value.city,
  country:value.country,
  course:value.course,
  date:value.date,
  email_id:value.email_id,
  full_name:value.full_name,
  gender:value.gender,
  mobile_number:value.mobile_number,
  pan_number:value.pan_number,
  ​password:value.​password,
  ​school_clg:value.​school_clg,
  ​state:value.​state,
  

}
this.restApi.userRegister(postparams).subscribe((data:any)=>{
  if(data.result==1){
    this.toastService.hide();
    this.toastService.create("Congratulations! You've successfully registered with us.");
    this.navCtrl.push(LoginPage)
  }else if(data.result=='number_exist'){
    this.toastService.hide();
    this.toastService.create('Mobile number already exist in our record');
  }else if(data.result=='email_exist'){
    this.toastService.hide();
    this.toastService.create('Email already exist in our record');
  } 
},(error:any)=>{
  this.toastService.hide();
  this.toastService.create("having some issues from server end");
})
}
}
