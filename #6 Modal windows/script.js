let modal = document.getElementById('modal');
let btn = document.getElementById('myBtn');
let closeSpan = document.getElementById('close');

btn.addEventListener('click', () => {
    modal.style.display = "block";
    console.log('block');
});

closeSpan.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if(event.target == modal)
    modal.style.display = "none";
});
