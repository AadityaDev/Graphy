var AppConstant = /** @class */ (function () {
    function AppConstant() {
    }
    AppConstant.getMovies = function () {
        return AppConstant.BASE_URL + "me/movies";
    };
    AppConstant.getFriendsAPI = function (accountID) {
        return AppConstant.BASE_URL + accountID + "/taggable_friends";
    };
    AppConstant.APP_ID = "344425272651292";
    AppConstant.APP_SECRET = "2bdad5b42f91636b73bb2b7e6e6c19f0";
    AppConstant.FACEBBOK_PROFILE = "344425272651292";
    AppConstant.BASE_URL = "https://graph.facebook.com/v2.10/";
    AppConstant.GRAPH_GET_FRIEND = AppConstant.BASE_URL;
    AppConstant.PROFILE_FIELDS = "?fields=id%2Cname%2Cemail%2Cfirst_name%2Cpicture";
    AppConstant.MOVIES = AppConstant.BASE_URL + "me/movies";
    AppConstant.FACEBOOK_PERMISSIONS = ['email', 'public_profile', 'user_friends', 'public_profile', 'user_actions.books', 'user_actions.fitness', 'user_actions.music', 'user_likes'];
    AppConstant.FACEBOOK_PAGES = AppConstant.BASE_URL + "me/likes";
    AppConstant.ACCESS_TOKEN = "?access_token=";
    AppConstant.GRAPH_FRIENDS = {
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
    return AppConstant;
}());
export { AppConstant };
//# sourceMappingURL=AppConstant.js.map