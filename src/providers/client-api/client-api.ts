import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientApiProvider {
private baseUrl:string="https://www.eduguideplus.com/manage_app/";




  constructor(public http: HttpClient) {
    console.log('Hello ClientApiProvider Provider');
  }

public getAllLocation(){
    return this.http.get(this.baseUrl+"Location/get_country")
}

public get_my_test(postparams)
{
   let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"My_account/get_exam_list",JSON.stringify(postparams),headers)
}

public submit_schedul_meet(postparams)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"My_account/submit_schedul_meet",JSON.stringify(postparams),headers)
}

public get_state(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Location/get_all_state",JSON.stringify(postparams),headers)
}

public get_city(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Location/get_all_city",JSON.stringify(postparams),headers)
}


public userRegister(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/registration_submit",JSON.stringify(postparams),headers)
}

public userImageUpdate(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/update_profile_pic",JSON.stringify(postparams),headers)
}

public passowrdCheck(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/check_password",JSON.stringify(postparams),headers)
}

public updatePassword(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/change_password_action",JSON.stringify(postparams),headers)
}

public checkmobileNumber(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/checkmobile_number",JSON.stringify(postparams),headers)
}

public resetPassword(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/forget_password_otp_action",JSON.stringify(postparams),headers)
}

public userLogin(login_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/login_action",JSON.stringify(login_params),headers)
}

public otpVerificationWhileregister(login_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/otp_verification_register",JSON.stringify(login_params),headers)
}


public get_myaccount(login_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/myaccount",JSON.stringify(login_params),headers)
}

public updateUserProfile(login_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/user_profile_update",JSON.stringify(login_params),headers)
}

get_all_home_data(){
  return this.http.get(this.baseUrl+"home/all_data");
}
get_topcollage_list()
{
   return this.http.get(this.baseUrl+"home/get_topcollage_list");
}

get_all_course_list(){
  return this.http.get(this.baseUrl+"Course_collages");
}

get_exam_list(){
  return this.http.get(this.baseUrl+"Training/get_exam_list");
}

go_to_test_list(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Go_for_test/subjectwise_exam",JSON.stringify(post_params),headers)
}

get_test_details(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Test/comprehensive_instruction_view",JSON.stringify(post_params),headers)
}

get_test_results(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_exam/get_test_results",JSON.stringify(post_params),headers)
}

get_analysis_report(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Training/analysis",JSON.stringify(post_params),headers)
}

start_exam(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_exam/start_examination",JSON.stringify(post_params),headers)
}

save_next_question(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_exam/save_next_question_app",JSON.stringify(post_params),headers)
}

submit_test(post_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_exam/submit_test_app",JSON.stringify(post_params),headers)
}

get_all_eaxm_list(course_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Course_collages/course_exams",JSON.stringify(course_params),headers)
}
get_eaxm_details(exam_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Course_collages/exam_details",JSON.stringify(exam_params),headers)
}

get_eaxm_details_search(exam_params)
{
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"Course_collages/exam_details_search",JSON.stringify(exam_params),headers)
}

get_service_list(){
  return this.http.get(this.baseUrl+"service/get_all_service_list");
}

video_cat_list(){
  return this.http.get(this.baseUrl+"video_tutroial/get_all_video_cat");
}

public video_list(login_params){

  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"video_tutroial/video_by_category",JSON.stringify(login_params),headers)
}

faq_list(){
  return this.http.get(this.baseUrl+"faq/get_faq");
}

get_about_us(){
  return this.http.get(this.baseUrl+"about_us/get_about_us");
}

get_site_address(){
  return this.http.get(this.baseUrl+"contatc_us/get_details");
}


public submit_contact_us(orderidparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"contatc_us/submit_mail",JSON.stringify(orderidparams),headers)
}

study_abord(){
  return this.http.get(this.baseUrl+"Study_abraod/get_all_list");
}






public reg_otp_verify(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"otp_verify/verify_otp_while_registration",JSON.stringify(postparams),headers)
}

public ph_verify(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"otp_verify/verify_mobile",JSON.stringify(postparams),headers)
}


public my_account(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/phone_verify_registration_submit",JSON.stringify(postparams),headers)
}


public companyRegister(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/company_login",JSON.stringify(postparams),headers)
}



public getMyaccountDetail(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/myaccountDetail",JSON.stringify(postparams),headers)
}



getMyaccountUpdate(user_id){
  let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+'sign_in/myaccountUpdate',JSON.stringify(user_id),headers);
}


public checkpassword(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/check_password",JSON.stringify(postparams),headers)
}

public update_password(postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/change_password_action",JSON.stringify(postparams),headers)
}
get_category_service(postparam)
{
  let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+'service_list/get_service',JSON.stringify(postparam),headers);

}
get_category_service_brand(postparam)
{
  let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+'service_list/get_brand',JSON.stringify(postparam),headers);
}
get_category_service_tc(postparam)
{
  let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
  return this.http.post(this.baseUrl+'service_list/get_service_tc',JSON.stringify(postparam),headers);
}



