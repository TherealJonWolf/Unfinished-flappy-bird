var block = document.getElementById("block");
var hole = document.getElementById('Element');
var character = document.getElementById("hole");
var jumping = 0;
var counter = 0;
hole.addEventListener('animationiteration', () => {
    var random = Math.random()*3;
    var top = (random*100)+150;
    hole.style.top = -(top) + "px";
    counter++;
});
setInterval(function(){
    
    var characterTop = 
    parseInt(window.getComputedStyle)window.getComputedStyle(charcter).getPropertyValue('top')
    if(jumping==0){
       character.style.top = (characterTop+3)+'px';
    }
    if(characterTop>480){
        alert("Game over. Score:"+counter);
        character.style.top = 100 + "px";
        counter=0;
        
    }
},10);
function jump(){
jumping =  1
letjumpCount = 0;
var jumpInterval = setInterval(function(){
     var characterTop = 
    parseInt(window.getComputedStyle)window.getComputedStyle(charcter).getPropertyValue('top')
    if((character>6)&&(counter)){
    character.style.top = (characterTop-5)+'px';
    }
    if(jumpCount>20){
        clearInterval(jumpInterval)
        jumping=0;
        jumpCount=0;
    }
     jumpCount++;
 },10;
}