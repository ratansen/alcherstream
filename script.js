// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', ()=> {
//         if(request.readyState===4 && request.status===200){
//             callback(undefined, request.responseText);
//         } else if(request.readyState===4){
//             callback('could not fetch data', undefined);
//         }
//     });
    
//     request.open('GET','https://api.themoviedb.org/3/movie/550?api_key=080aa49f9f32535acf0e0fbfdd467528');
//     request.send();
// };


// console.log(1);
// console.log(2);

// getTodos((err, data)=>{
//     console.log('callback fired');
//     if(err){
//         console.log(err);
//     } else{
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);
var search=document.getElementById("search");
var moviename=document.getElementsByClassName("moviehead");
var img=document.getElementsByClassName("movieimage");
var rating=document.getElementsByClassName("rating");
// var info=document.getElementsByClassName("details");
var release=document.getElementsByClassName("release");




search.addEventListener("keyup",function(event){
    console.log("enterred");
    if(event.code==="Enter"){
        console.log("pressed");
        document.getElementById("topic").scrollIntoView();
        var movie=`https://api.themoviedb.org/3/search/movie?api_key=080aa49f9f32535acf0e0fbfdd467528&query=${search.value}`;
        fetch(movie).then(function(response){
            return(response.json())
        }).then((data)=>{
            console.log("check");
            var i=0,index=0;
            var len=data.results.length;
            document.getElementById("moviecard").innerHTML="";
            document.getElementById("topic").innerHTML="Search Results";

            while(index<len){
                if(data.results[index]["backdrop_path"]==null){
                    index++;
                    continue;
                }
                // img[i].src="https://image.tmdb.org/t/p/w500"+data.results[index]["backdrop_path"];
                var image="https://image.tmdb.org/t/p/w500"+data.results[index]["backdrop_path"];
                // moviename[i].innerHTML=data.results[index]["title"];
                // release[i].innerHTML=`Year of Release :&nbsp; ${data.results[index]["release_date"].slice(0,4)}`;
                // rating[i].innerHTML=`IMDb Rating :&nbsp; &nbsp; &nbsp; ${data.results[index]["vote_average"]}`;
                // info[i].innerHTML=`${data.results[index]["overview"]}`;
                document.getElementById("moviecard").innerHTML+=`<div class="col">
                <div class="card h-100">
                  <img src=${image} class="card-img-top p-2 movieimage" alt="...">
                  <div class="card-body d-flex flex-column cardbody">
                    <h5 class="card-title moviehead">${data.results[index]["title"]}</h5>
                    <h6 class="card-title release">Year of Release :&nbsp; ${data.results[index]["release_date"].slice(0,4)}</h6>
                    <h6 class="card-title rating">IMDb Rating :&nbsp; &nbsp; &nbsp; ${data.results[index]["vote_average"]}</h6>
                    <!-- <p class="card-text details">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
                    <a href="#" class="btn btn-danger mt-auto w-100 play">Stream Now</a>
                  </div>
                </div>      
              </div>`


                // details[i].innerHTML="Rating : "+data.results[index]["vote_average"]+"/10";
                i++;
                index++;
            }
            console.log(data.results);
    }).catch(err=>console.error(err));
}
}
)





//image path=https://image.tmdb.org/t/p/w500

