let formField = document.querySelector('.field');
let submitBtn = document.querySelector('#submitBtn');
let input = document.querySelector('.input');


submitBtn.addEventListener('click', (e) => {
    event.preventDefault();

    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    !re.test(input.value) ? formField.classList.add("error") : success();
});

function success() {
    formField.classList.remove('error');
    formField.submit();
}