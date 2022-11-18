var navSlide = ()=> {
    const bar = document.querySelector('.bar');
    const nav = document.querySelector('.nav-links');

    bar.addEventListener('click', ()=> {
         nav.classList .toggle('.nav-active');   
    });
}
navSlide();
// const app = () => {
//     navSlide();
// };