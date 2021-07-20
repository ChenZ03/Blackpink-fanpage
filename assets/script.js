
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}





// setInterval(function(){ 
//     var x = document.getElementById('test')
//     var y =  x.getBoundingClientRect();
    
// }, 10);


// window.addEventListener('wheel',e => window.scroll(e.deltaY,0))


    
    

