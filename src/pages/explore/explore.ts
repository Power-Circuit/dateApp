import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
  providers: [AngularFireDatabase]
})
export class ExplorePage {

  uname: string;
  message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
      console.log(this.navParams.get('username'));
      this.uname= this.navParams.get('username');
    //  console.log("nav params are",this.uname);

  }

  sender(){
    this.db.list('chat').push({
      uname: this.uname,
      message: this.message
    })
    console.log("sending message with", this.message);
  }

}
