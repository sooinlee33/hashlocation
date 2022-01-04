//detail.js
/* Written by Sooin Lee during the class of Himedia Academy */

var $nike = [
    ["nike_01.jpg", "nike product 1", "nike_product_1_detail"],
    ["nike_02.jpg", "nike product 2", "nike_product_2_detail"],
    ["nike_03.jpg", "nike product 3", "nike_product_3_detail"],
    ["nike_04.jpg", "nike product 4", "nike_product_4_detail"],
];
var $adidas = [
    ["adidas_01.jpg", "adidas product 1", "adidas_product_1_detail"],
    ["adidas_02.jpg", "aadidas product 2", "adidas_product_2_detail"],
    ["adidas_03.jpg", "adidas product 3", "adidas_product_3_detail"],
    ["adidas_04.jpg", "adidas product 4", "adidas_product_4_detail"],
];
var $puma = [
    ["puma_01.jpg", "puma product 1", "puma_product_1_detail"],
    ["puma_02.jpg", "puma product 2", "puma_product_2_detail"],
    ["puma_03.jpg", "puma product 3", "puma_product_3_detail"],
    ["puma_04.jpg", "puma product 4", "puma_product_4_detail"],
];


var $hash = location.hash;
console.log($hash); 
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt);  
var $divide_arr = $hash_txt.split("_");
console.log($divide_arr);  


var $detailBg = document.querySelector("#cont .ad_img");
var $detailTitle = document.querySelector("#cont h3");
var $detailText = document.querySelector("#cont p");

if($divide_arr[0] == "nike"){
    $detailBg.style.backgroundImage = `url(./img/${$nike[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $nike[$divide_arr[1]][1];
    $detailText.textContent = $nike[$divide_arr[1]][2];
}
if($divide_arr[0] == "adidas"){
    $detailBg.style.backgroundImage = `url(./img/${$adidas[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $adidas[$divide_arr[1]][1];
    $detailText.textContent = $adidas[$divide_arr[1]][2];
}

if($divide_arr[0] == "puma"){
    $detailBg.style.backgroundImage = `url(./img/${$puma[$divide_arr[1]][0]})`;
    $detailTitle.textContent = $puma[$divide_arr[1]][1];
    $detailText.textContent = $puma[$divide_arr[1]][2];
}


var backBtn = document.querySelector(".history button");

backBtn.addEventListener("click", function(){
    
    location.href = `./sub.html#${$divide_arr[0]}`;
});