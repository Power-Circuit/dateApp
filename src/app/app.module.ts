import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ExplorePage } from '../pages/explore/explore';
import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage } from '../pages/login/login';
import {RegisterPage } from '../pages/register/register';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

const config = {
  apiKey: "AIzaSyCyCUXMZ2D9ciuMZIP871NAXabqU7bZ8LU",
   authDomain: "complex-project-ca17a.firebaseapp.com",
   databaseURL: "https://complex-project-ca17a.firebaseio.com",
   projectId: "complex-project-ca17a",
   storageBucket: "complex-project-ca17a.appspot.com",
   messagingSenderId: "470405965597"
};

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
