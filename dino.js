document.addEventListener("DOMContentLoaded", function(){
    const dino=document.getElementById("dino");
    const cactus=document.getElementById("cactus");


    document.addEventListener("keydown", function(event){
        if(event.key==" "){
            dino.classList.add("jumping");
        }
        //on attends que 1000ms (1s) soit écoulé
        setTimeout(function(){
            dino.classList.remove("jumping");
        },500);
        //setInterval(function(),timeInMs); a chaque intervalle on execute la fonction 
       
       setInterval(function (){
            const dinoWidth    = parseInt (window.getComputedStyle(dino).getPropertyValue('width'));
            const dinoBottom   = parseInt (window.getComputedStyle(dino).getPropertyValue('bottom'));//maka valeur am css   
            const cactusLeft   = parseInt (window.getComputedStyle(cactus).getPropertyValue('left'));
            const cactsuHeight = parseInt (window.getComputedStyle(cactus).getPropertyValue('height'));
             
            if( (cactusLeft <= dinoWidth) && (dinoBottom<=cactsuHeight)){
                alert('maty elah');
             }      
        },100);
    });
});