// validEmailOrMobile(valid_email_mobile){
//   let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
//   return this.http.post(this.baseUrl+'sign_in/checkEmailMobile',JSON.stringify(valid_email_mobile),headers);
// }


// checkOTP(user_otp){
//   let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
//   return this.http.post(this.baseUrl+'sign_in/forgetPassOtpVerify',JSON.stringify(user_otp),headers);
// }

// newPasswordSet(forgot_pass_data){
//   let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
//   return this.http.post(this.baseUrl+'sign_in/newPasswordSet',JSON.stringify(forgot_pass_data),headers);
// }


// resentOTP(user_id){
//   let headers : any = new HttpHeaders({'Content-Type': 'application/json'});
//   return this.http.post(this.baseUrl+'sign_in/resendForgotPasswordOPT',JSON.stringify(user_id),headers);
// }


















public myaccount(user_id_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/myaccount",JSON.stringify(user_id_params),headers)
}
public userprofileUpdate(updatePostParams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/user_profile_update",JSON.stringify(updatePostParams),headers)
}

public updateUserProfileImage(updatePostparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"sign_in/update_profile_image",JSON.stringify(updatePostparams),headers)

}

add_new_manage(adddsparmas){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_address/add_manage_addresss",JSON.stringify(adddsparmas),headers)
}

my_manage_address(useridparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_address/my_address",JSON.stringify(useridparams),headers)
}
updated_manage_address(updateparmas){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_address/updated_manage_address",JSON.stringify(updateparmas),headers)
}
delete_manage_address(deleteparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_address/delete_address",JSON.stringify(deleteparams),headers)
}
makeAsDefault(makeasadefaultparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_address/make_as_default",JSON.stringify(makeasadefaultparams),headers)
}




get_sub_category_product(cat_id_postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"product_list/get_product",JSON.stringify(cat_id_postparams),headers)
}

get_product_by_brand(cat_id_postparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"product_list/get_product_by_brand",JSON.stringify(cat_id_postparams),headers)
}
view_all_product_by_brand(){

  return this.http.get(this.baseUrl+"product_list/get_product_by_brand");
}
view_all_product_by_composition(){

  return this.http.get(this.baseUrl+"product_list/get_product_by_brand");
}
public product_add_to_cart(viewcartparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"addToCart/addtocart",JSON.stringify(viewcartparams),headers)
}

public cart_checking_after_login(cart_item_session_post_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"addToCart/checking_after_login",JSON.stringify(cart_item_session_post_params),headers)
}
public viewCart_item(cartparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"viewCart/get_product",JSON.stringify(cartparams),headers)
}

public get_is_default_address(cartparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_address/my_address_is_default",JSON.stringify(cartparams),headers)
}

public cart_qty_add(userrestIdpoastparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"addToCart/add_qty_cart",JSON.stringify(userrestIdpoastparams),headers)
}


public cart_qty_remove(userrestIdpoastparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"addToCart/remove_qty_cart",JSON.stringify(userrestIdpoastparams),headers)
}

public remove_item_cart(remove_params){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"viewCart/remove_cart",JSON.stringify(remove_params),headers)
}

public get_biling_address(userrestIdpoastparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_checkout/get_biling_address",JSON.stringify(userrestIdpoastparams),headers)
}
public get_shipping_address(userrestIdpoastparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_checkout/get_delivery_address",JSON.stringify(userrestIdpoastparams),headers)
}
public get_product_from_seller_cart(userrestIdpoastparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"manage_checkout/get_product_from_seller_cart",JSON.stringify(userrestIdpoastparams),headers)
}

public confirm_order(orderparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"order/place_order",JSON.stringify(orderparams),headers)
}

public my_order_details(useridparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"order/my_order",JSON.stringify(useridparams),headers)
}
public product_list_qty_add(userrestIdpoastparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"addToCart/addtocart",JSON.stringify(userrestIdpoastparams),headers)
}

public order_summary(orderidparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"order/summary",JSON.stringify(orderidparams),headers)
}

public about_us(){
  return this.http.get(this.baseUrl+"content_management/about_us");

}
public terms_conditions(){
  return this.http.get(this.baseUrl+"content_management/term_condition");

}
public return_policy(){
  return this.http.get(this.baseUrl+"content_management/return_policy");

}

public privacy_policy(){
  return this.http.get(this.baseUrl+"content_management/privecy_policy");

}

public cancel_order(orderidparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"order/cancel_myorder",JSON.stringify(orderidparams),headers)
}

public search_data(){
  return this.http.get(this.baseUrl+"product_list/get_search_product")
}


public filter_search(orderidparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"filter/search_filter",JSON.stringify(orderidparams),headers)
}


public filter_search_compotions(orderidparams){
  let headers:any=new HttpHeaders({ 'Content-Type': 'application/json' })
  return this.http.post(this.baseUrl+"filter/search_filter_com",JSON.stringify(orderidparams),headers)
}

public site_address(){
  return this.http.get(this.baseUrl+"contact_us/office_address");

}








}
