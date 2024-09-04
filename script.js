const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar){
    bar.addEventListener('click', () => {
        console.log('Bar clicked'); // Debugging
        nav.classList.add('active');
        console.log(nav.classList);
    })
}

if (close){
    close.addEventListener('click', () => {
        console.log('Bar clicked'); // Debugging
        nav.classList.remove('active');
        console.log(nav.classList);
    })
}