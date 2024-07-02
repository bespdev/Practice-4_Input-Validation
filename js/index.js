const btn_subscribe = document.getElementById('button-1')
const btn_dismiss = document.getElementById('button-2')
const input = document.getElementById('email__input')
const error_msj = document.getElementById('error')
const span = document.querySelector('span')
const section = document.getElementById('section')
const succes = document.getElementById('succes')

btn_subscribe.addEventListener('click', (event) => {

    event.preventDefault()

    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(input.value === ""){
        error_msj.innerHTML = 'Valid email required';
        input.classList.add('active__error')

    } else if(!emailPattern.test(input.value)){
        error_msj.innerHTML = 'Valid email required';
        input.classList.add('active__error')
             
    } else {
        section.classList.add('hide')
        succes.classList.remove('hide')
        span.innerHTML = input.value
    }
});

btn_dismiss.addEventListener('click', () => {
    section.classList.remove('hide')
    succes.classList.add('hide')
    input.value = ''
    span.innerHTML = ''
    error_msj.innerHTML = ''
    input.classList.remove('active__error')
})