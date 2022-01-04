/* Written by Sooin Lee during the class of Himedia Academy */
var $url = location.href;
console.log($url);

var $hash = location.hash;
console.log($hash); 
var $hash_txt = $hash.replace("#", "");
console.log($hash_txt); 

var $main = document.querySelector("main"); 
var $title = document.querySelector("#cont .wrap .title h3"); 
var $contCover = document.querySelector("#cont .wrap .cont");  
var $contGroup = "";  

var hash_apply = function(){
  if($hash_txt.length > 0){  
    $main.style.backgroundImage = `url(./img/${$hash_txt}_banner.jpg)`;
    $title.textContent = $hash_txt;

    console.log($contGroup);

    $contGroup = "";  

    for(i=0; i<4; i++){
      $contGroup += `
        <div style="background-image:url(./img/${$hash_txt}_0${i+1}.jpg);" onclick="location.href='./detail.html#${$hash_txt}_${i}'"></div>
      `;
    }
    $contCover.innerHTML = $contGroup;

  }else{
    location.href = "./";
  }
}
hash_apply();
var $list = document.querySelectorAll("header nav ul li");
console.log($list); 

var $body = document.querySelector("body");
var $resBtn = document.querySelector(".resBtn");
var $nav = document.querySelector("header nav");

for(const v of $list){
  console.log(v);  
  v.addEventListener("click", function(){
    console.log(v);
    $hash_txt = v.getAttribute("rel");
    console.log($hash_txt);

    hash_apply();

    $body.classList.remove("showMenu");
    $resBtn.classList.remove("active");
    $nav.classList.remove("active");
  });
}
