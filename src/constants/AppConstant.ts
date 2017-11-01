import {Injectable} from '@angular/core';

export class AppConstant{

	public static readonly APP_ID = "344425272651292";
	public static readonly APP_SECRET = "2bdad5b42f91636b73bb2b7e6e6c19f0";
	public static readonly FACEBBOK_PROFILE = "344425272651292";

  public static readonly BASE_URL:string="https://graph.facebook.com/v2.10/";
	public static readonly GRAPH_GET_FRIEND=AppConstant.BASE_URL;
  public static readonly PROFILE_FIELDS= "?fields=id%2Cname%2Cemail%2Cfirst_name%2Cpicture";
  
  public static readonly MOVIES:string=AppConstant.BASE_URL+"me/movies";
  public static getMovies(){
    return AppConstant.BASE_URL+"me/movies";
  } 

  public static readonly FACEBOOK_PERMISSIONS =['email', 'public_profile', 'user_friends', 'public_profile', 'user_actions.books', 'user_actions.fitness', 'user_actions.music', 'user_likes' ];

  public static readonly FACEBOOK_PAGES:string = AppConstant.BASE_URL+"me/likes";

  public static readonly ACCESS_TOKEN:string="?access_token=";

  public static getFriendsAPI(accountID:string):string{
    return AppConstant.BASE_URL+accountID+"/taggable_friends";
  }

  public static readonly GRAPH_FRIENDS ={
  "data": [
    {
      "name": "Saurabh Moody",
      "id": "561787518"
    },
    {
      "name": "Lalit Bhagia",
      "id": "10152908006518540"
    },
    {
      "name": "Akshat Goel",
      "id": "768954718"
    },
    {
      "name": "Nitin Bajaj",
      "id": "10203440813193534"
    },
    {
      "name": "Piyush Mittal",
      "id": "100000989500739"
    },
    {
      "name": "Ankit Dhawan",
      "id": "694543830607034"
    }
  ],
  "paging": {
    "cursors": {
      "before": "QVFIUmRRSExpN0Flckp4ZAENBOU9OX1l5NFRYVjIzdkNyTkY4eGFYWGVMalFCQjBNMzNnSXo0TkVReEhza2k2SFpNUTkZD",
      "after": "QVFIUkZAnbGpDLUdtcGxMNlBQQzc2WDRsZA3lwTC16SlpkbFJCQThvZAnRua0lGbUFubHVIRUNuX0M3MFRIdkhGdTFuTHk1MG1xS3BrSDgxb21yeG9Pcm12VnFB"
    }
  },
  "summary": {
    "total_count": 386
  }
};

}