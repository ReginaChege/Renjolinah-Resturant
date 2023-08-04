let header = document.querySelector('header');
let imgs = ['images-home/bg-1.jpg','images-home/bg-2.jpg','images-home/bg-3.jpg','images-home/bg-4.jpg','images-home/bg-5.jpg','images-home/bg-6.jpg']; 
let backgroundImg = document.querySelector('.backgroundImg');


function backgroudSlider(){   
    backgroundImg.src = imgs[Math.floor(Math.random() * imgs.length)];   
    
}

setInterval(()=>{
    backgroudSlider();
},1000);

