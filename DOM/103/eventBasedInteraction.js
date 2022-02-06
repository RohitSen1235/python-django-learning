var headOne =document.querySelector("#one");
var headTwo =document.querySelector("#two");
var headThree =document.querySelector("#three");

// console.log("connected");

var headOne_OgText =headOne.textContent;
var headOne_OgColor =headOne.style.color;

headOne.addEventListener('mouseover',function(){
    headOne.textContent="Mouse Currently Over";
    headOne.style.color ="blue";
});

headOne.addEventListener('mouseout',function(){
    headOne.textContent= headOne_OgText;
    headOne.style.color = headOne_OgColor;
});


headTwo.addEventListener('click',function(){
    headTwo.textContent ="CLICKED ON";
    headTwo.style.color ="blue";
});

headThree.addEventListener('dblclick',function(){
    headThree.textContent = "I WAS DOUBLE CLICKED";
    headThree.style.color = "#68b06d";
});