import { AnalysisPageModule } from './../pages/analysis/analysis.module';
import { ToastLoadingProvider } from './../providers/toast-loading/toast-loading';
import { MarqueePageModule } from './../pages/marquee/marquee.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { FileTransfer} from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsandnoticePageModule } from '../pages/newsandnotice/newsandnotice.module';
import { LatesteventsPageModule } from '../pages/latestevents/latestevents.module';
import { CourselistPageModule } from '../pages/collegeandcourse/courselist/courselist.module';
import { CouserexamPageModule } from '../pages/collegeandcourse/couserexam/couserexam.module';
import { CourseexamdeatilsPageModule } from '../pages/collegeandcourse/courseexamdeatils/courseexamdeatils.module';
import { StudyabroadPageModule } from '../pages/studyabroad/studyabroad.module';
import { VideotutoriallistPageModule } from '../pages/allvideotutorial/videotutoriallist/videotutoriallist.module';
import { VideotutorialcategoryPageModule } from '../pages/allvideotutorial/videotutorialcategory/videotutorialcategory.module';
import { AboutusPageModule } from '../pages/aboutus/aboutus.module';
import { ContactusPageModule } from '../pages/contactus/contactus.module';
import { ServicePageModule } from '../pages/service/service.module';
import { ExamlistPageModule } from '../pages/onlineexam/examlist/examlist.module';
import { GototestPageModule } from '../pages/onlineexam/gototest/gototest.module';
import { ExaminstructionPageModule } from '../pages/onlineexam/examinstruction/examinstruction.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { ForgotpasswordPageModule } from '../pages/forgotpassword/forgotpassword.module';
import { QuestionsPageModule } from '../pages/onlineexam/questions/questions.module';
import { ExamresultPageModule } from '../pages/onlineexam/examresult/examresult.module';
import { UserdashboardPageModule } from '../pages/dashboard/userdashboard/userdashboard.module';
import { EditprofilePageModule } from '../pages/editprofile/editprofile.module';
import { EventsPageModule } from '../pages/events/events.module';
import { ExpertisePageModule } from '../pages/expertise/expertise.module';
import { FaqPageModule } from '../pages/faq/faq.module';
import { ScheduletomeetPageModule } from '../pages/scheduletomeet/scheduletomeet.module';
import { TopcollegesPageModule } from '../pages/topcolleges/topcolleges.module';
import { MytestPageModule } from '../pages/mytest/mytest.module';
/// providers
import { HttpClientModule } from '@angular/common/http';
import { ClientApiProvider } from '../providers/client-api/client-api';
import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Camera, CameraOptions } from '@ionic-native/camera';
import { ChangepasswordPageModule } from '../pages/changepassword/changepassword.module';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    HttpClientModule,
    ChangepasswordPageModule,
    BrowserModule,
    MarqueePageModule,
    NewsandnoticePageModule,
    LatesteventsPageModule,
    CourselistPageModule,
    CouserexamPageModule,
    CourseexamdeatilsPageModule,
    StudyabroadPageModule,
    VideotutoriallistPageModule,
    VideotutorialcategoryPageModule,
    AboutusPageModule,
    ContactusPageModule,
    ServicePageModule,
    ExamlistPageModule,
    GototestPageModule,
    ExaminstructionPageModule,
    LoginPageModule,
    RegisterPageModule,
    ForgotpasswordPageModule,
    QuestionsPageModule,
    ExamresultPageModule,
    UserdashboardPageModule,
    EditprofilePageModule,
    EventsPageModule,
    ExpertisePageModule,
    FaqPageModule,
    ScheduletomeetPageModule,
    TopcollegesPageModule,
    AnalysisPageModule,
    MytestPageModule,

    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    AndroidPermissions,
    FileTransfer,
    SplashScreen,
    File,
    ToastLoadingProvider,
    ClientApiProvider,
    InAppBrowser,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
