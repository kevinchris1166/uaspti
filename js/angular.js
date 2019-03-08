let baseurl = "https://api.themoviedb.org/3/movie";
let apikey = "api_key=ea10fed53c1d62fb778323366b2c446c";
var movieid = [];
var app = angular.module('movie',[]);
app.controller('movctrl', function($scope,$http){
  $http.get(baseurl+"/now_playing?"+apikey+"&language=en-US&page=1").then(function(response){
    $scope.Data = response.data.results;
  });
  
});

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.themoviedb.org/3/movie/now_playing?api_key=ea10fed53c1d62fb778323366b2c446c&language=en-US&page=1",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function(response){

  console.log(response.results.length);

  var i
  for(i=0;i<response.results.length;i++){
    $(".info_section").append('<tr><td><img src="https://image.tmdb.org/t/p/w500/'+response.results[i].poster_path+'" height = "50%" width = "50%"></td><td><h5 class="card-title text-truncate">'+response.results[i].title+'</h5></td><td><p class= "card-text">'+response.results[i].release_date+'</p></td><td><button class= "button button2" id = "'+response.results[i].id+'"onclick= "panggilDetail(this)">Detail</button></td></tr>');
  }
});

function panggilDetail(objectButton){
   localStorage.setItem("movieId",objectButton.getAttribute("id"));
   window.location.href="details.html";
}