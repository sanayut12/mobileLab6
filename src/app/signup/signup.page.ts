import { FeedBack } from './../models/feedback';
import { async } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  feedback : FeedBack;
  constructor(
    private loadingCtrl:LoadingController,
    private alertCtrl : AlertController,
    private authService :AuthService,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }

  async signup(form : any){
    const username = form.username;
    const email = form.email;
    const password = form.password;

    const loading = await this.loadingCtrl.create({
      spinner : 'bubbles',
      message : 'กำลังบันทึกข้อมูล...'
    })

    await loading.present();

    this.authService.signup(username,email,password).subscribe(
      async (feedback : FeedBack) =>{
        this.feedback = feedback;
        if (this.feedback["status"] === "200"){
          const alert = await this.alertCtrl.create({
            message : this.feedback.message,
            buttons : ['ตกลง']
          })

          await alert.present();
          this.navCtrl.navigateForward('/home')
        }else{
          const alert = await this.alertCtrl.create({
            message : this.feedback.message,
            buttons : ['ตกลง']
          })
          await alert.present()
        }
      }
    )
    async (err) =>{
        console.log(err)
        await loading.dismiss();
    }

    async ()=>{
      await loading.dismiss();
    }
  }
}
