var header = document.getElementsByClassName("header");
var rgb = document.getElementById("rgb");
var shapeColor = document.getElementsByClassName("colour");
var color = [];
var easyButton = document.getElementById("easy");
var mediumButton = document.getElementById("medium");
var hardButton = document.getElementById("hard");
var resetButton = document.getElementById("reset");
var modeDiv = document.querySelector(".mode");
var message = document.getElementById("message");
var j = 9;

function init(){   
    colorArray(j);
    reset();
}
init();

// to reset the game to it's original state
function reset(){   
    setTimeout(function(){
      modeDiv.style.backgroundColor = "white";       
    }, 300); 
    header[0].style.backgroundColor = "steelblue";
    j = 9;
    for (var i=0; i<9;i++){
            shapeColor[i].style.display = "block";
        } 
    colorArray(9);    
    message.textContent = "";
    resetButton.textContent ="Reset Game";
}

// generate random color
function randomColor(){
    //pick a red color from 0-255
    var r = Math.floor(Math.random()*256);
    //pick a green color from 0-255
    var g = Math.floor(Math.random()*256);
    //pick a blue color from 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}

// create an array of random colors (number of colors depends on game's mode)
function colorArray(j){
    var arr = [];
    for(var i=0;i<j;i++){
        arr.push(randomColor());
        shapeColor[i].style.backgroundColor = arr[i];        
    }
    rgb.textContent = arr[Math.floor(Math.random()*j)]; 
    color = arr;
    compareColors(j);
    return shapeColor;
}

//To compare the clicked color with the color shown in header
function compareColors(j){
    for (var i=0;i<j;i++){
        shapeColor[i].addEventListener("click", function(){
           if (this.style.backgroundColor !== rgb.textContent) {           
               this.style.backgroundColor = "#232323";           
               message.textContent = "Try again!";  
           } else {
              for (var i=0; i<j;i++) {
                shapeColor[i].style.backgroundColor = this.style.backgroundColor; 
               }   
               message.textContent = "Correct!";  
               resetButton.textContent ="Play again?"
               header[0].style.backgroundColor = this.style.backgroundColor; 
           }
       });
    }
}
// to decide the shape's number, and hide the rest depending on game's mode
function hide(num) {
    for (var i=0; i<9;i++){
            shapeColor[i].style.display = "block";
        } 
    if (num==9) {
        for (var i=0; i<num;i++){
            shapeColor[i].style.display = "block";
        } 
    } else if(num == 6) {
        for (var i=num; i<9;i++){
            shapeColor[i].style.display = "none";
        } 
    } else {
        for (var i=num; i<9;i++){
            shapeColor[i].style.display = "none";
        } 
    }
}

// mode functions to choose difficulty for the game
function easy(){   
    setTimeout(function(){
      modeDiv.style.backgroundColor = "green";       
    }, 300); 
    j = 3;
    hide(j);
    colorArray(j);
}

function medium(){
    setTimeout(function(){
      modeDiv.style.backgroundColor = "orange";
    }, 300);  
    j = 6;
    hide(j);
    colorArray(j);
}

function hard(){
    setTimeout(function(){
     modeDiv.style.backgroundColor = "red";
    }, 300);
    j = 9;
    hide(j);
    colorArray(j);
}

// Event listeners for buttons
easyButton.addEventListener("click", function(){
    resetButton.textContent ="Reset Game";
    message.textContent = "";
    header[0].style.backgroundColor = "steelblue";
    easy();
});  

mediumButton.addEventListener("click", function(){
    resetButton.textContent ="Reset Game";
    message.textContent = "";
    header[0].style.backgroundColor = "steelblue";
    medium();
}); 

hardButton.addEventListener("click", function(){
    resetButton.textContent ="Reset Game";
    message.textContent = "";
    header[0].style.backgroundColor = "steelblue"; 
    hard();
}); 

resetButton.addEventListener("click", function(){
    reset();
}); 