var navSlide = ()=> {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-links');
    const navLinks = nav.querySelectorAll('.nav-links li');
        // toggle nav

    bar.addEventListener('click', ()=> {
         nav.classList.toggle('.nav-active');   
    });
    // animate links
    navLinks.forEach((link, Freelance)=>{
        console.log(Freelance)
    });
}
navSlide();
// const app = () => {
//     navSlide();
// };