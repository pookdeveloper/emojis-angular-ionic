
import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, ToastController, LoadingController, Refresher } from 'ionic-angular';
/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';
import { ConferenceData } from '../../providers/conference-data';

//import * as firebase from 'firebase/app';
//import firebase from 'firebase/app';


@Component({
  selector: 'page-emojis',
  templateUrl: 'emojis.html'
})
export class EmojisPage {

  emojis: any;

  constructor(
    public confData: ConferenceData
  ) {
  }

  /* ON VIEW LOAD  */
  ionViewDidLoad() {
    this.emoticonos();
  }

  /* CALL SERVICE TO GET EMOJIS */
  emoticonos() {
    this.confData.emojis().subscribe((data: any) => {
      console.log("EMOJIS", data);
      this.emojis = data;
    });
  }


}
