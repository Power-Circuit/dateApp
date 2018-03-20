import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]
})
export class RegisterPage {

  @ViewChild('user_name') uname;
  @ViewChild('password') pword;
  @ViewChild('password2') pword2;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fire: AngularFireAuth) {
  }

  signUp() {
    this.fire.auth.createUserWithEmailAndPassword(this.uname.value,this.pword.value)
    .then(data =>{
      console.log('got data', data);
    })
    .catch(error =>{
      console.log('got an error', error);
    });

  }

}
