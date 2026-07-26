// let productnameinput = document.getElementById(`productname`);
// let productpriceinput = document.getElementById(`productprice`);
// let productcatogeryinput = document.getElementById(`productcatogery`);
// let productdiscribtioninput = document.getElementById(`productdiscribtion`);
// // let productimageinput = document.getElementById(`productimage`);

// productlist = []

// function product(){
// let product = {
//     code : productnameinput.value,
//     price :productpriceinput.value,
//     catogery : productcatogeryinput.value,
//     des : productdiscribtioninput.value,
//     // img :productimageinput,
// };

// productlist.push(product);
// console.log(productlist);

// clear()
// }

// function clear(){
//     productnameinput.value="";
//     productpriceinput.value="";
//     productcatogeryinput.value="";
//     productdiscribtioninput.value="";
// }


var images = Array.from(document.querySelectorAll(".item img"));
var lightboxcontainer = document.querySelector(".lightboxcontainer");
var close = document.querySelector("#close");
var lightbox = document.querySelector(".lightbox");
var prev =document.querySelector("#prev") ;
var next =document.querySelector("#next") ;
var currentindex ;

for( var i = 0 ; i< images.length ;i++){
    images[i].addEventListener("click", function(e){
        // console.log(e.target);
        lightboxcontainer.classList.replace("d-none" , "d-flex");
        var mysrc= e.target.getAttribute("src");
        lightbox.style.cssText += ` background-image: url("${mysrc}") !important;` 
        currentindex = images.indexOf(e.target);
    });
}
next.addEventListener("click" , function(){
currentindex++;
if(currentindex == images.length){
    currentindex=0
}
var mysrc = images[currentindex].getAttribute("src");
lightbox.style.cssText += ` background-image: url("${mysrc}") !important;` 
});
prev.addEventListener("click" , function(){
currentindex--;
if(currentindex < 0 ){
    currentindex=images.length - 1
}
var mysrc = images[currentindex].getAttribute("src");
lightbox.style.cssText += ` background-image: url("${mysrc}") !important;` 
});
close.addEventListener("click", function(){
    lightboxcontainer.classList.replace("d-flex" , "d-none");
});
document.addEventListener("click", function(eventInfo){
    if(eventInfo.target == lightboxcontainer){
        lightboxcontainer.classList.replace("d-flex" , "d-none");
    }
});


//_________________________________________
