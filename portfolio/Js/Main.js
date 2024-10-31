const sections =document.querySelectorAll('section');
const NavLinks =document.querySelectorAll('header nav a');
window.onscroll=()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset=sec.offsetTop-150
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top  < offset + height){
            NavLinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id +']')
            })

        }
    });
    let header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    /*===remove toggel icon and navbar whnen click navbar Link (scroll)*/ 
menuIcon.classList.remove('bx-x');
NavBar.classList.remove('active')
}
/*toggle icone NavBar */
const menuIcon=document.querySelector('#menu-icon');
const NavBar=document.querySelector('.NavBar');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    NavBar.classList.toggle('active')

}
/*===================scroll reveal===========*/ 
ScrollReveal({ 
    // reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1 , .about-img',{origin:'left'})
ScrollReveal().reveal('.home-content p , .about-content',{origin:'right'})
/*===================scroll reveal===========*/ 
const typed=new Typed('.multiple-text',{
    strings:['Junior Full stack web Developer','ana wlh ta ana ', 'Blogger'],
    typeSpeed:150,
    backSpeed:100,
    backDelay:100,
    loop:true

})













