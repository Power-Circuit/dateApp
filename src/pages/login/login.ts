import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ExplorePage } from '../explore/explore';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AngularFireAuth]
})
export class LoginPage {
  //@ViewChild('user_name') uname;
//  @ViewChild('password') pword;
  username: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,private fire: AngularFireAuth) {
  }

  signIn(){
  //  console.log(this.uname.value,this.pword.value);
  this.fire.auth.signInWithEmailAndPassword(this.username,this.password)
  .then( data => {
    console.log('got some date', data);
    this.navCtrl.push(ExplorePage, {username: this.username});

  })
  .catch( error =>{
    console.log('got an error',error);
  })
/*  if(this.uname.value =="admin" && this.pword.value =="admin"){
      let alert = this.alertCtrl.create({
        title: 'Logged in Succesfully',
        subTitle: 'you are logged in',
        buttons: ['OK']
      });
      alert.present();
      }
      */
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }


}
