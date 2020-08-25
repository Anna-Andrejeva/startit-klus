const vielasPoga= document.getElementById('vielas-poga');
const aprikojumsRindas=document.getElementsByClassName('aprikojums');
vielasPoga.addEventListener('click', function(){
    vielasPoga.classList.add('selected');
    console.log(aprikojumsRindas);
    
    for (let index=0; index<aprikojumsRindas. length; index++){
        
        aprikojumsRindas[index].classList.toggle('slepts');
        
    }
});
const aprikojumsPoga= document.getElementById('aprikojums-poga');
const vielasRindas=document.getElementsByClassName('viela');
aprikojumsPoga.addEventListener('click', function(){
    aprikojumsPoga.classList.add('selected');
    console.log(vielasRindas);
    
    for (let index=0; index<vielasRindas. length; index++){
        
        vielasRindas[index].classList.toggle('slepts');
        
    }
})

