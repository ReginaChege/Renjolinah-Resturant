

const menuIcon =  document.querySelectorAll('.menu-icon');
const nav = document.querySelector('nav')

menuIcon.forEach((icon)=>{
    icon.addEventListener('click',() => {
        if(nav.style.display == 'none'){
            nav.style.display = 'flex'
            // nav.classList.remove('trans')
           nav.classList.add('Coming-transition-for-menu-bar')
        }else{            
            nav.style.display = 'none'           

            // nav.classList.add('trans')
        }
    })
    

})





window.addEventListener('scroll',function(){
    const hSec = document.querySelectorAll('.h-sec');
    if(scrollY > 0){
        for(let i=0; i<hSec.length; i++){
            hSec[i].style.backgroundColor = 'black'
        }
    }
    else if(scrollY <= 0){
        for(let i=0; i<hSec.length; i++){
            hSec[i].style.backgroundColor = '#101214ad';
        }
    }

})
