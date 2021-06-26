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
        var movie=`https://api.themoviedb.org/3/search/movie?api_key=080aa49f9f32535acf0e0fbfdd467528&query=${search.value}`;
        fetch(movie).then(function(response){
            return(response.json())
        }).then((data)=>{
            console.log("check");
            var i=0,index=0;
            while(i<8){
                if(data.results[index]["backdrop_path"]==null){
                    index++;
                    continue;
                }
                img[i].src="https://image.tmdb.org/t/p/w500"+data.results[index]["backdrop_path"];
                moviename[i].innerHTML=data.results[index]["title"];
                release[i].innerHTML=`Year of Release :&nbsp; ${data.results[index]["release_date"].slice(0,4)}`;
                rating[i].innerHTML=`IMDb Rating :&nbsp; &nbsp; &nbsp; ${data.results[index]["vote_average"]}`;
                // info[i].innerHTML=`${data.results[index]["overview"]}`;



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

