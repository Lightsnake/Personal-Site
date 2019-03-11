const colorBtn = document.querySelector('.colorBtn');
const bodyBack = document.querySelector('body');

const colors = ['yellow','red','green','blue'];

colorBtn.addEventListener('click', changeColor);

function changeColor(){
   let random = Math.floor(Math.random()*colors.length);
   bodyBack.style.backgroundColor=colors[random]
}
