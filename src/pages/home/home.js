var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import 'rxjs/add/operator/map';
import { AppConstant } from '../../constants/AppConstant';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, facebook, http) {
        this.navCtrl = navCtrl;
        this.facebook = facebook;
        this.http = http;
        this.isLoggedIn = false;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.loginWithFB = function () {
        var _this = this;
        this.facebook.login(AppConstant.FACEBOOK_PERMISSIONS)
            .then(function (response) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(60).height(60).as(picture_large)', []).then(function (profile) {
                if (response) {
                    console.log('response received: ' + JSON.stringify(response));
                    if (response.authResponse.accessToken) {
                        _this.accessToken = response.authResponse.accessToken;
                        console.log("Access token received: " + _this.accessToken);
                        _this.getMovies();
                        _this.getPages();
                    }
                }
                _this.userData = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
            });
        }, function (error) {
            console.log('login error: ' + error);
        });
    };
    HomePage.prototype.getLoginStatus = function () {
        var _this = this;
        this.facebook.getLoginStatus()
            .then(function (response) {
            _this.loginStatus = JSON.stringify(response);
            if (_this.loginStatus.status === 'connected') {
                console.log("Login Status: " + _this.loginStatus);
            }
        }, function (error) {
            console.log("Login Status error: " + _this.loginStatus);
        });
    };
    HomePage.prototype.getAccessToken = function () {
        var _this = this;
        this.facebook.getAccessToken()
            .then(function (response) {
            _this.accessToken = JSON.stringify(response);
            console.log("access token: " + JSON.stringify(response));
        }, function (error) {
            console.log("access token error: " + _this.accessToken);
        });
    };
    HomePage.prototype.getMovies = function () {
        this.facebook.api(AppConstant.MOVIES, AppConstant.FACEBOOK_PERMISSIONS)
            .then(function (response) {
            console.log('movies response: ' + JSON.stringify(response));
        }, function (error) {
            console.log('movies response error: ' + JSON.stringify(error));
        });
    };
    HomePage.prototype.getPages = function () {
        var _this = this;
        this.facebook.api(AppConstant.FACEBOOK_PAGES, AppConstant.FACEBOOK_PERMISSIONS)
            .then(function (response) {
            _this.pages = JSON.stringify(response.data);
            console.log('pages response: ' + JSON.stringify(response));
        }, function (error) {
            console.log('pages response error: ' + JSON.stringify(error));
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, Facebook, Http])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map