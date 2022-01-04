/* index.js */
/* Written by Sooin Lee during the class of Himedia Academy */

var $nike_contCover = document.querySelector("#cont_01 .cont");
var $nike_contGroup = "";


var nike_num_arr = [];
var nike_number;
while(nike_num_arr.length < 2){
    nike_number = Math.floor(Math.random() * 4);
    if(nike_num_arr.indexOf(nike_number) == -1){
        nike_num_arr.push(nike_number);
    }
    console.log(nike_num_arr); 
};
for(i=0; i<nike_num_arr.length; i++){
    $nike_contGroup += `<div style="background-image: url(./img/nike_0${nike_num_arr[i]+1}.jpg)" onclick="location.href='./detail.html#nike_${nike_num_arr[i]}'"></div>`; 
    $nike_contCover.innerHTML = $nike_contGroup;
};


var $adidas_contCover = document.querySelector("#cont_02 .cont");
var $adidas_contGroup = "";


var adidas_num_arr = [];
var adidas_number;
while(adidas_num_arr.length < 2){
    adidas_number = Math.floor(Math.random() * 4); 
    if(adidas_num_arr.indexOf(adidas_number) == -1){
        adidas_num_arr.push(adidas_number);
    }
    console.log(adidas_num_arr); 
};
for(i=0; i<adidas_num_arr.length; i++){
    $adidas_contGroup += `<div style="background-image: url(./img/adidas_0${adidas_num_arr[i]+1}.jpg)" onclick="location.href='./detail.html#adidas_${adidas_num_arr[i]}'"></div>`; 
    $adidas_contCover.innerHTML = $adidas_contGroup;
};


var $puma_contCover = document.querySelector("#cont_03 .cont");
var $puma_contGroup = "";


var puma_num_arr = [];
var puma_number;
while(puma_num_arr.length < 2){
    puma_number = Math.floor(Math.random() * 4); 
    if(puma_num_arr.indexOf(puma_number) == -1){
        puma_num_arr.push(puma_number);
    }
    console.log(puma_num_arr); 
};
for(i=0; i<puma_num_arr.length; i++){
    $puma_contGroup += `<div style="background-image: url(./img/puma_0${puma_num_arr[i]+1}.jpg)" onclick="location.href='./detail.html#puma_${puma_num_arr[i]}'"></div>`; 
    $puma_contCover.innerHTML = $puma_contGroup;
};

$(document).ready(function(){
    var slide_arr = ["nike", "adidas", "puma"];


    for(v of slide_arr){
        $("main .slider").append(`<div class="slide" style="background-image:url(./img/${v}_banner.jpg)"></div>`);
    }
    $(".slider").slick({
        infinite : true, 
        dots : true,  
        slidesToShow : 1, 
        slidesToScroll : 1, 
        autoplay : true, 
        speed : 1000, 

    });
});