//your code here
const toggle = document.getElementById('swap');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    // this.classList.toggle('bi-moon');
    if(this.classList.toggle('button_night')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})
