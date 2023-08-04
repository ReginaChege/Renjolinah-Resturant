//background changer
let background = document.querySelector('.background');
let images = ['../images-menu/bg2.jpg','../images-menu/crepes.jpg','../images-menu/chickenwings.jpg','../images-menu/noodles.jpg','../images-menu/cappuccino.jpg','../images-menu/bg3.jpg','../images-menu/milkshake.jpg','../images-menu/bg4.jpg','../images-menu/bg5.jpg']

function backgroudSlider(){
    background.src = images[Math.floor(Math.random() * images.length)];       
}

setInterval(()=>{
    backgroudSlider();
},3000);


// open hours 
let openCont = document.querySelector('.open');
setTimeout(()=>{
    openCont.style.display = 'block';
    openCont.classList.add('opening-hours')
},5000)

//closing the open-housrs-container when the close icon is clicked
document.querySelector('.close-open-hours').addEventListener('click',function(){
    openCont.style.display = 'none';
})

