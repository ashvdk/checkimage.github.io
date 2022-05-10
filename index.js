const { width, height } = screen;
document.getElementById("below").style.width = (window.innerWidth - 50) +"px";
document.getElementById("below").style.height = (window.innerHeight - 5) +"px";
document.getElementById("above").style.width = (window.innerWidth - 50) +"px";
document.getElementById("above").style.height = (window.innerHeight - 5) +"px";

let topImageMoveRightorLeft = 1;
let topImageMoveToporBelow = 1;

document.getElementById("topImageMoveRight").addEventListener("click", function(){
    document.getElementById("above").style.left = (topImageMoveRightorLeft++) + "px";
})

document.getElementById("topImageMoveLeft").addEventListener("click", function(){
    document.getElementById("above").style.left = (topImageMoveRightorLeft--) + "px";
})

document.getElementById("topImageMoveTop").addEventListener("click", function(){
    document.getElementById("above").style.top = (topImageMoveToporBelow--) + "px";
})

document.getElementById("topImageMoveBelow").addEventListener("click", function(){
    document.getElementById("above").style.top = (topImageMoveToporBelow++) + "px";
})

let belowImageMoveRightorLeft = 1;
let belowImageMoveToporBelow = 1;

document.getElementById("BelowImageMoveTop").addEventListener("click", function(){
    document.getElementById("below").style.top = (belowImageMoveToporBelow--) + "px";
})


document.getElementById("BelowImageMoveBelow").addEventListener("click", function(){
    document.getElementById("below").style.top = (belowImageMoveToporBelow++) + "px";
})

document.getElementById("belowImageMoveRight").addEventListener("click", function(){
    document.getElementById("below").style.left = (belowImageMoveRightorLeft++) + "px";
})

document.getElementById("belowImageMoveLeft").addEventListener("click", function(){
    document.getElementById("below").style.left = (belowImageMoveRightorLeft--) + "px";
})

let i = 0;

var loadFile = function(event) {
	var abv = document.getElementById('abv');
    var blw = document.getElementById('blw');
    //console.log(event.target.files[0]);
	abv.src = URL.createObjectURL(event.target.files[0]);
    blw.src = URL.createObjectURL(event.target.files[1]);
};

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello " + i++;
// }