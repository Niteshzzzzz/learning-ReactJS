const basket1 = document.querySelector('.basket1')
const basket2 = document.querySelector('.basket2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const count1 = document.querySelector('.count1')
const count2 = document.querySelector('.count2')

leftApples = 100;
rightApples = 0;

count1.innerHTML = leftApples;
count2.innerHTML = rightApples;

btn2.addEventListener('click', () => {
    if(leftApples>0 && rightApples<100){
        leftApples--;
        count1.textContent = leftApples;
        rightApples++;
        count2.textContent = rightApples;
    }
})

btn1.addEventListener('click', () => {
    if(leftApples<100 && rightApples>0){
        leftApples++;
        count1.textContent = leftApples;
        rightApples--;
        count2.textContent = rightApples;
    }
})