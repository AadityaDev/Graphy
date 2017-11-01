import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response } from '@angular/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { AppConstant } from '../../constants/AppConstant';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  public userData:any;
  public isLoggedIn: boolean = false;
  public friends:any;
  public friendList:any;
  public friendLists;
  public accessToken:string;
  public loginStatus:any;
  public movies:any;
  public pages:any;

  private accountID;
  public friendsAPI={ method: 'GET', relative_url: +this.accountID+'/taggable_friends'};
  public booksAPI={ method: 'GET', relative_url: +'me/likes'};
  public moviesAPI={ method: 'GET', relative_url: +'me/likes'};
  
  ngOnInit() {

  }

  constructor(public navCtrl: NavController,public facebook:Facebook,public http:Http) {

  }

  public loginWithFB() {
    this.facebook.login(AppConstant.FACEBOOK_PERMISSIONS)
    .then((response: FacebookLoginResponse) => {
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(60).height(60).as(picture_large)', []).then(profile => {
        if(response){
          console.log('response received: '+JSON.stringify(response));
          if(response.authResponse.accessToken){
            this.accessToken=response.authResponse.accessToken;
            console.log("Access token received: "+this.accessToken);
            this.getMovies(this.accessToken);
            this.getPages(this.accessToken);
            this.getFriendsAPI(response.authResponse.userID,this.accessToken);
          }
        }  
        this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
      });
    },
    error=>{
      console.log('login error: '+JSON.stringify(error));
    });

  }

  public getLoginStatus(){
    this.facebook.getLoginStatus()
    .then(response=>{
      this.loginStatus=JSON.stringify(response);
      if(this.loginStatus.status==='connected'){
        console.log("Login Status: "+this.loginStatus);
      }
    },error=>{
      console.log("Login Status error: "+JSON.stringify(error));
    });  
  }
 
  public getAccessToken(){
    this.facebook.getAccessToken()
    .then(response=>{
      this.accessToken=JSON.stringify(response);
      console.log("access token: "+JSON.stringify(response));
    },error=>{
      console.log("access token error: "+JSON.stringify(error));
    });
  }

  public getMovies(accessToken:string){
    // this.facebook.api(AppConstant.MOVIES,AppConstant.FACEBOOK_PERMISSIONS)
    // .then(response=>{
    //   this.movies=JSON.stringify(response.data);
    //   console.log('movies response: '+JSON.stringify(response));
    // },error=>{
    //   console.log('movies response error: '+JSON.stringify(error));
    // });
    console.log(AppConstant.MOVIES+AppConstant.ACCESS_TOKEN+accessToken);
    this.http.get(AppConstant.MOVIES+AppConstant.ACCESS_TOKEN+accessToken)
    .map(res => res.json())
    .subscribe(response=>{
      this.movies=JSON.stringify(response.data);
      console.log('movies response: '+JSON.stringify(response.data));
    },error=>{
      console.log('movies response error: '+JSON.stringify(error));
    });
  }

  public getPages(accessToken:string){
    // this.facebook.api(AppConstant.FACEBOOK_PAGES,AppConstant.FACEBOOK_PERMISSIONS)
    // .then(response=>{
    //   this.pages=JSON.stringify(response.data);
    //   console.log('pages response: '+JSON.stringify(response));
    // },error=>{
    //   console.log('pages response error: '+JSON.stringify(error));
    // });
    console.log(AppConstant.FACEBOOK_PAGES+AppConstant.ACCESS_TOKEN+accessToken);
    this.http.get(AppConstant.FACEBOOK_PAGES+AppConstant.ACCESS_TOKEN+accessToken)
    .map(res => res.json())
    .subscribe(response=>{
      this.pages=JSON.stringify(response.data);
      console.log('pages response: '+JSON.stringify(response.data));
    },error=>{
      console.log('pages response error: '+JSON.stringify(error));
    });
  }

  public getFriendsAPI(accountID:string,accessToken:string){
    // this.facebook.api(AppConstant.getFriendsAPI(accountID),AppConstant.FACEBOOK_PERMISSIONS)
    // .then(response=>{
    //   this.friends=JSON.stringify(response.data);
    //   console.log('friends response: '+JSON.stringify(response));
    // },error=>{
    //   console.log('friends response error: '+JSON.stringify(error));
    // });
    console.log(AppConstant.getFriendsAPI(accountID)+AppConstant.ACCESS_TOKEN+accessToken);
    this.http.get(AppConstant.getFriendsAPI(accountID)+AppConstant.ACCESS_TOKEN+accessToken)
    .map(res => res.json())
    .subscribe(data=>{
      var res=data;
      this.friends=JSON.stringify(data.data);
      console.log('friends response: '+JSON.stringify(data));
    },error=>{
      console.log('friends response error: '+JSON.stringify(error));
    });
  }

  public getAllData(){
    // this.facebook.api('/',{batch:[{ method: 'GET', relative_url: 'me/friends'}]}).then(
    //   response=>{
    //     console.log(JSON.stringify(response));
    //   });
  }

}
