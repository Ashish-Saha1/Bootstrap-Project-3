

let iconManu = document.getElementById('icon-manu');
let iconCross = document.getElementById('icon-cross');
let leftManu = document.querySelector('.left-navbar');


iconManu.addEventListener('click', function(){
    leftManu.style.display = 'block';
    iconManu.style.display = 'none';
    iconCross.style.display = 'block';



})


iconCross.addEventListener('click', function(){
    leftManu.style.display = 'none';
    iconManu.style.display = 'block';
    iconCross.style.display = 'none';
})



