$(document).ready(function(){
    // Get local storage
    let movie_id = localStorage.getItem("movieId");
    console.log(movie_id);

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.themoviedb.org/3/movie/"+movie_id+"?language=en-US&"+apikey,
        "method": "GET",
        "headers": {},
        "data": "{}"
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);

        let productionCompanies=[], i;
        if(response.production_companies.length!=[]){
            for(i=0; i<response.production_companies.length; i++){
                if(i!=response.production_companies.length-1){
                    productionCompanies.push(response.production_companies[i].name+" ");
                }
                else{
                    productionCompanies.push(response.production_companies[i].name);
                }
            }
        }
        else{
            productionCompanies.push("No Info");
        }

        let budget;
        console.log(response.budget);
        if(response.budget==0){
            budget="No Info";
        }
        else{
            budget=response.budget;
        }

        let content = '<div class="card"><div class="card-body row"><div class="col-3"><img src="http://image.tmdb.org/t/p/w185/'+response.poster_path+
        '"></div><div class="col-9><h2 class="card-title" style="font-size: 40px;">'+response.title+
        '</h2><h6>Release Date: '+response.release_date+'</h6><h6>Budget: '+budget+
        '</h6><h6>Production Companies: '+productionCompanies+'</h6><h6>Description: '+response.overview+'</h6>'+
        '<br><button onclick="back()" style="margin-top: 10px;" class="btn btn-outline-secondary">Back</button></div></div></div>'

        $(".modal-body").html(response.overview);
        $(".detailContainer").html(content);
    });

})

function back(){
    location.href="index.html";
    localStorage.removeItem("movieId");
}