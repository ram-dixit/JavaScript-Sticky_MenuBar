window.addEventListener('scroll', function(){
    let navbar = document.getElementById("menu-bar");
    if(window.pageYOffset >= 190){
        //  console.log("Ok........")
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky')
    }
})