const numbers = document.querySelectorAll('.num');
const output = document.getElementById('output-box');


let str = "";
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            str = "";
            output.value = str;
        } else if (e.target.innerHTML == 'DEL') {
            str = str.substring(0, str.length - 1);
        } else if (e.target.innerHTML == '=') {
            str = eval(str);
            output.value = str;
        } else if (e.target.innerHTML == '<i class="fa-regular fa-moon"></i>') {
            console.log('moon');
            const main = document.querySelector('.claculator');
            const numbers=document.querySelector('.numbers')
            main.classList.toggle('dark-black');
            output.classList.toggle('dark-black');
            numbers.classList.toggle('black');
        }
        else {
            str += e.target.innerHTML;
            // console.log(e.target.log);
            // console.log(e);
            
        }
        output.value = str;
    })
}

