
// sidebar
let elmWidth=$(".mainSidebar").outerWidth();
$(".sidebar").css("left",-elmWidth)

$('.x').click(function(){
    if($(".sidebar").css("left")=="0px")
    {
        $(".sidebar").animate({left:-elmWidth},1000);
        $(".x").toggleClass("fa-xmark").toggleClass("fa-grip-lines");
    }
    else
    {
        $(".sidebar").animate({left:0},1000);
        $(".x").toggleClass("fa-xmark").toggleClass("fa-grip-lines");
    }
})



//  api
let allMovies=[];
async function getMovies(category)
{
    let allData=await fetch(`https://api.themoviedb.org/3/${category}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3AiGhdKzcs8_GUJf9dhWUXYBl1bCZ-hI3e-C7LV6FEAl2I-xXytWTOIVA`)
    let response=await allData.json();
    allMovies=response.results;
    displayMovies();
    console.log(allMovies);
}
getMovies("movie/now_playing");

$(".nowPlaying").click(function(){
    getMovies("movie/now_playing")
})

$(".popular").click(function(){
    getMovies("movie/popular")
})

$(".rated").click(function(){
    getMovies("movie/top_rated")
})

$(".trending").click(function(){
    getMovies("trending/all/day")
})

function displayMovies()
{
    let cartona="";
    for(let i=0;i<allMovies.length;i++)  
    {
        cartona+=
        `
        <div class="col-xl-4 col-md-6">
                    <div class="moviesContent position-relative overflow-hidden">
                        <img src="${'https://image.tmdb.org/t/p/w500/'+allMovies[i].poster_path}" alt="${allMovies[i].title?allMovies[i].title:allMovies[i].name}" class="">
                        <div class="imgLayer position-absolute h-100 top-100 start-0 end-0 bg-white bg-opacity-75 text-center">
                            <h2 class="mt-5 pt-5">${allMovies[i].title?allMovies[i].title:allMovies[i].name}</h2>
                            <p>${allMovies[i].overview}</p>
                            <p>rate:${allMovies[i].vote_average}</p>
                            <p>${allMovies[i].release_date?allMovies[i].release_date:allMovies[i].first_air_date}</p>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector(".mv").innerHTML=cartona;
    console.log(allMovies.length);
}

function searchOnPage(word)
{
    let cartona="";
    
    for(let i=0;i<10;i++)
    {
        if(allMovies[i].title?allMovies[i].title.toLowerCase().includes(word.toLowerCase()):allMovies[i].name.toLowerCase().includes(word.toLowerCase()))
        {
            cartona+=
            `
            <div class="col-xl-4 col-md-6">
                    <div class="moviesContent position-relative overflow-hidden">
                        <img src="${'https://image.tmdb.org/t/p/w500/'+allMovies[i].poster_path}" alt="${allMovies[i].title?allMovies[i].title:allMovies[i].name}" class="">
                        <div class="imgLayer position-absolute h-100 top-100 start-0 end-0 bg-white bg-opacity-75 text-center">
                            <h2 class="mt-5 pt-5">${allMovies[i].title?allMovies[i].title:allMovies[i].name}</h2>
                            <p>${allMovies[i].overview}</p>
                            <p>rate:${allMovies[i].vote_average}</p>
                            <p>${allMovies[i].release_date?allMovies[i].release_date:allMovies[i].first_air_date}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
    document.querySelector(".mv").innerHTML=cartona;
}

$(".searchPage").keyup(function(e){
    console.log(e.target.value);
    console.log(this.value);
    searchOnPage(this.value);
})




// Validation
function validateName()
{
    let reg=/^[A-Za-z][A-Za-z0-9_]{7,15}$/;
    return reg.test(document.querySelector(".name").value)
}

function validateEmail()
{
    let reg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(document.querySelector(".email").value)
}

function validatePhone()
{
    let reg=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    return reg.test(document.querySelector(".phone").value)
}

function validatePass()
{
    let reg=/^[a-zA-Z]\w{3,14}$/;
    return reg.test(document.querySelector(".pass").value)
}

function validateRePass()
{
    let reg=/^[a-z]{3,15}$/;
    return reg.test(document.querySelector(".rePass").value)
}




function checkNameInput()
{
    if(validateName()==false)
    {
        $('.nameError').removeClass("d-none");
        $('.nameError').addClass("d-block");
        console.log("falseeeeeeeeeeeeeeeeeeee");
    }
    else
    {
        $('.nameError').removeClass("d-block");
        $('.nameError').addClass("d-none");
        console.log("trueeeeeee");
    }
}
function checkEmailInput()
{
    if(validateEmail()==false)
    {
        $('.emailError').removeClass("d-none");
        $('.emailError').addClass("d-block");
        console.log("falseeeeeeeeeeeeeeeeeeee");
    }
    else
    {
        $('.emailError').removeClass("d-block");
        $('.emailError').addClass("d-none");
        console.log("trueeeeeee");
    }
}
function checkPhoneInput()
{
    if(validatePhone()==false)
    {
        $('.phoneError').removeClass("d-none");
        $('.phoneError').addClass("d-block");
        console.log("falseeeeeeeeeeeeeeeeeeee");
    }
    else
    {
        $('.phoneError').removeClass("d-block");
        $('.phoneError').addClass("d-none");
        console.log("trueeeeeee");
    }
}
function checkAgeInput()
{
    if(document.querySelector(".age").value>=18 && document.querySelector(".age").value<70)
    {

        $('.ageError').removeClass("d-block");
        $('.ageError').addClass("d-none");
        console.log("trueeeeeee");

        
    }
    else
    {
        $('.ageError').removeClass("d-none");
        $('.ageError').addClass("d-block");
        console.log("falseeeeeeeeeeeeeeeeeeee");
    }
}
function checkPassInput()
{
    if(validatePass()==false)
    {
        $('.passError').removeClass("d-none");
        $('.passError').addClass("d-block");
        console.log("falseeeeeeeeeeeeeeeeeeee");
    }
    else
    {
        $('.passError').removeClass("d-block");
        $('.passError').addClass("d-none");
        console.log("trueeeeeee");
    }
}
function checkRePassInput()
{
    if(document.querySelector(".pass").value!=document.querySelector(".rePass").value)
    {
        $('.repassError').removeClass("d-none");
        $('.repassError').addClass("d-block");
        console.log("falseeeeeeeeeeeeeeeeeeee");
    }
    else
    {
        $('.repassError').removeClass("d-block");
        $('.repassError').addClass("d-none");
        console.log("trueeeeeee");
    }
}

$(".name").on("focus keyup",function(){
    checkNameInput();
})

$(".email").on("focus keyup",function(){
    checkEmailInput();
})

$(".email").on("focus keyup",function(){
    checkEmailInput();
})

$(".phone").on("focus keyup",function(){
    checkPhoneInput();
})

$(".age").on("focus keyup",function(){
    checkAgeInput();
})

$(".pass").on("focus keyup",function(){
    checkPassInput();
})

$(".rePass").on("focus keyup",function(){
    checkRePassInput();
})




